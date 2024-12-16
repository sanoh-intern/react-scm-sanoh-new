import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import Swal from 'sweetalert2';
import { FaFileExcel, FaPrint } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import * as XLSX from 'xlsx';
import { API_DN_Detail, API_Update_DN } from '../../../api/api';

const DeliveryNoteDetailEdit = () => {
  interface Detail {
    no: string;
    dnDetailNo: string;
    partNumber: string;
    partName: string;
    UoM: string;
    QTY: string;
    qtyLabel: string;
    qtyRequested: string;
    qtyConfirm: string;
    qtyDelivered: string;
    qtyMinus: string;
    outstandings: { [wave: string]: string | number };
  }

  interface DNDetails {
    noDN: string;
    noPO: string;
    planDelivery: string;
    statusDN: string;
    confirmUpdateAt: string;
  }
  
  const [dnDetails, setDNDetails] = useState<DNDetails>({
    noDN: '',
    noPO: '',
    planDelivery: '',
    statusDN: '',
    confirmUpdateAt: '',
  });
  const [filteredData, setFilteredData] = useState<Detail[]>([]);
  const [confirmMode, setConfirmMode] = useState(false);
  const [outstandingMode, setOutstandingMode] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [waveNumbers, setWaveNumbers] = useState<number[]>([]);
  const location = useLocation();
  const noDN = new URLSearchParams(location.search).get('noDN');

  // Fetch Delivery Note Details
  const fetchDeliveryNotes = async () => {
    const token = localStorage.getItem('access_token');
    setLoading(true);
    try {
      const response = await fetch(`${API_DN_Detail()}${noDN}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch delivery notes');

      const result = await response.json();

      if (result && result.data) {
        const dn = result.data;
        setDNDetails({
          noDN: dn.no_dn,
          noPO: dn.po_no,
          planDelivery: dn.plan_delivery_date,
          statusDN: dn.status_desc,
          confirmUpdateAt: dn.confirm_update_at,
        });
        
        const waveNumberSet = new Set<number>();

        const details = dn.detail.map((detail: any, index: number) => {
          const outstandings: { [wave: string]: string | number } = {};

          if (detail.outstanding && typeof detail.outstanding === 'object') {
            for (const key in detail.outstanding) {
              const qtyArray = detail.outstanding[key]; // e.g., [50]
              if (qtyArray && qtyArray.length > 0) {
                const qty = qtyArray[0]; // Assuming the first element
                outstandings[key] = qty;

                // Extract wave number
                const waveMatch = key.match(/wave_(\d+)/);
                if (waveMatch && waveMatch[1]) {
                  const waveNumber = parseInt(waveMatch[1], 10);
                  waveNumberSet.add(waveNumber);
                }
              }
            }
          }

          return {
            no: (index + 1).toString(),
            dnDetailNo: detail.dn_detail_no || '',
            partNumber: detail.part_no || '-',
            partName: detail.item_desc_a || '-',
            UoM: detail.dn_unit || '-',
            QTY: detail.dn_qty !== null ? detail.dn_qty : '-',
            qtyLabel: detail.dn_snp || '-',
            qtyRequested: detail.dn_qty || '-',
            qtyConfirm: detail.qty_confirm || '', 
            qtyDelivered: detail.receipt_qty || '-',
            qtyMinus: Number(detail.dn_qty || 0) - Number(detail.receipt_qty || 0),
            outstandings,
          };
        });

        const waveNumbersArray = Array.from(waveNumberSet).sort((a, b) => a - b);
        setWaveNumbers(waveNumbersArray);
        setFilteredData(details);
        setLoading(false);
      } else {
        toast.error('No Delivery Notes found.');
      }
    } catch (error) {
      console.error('Error fetching delivery notes:', error);
      if (error instanceof Error) {
        toast.error(`Error fetching delivery notes: ${error.message}`);
      } else {
        toast.error('Error fetching delivery notes');
      }
    }
  };

  useEffect(() => {
    if (noDN) {
      fetchDeliveryNotes();
    }
  }, [noDN]);

  const handleConfirmMode = () => {
    const updatedData = filteredData.map((detail) => ({
      ...detail,
      qtyConfirm: detail.qtyConfirm || detail.qtyRequested,
    }));
    setFilteredData(updatedData);
    setConfirmMode(true);
    setIsCheckboxChecked(false);
  };

  const handleAddOutstanding = () => {
    const newWaveNumber = waveNumbers.length > 0 ? Math.max(...waveNumbers) + 1 : 1;
    setWaveNumbers([...waveNumbers, newWaveNumber]);

    const updatedData = filteredData.map(detail => {
      return {
        ...detail,
        outstandings: {
          ...detail.outstandings,
          [`wave_${newWaveNumber}`]: ''
        }
      };
    });
    setFilteredData(updatedData);
    setOutstandingMode(true);
    setIsCheckboxChecked(false);
  };

  const handleCancel = () => {
    setConfirmMode(false);
    setOutstandingMode(false);
    fetchDeliveryNotes();
  };

  const handleQtyChange = (index: number, value: string) => {
    const updatedData = [...filteredData];
    const numValue = Number(value);
    const maxQty = Number(updatedData[index].qtyRequested);
  
    if (numValue < 0) {
      toast.warning('QTY Confirm Cannot be Negative');
      return;
    }
    
    if (numValue > maxQty) {
      toast.warning(`QTY Confirm Cannot Exceed QTY Requested. Max : ${maxQty}`);
      return;
    }
  
    updatedData[index].qtyConfirm = value;
    setFilteredData(updatedData);
  };

  const handleOutstandingQtyChange = (index: number, waveKey: string, value: string) => {
    const updatedData = [...filteredData];
    updatedData[index].outstandings[waveKey] = value;
    setFilteredData(updatedData);
  };

  const handleSubmit = async () => {
    if (confirmMode) {
      const updates = filteredData.map(detail => ({
        dn_detail_no: detail.dnDetailNo,
        qty_confirm: parseInt(detail.qtyConfirm || '0', 10),
      }));
  
      const payload = {
        no_dn: dnDetails.noDN,
        updates: updates,
      };
  
      try {
        const response = await fetch(`${API_Update_DN()}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
  
        if (!response.ok) throw new Error('Failed to update DN details');
  
        toast.success('Data submitted successfully!');
        Swal.fire({
          title: 'Success',
          text: 'Data submitted successfully!', 
          icon: 'success',
          confirmButtonColor: '#1e3a8a'
        });
        setConfirmMode(false);
        setIsCheckboxChecked(false);
        fetchDeliveryNotes();
      } catch (error) {
        console.error('Failed to update DN details:', error);
        if (error instanceof Error) {
          toast.error(`Failed to update DN details: ${error.message}`);
        } else {
          toast.error('Failed to update DN details');
        }
        Swal.fire('Error', 'Failed to update DN details.', 'error');
      }
    } else if (outstandingMode) {
      const latestWaveNumber = Math.max(...waveNumbers);
      const updates = filteredData.map(detail => {
        const waveKey = `wave_${latestWaveNumber}`;
        return {
          dn_detail_no: detail.dnDetailNo,
          qty_confirm: parseInt(detail.outstandings[waveKey] as string || '0', 10)
        };
      });

      const payload = {
        no_dn: dnDetails.noDN,
        updates: updates,
      };

      try {
        const response = await fetch(`${API_Update_DN()}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
  
        if (!response.ok) throw new Error('Failed to update DN details');

        Swal.fire({
          title: 'Success',
          text: 'Data submitted successfully!', 
          icon: 'success',
          confirmButtonColor: '#1e3a8a'
        });
        setOutstandingMode(false);
        setIsCheckboxChecked(false);
        fetchDeliveryNotes();
      } catch (error) {
        console.error('Failed to update DN details:', error);
        if (error instanceof Error) {
          toast.error(`Failed to update DN details: ${error.message}`);
        } else {
          toast.error('Failed to update DN details');
        }
        Swal.fire('Error', 'Failed to update DN details.', 'error');
      }
    }
  };

  const allQtyConfirmMatch = filteredData.every(detail => detail.qtyConfirm === detail.qtyRequested);

  const handlePrintDN = () => {
    window.open(`/#/print/delivery-note?noDN=${noDN}`, '_blank');
  };

  const handlePrintLabel = () => {
    window.open(`/#/print/label/delivery-note?noDN=${noDN}`, '_blank');
  };

  const handleDownloadExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    
    // First, create header rows with DN and PO information as array of arrays
    const headerRows = [
      ['Delivered To :  PT Sanoh Indonesia', '', '', '', '', '', '', '', '', ''], // Add empty cells to match column count
      ['No. DN :  ' + dnDetails.noDN, '', '', '', '', '', '', '', '', ''],
      ['No. PO :  ' + dnDetails.noPO, '', '', '', '', '', '', '', '', ''],
      ['Plan Delivery Date :  ' + dnDetails.planDelivery, '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['No', 'Part Number', 'Part Name', 'UoM', 'QTY PO', 'QTY Label', 'QTY Requested', 'QTY Confirm', 'QTY Delivered', 'QTY Minus']
    ];

    // Add wave headers if any
    if (waveNumbers.length > 0) {
      const waveHeaders = waveNumbers.map(num => `QTY Outstanding ${num}`);
      headerRows[5] = [...headerRows[5], ...waveHeaders];
    }

    // Add worksheet configuration to merge cells
    const merges = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } },
      { s: { r: 1, c: 0 }, e: { r: 1, c: 1 } },
      { s: { r: 2, c: 0 }, e: { r: 2, c: 1 } },
      { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } }
    ];

    // Convert all data to array format (including the actual data rows)
    const dataRows = filteredData.map(row => {
      const baseData = [
        row.no,
        row.partNumber,
        row.partName,
        row.UoM,
        Number(row.QTY) || 0,
        Number(row.qtyLabel) || 0,
        Number(row.qtyRequested) || 0,
        Number(row.qtyConfirm) || 0,
        Number(row.qtyDelivered) || 0,
        Number(row.qtyMinus) || 0
      ];
      const waveData = waveNumbers.map(num => Number(row.outstandings[`wave_${num}`]) || 0);
      return [...baseData, ...waveData];
    });
  
    // Calculate totals
    const totalsBase = dataRows.reduce((acc, row) => {
      return {
        qtyPO: acc.qtyPO + Number(row[4] || 0),
        qtyLabel: acc.qtyLabel + Number(row[5] || 0),
        qtyRequested: acc.qtyRequested + Number(row[6] || 0),
        qtyConfirm: acc.qtyConfirm + Number(row[7] || 0),
        qtyDelivered: acc.qtyDelivered + Number(row[8] || 0),
        qtyMinus: acc.qtyMinus + Number(row[9] || 0)
      };
    }, { qtyPO: 0, qtyLabel: 0, qtyRequested: 0, qtyConfirm: 0, qtyDelivered: 0, qtyMinus: 0 });

    const totalsWaves = waveNumbers.map((num, idx) => {
      return dataRows.reduce((sum, row) => sum + Number(row[10 + idx] || 0), 0);
    });

    // Add totals row
    const totalsRow = [
      'Totals:',
      '',
      '',
      '',
      totalsBase.qtyPO,
      totalsBase.qtyLabel,
      totalsBase.qtyRequested,
      totalsBase.qtyConfirm,
      totalsBase.qtyDelivered,
      totalsBase.qtyMinus,
      ...totalsWaves
    ];
  
    // Combine all rows
    const allRows = [...headerRows, ...dataRows, totalsRow];
  
    // Create worksheet from all rows
    const ws = XLSX.utils.aoa_to_sheet(allRows);
    ws['!merges'] = merges;
  
    // Set column widths (need to adjust based on dynamic columns)
    const baseColWidths = [
      { wch: 5 },  // No
      { wch: 25 }, // Part Number
      { wch: 40 }, // Part Name
      { wch: 8 },  // UoM
      { wch: 10 }, // QTY PO
      { wch: 10 }, // QTY Label
      { wch: 12 }, // QTY Requested
      { wch: 12 }, // QTY Confirm
      { wch: 12 }, // QTY Delivered
      { wch: 10 }  // QTY Minus
    ];
    const waveColWidths = waveNumbers.map(() => ({ wch: 12 }));
    ws['!cols'] = [...baseColWidths, ...waveColWidths];
  
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Delivery Note Detail');
  
    // Write to file
    XLSX.writeFile(wb, `delivery_note_${dnDetails.noDN}.xlsx`);
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <Breadcrumb 
        pageName="Delivery Note Detail" 
        isSubMenu={true}
        parentMenu={{
          name: "Delivery Note",
          link: "/delivery-note"
        }}
      />
      <div className="font-poppins bg-white text-black">
        <div className="p-2 md:p-4 lg:p-6 space-y-6">
          {/* Header Section */}
          <div className="flex flex-col space-y-4 md:space-y-6">
            {/* No. DN */}
            <div className="flex items-center">
              <span className="text-sm md:text-base font-medium mr-2">No. DN:</span>
              {loading ? (
                <div className="h-8 bg-gray-200 animate-pulse rounded-lg w-32"></div>
              ) : (
                <span className="bg-stone-200 px-4 py-2 rounded-lg text-sm md:text-base">
                  {dnDetails.noDN}
                </span>
              )}
            </div>

            {/* Details Section */}
            <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0 lg:gap-4">
              {/* Left side details */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* No. PO */}
                <div className="flex items-center">
                  <span className="text-sm md:text-base font-medium mr-2">No. PO:</span>
                  {loading ? (
                    <div className="h-8 bg-gray-200 animate-pulse rounded-lg w-32"></div>
                  ) : (
                    <span className="bg-stone-200 px-4 py-2 rounded-lg text-sm md:text-base">
                      {dnDetails.noPO}
                    </span>
                  )}
                </div>
                {/* Plan Delivery Date */}
                <div className="flex items-center">
                  <span className="text-sm md:text-base font-medium mr-2">Plan Delivery Date:</span>
                  {loading ? (
                    <div className="h-8 bg-gray-200 animate-pulse rounded-lg w-36"></div>
                  ) : (
                    <span className="bg-stone-200 px-4 py-2 rounded-lg text-sm md:text-base">
                      {dnDetails.planDelivery}
                    </span>
                  )}
                </div>
              </div>
              {/* Print Buttons */}
              <div className="flex gap-2 items-center">
                <button
                  className="md:w-auto flex items-center justify-center gap-2 px-4 md:px-6 py-2 text-sm md:text-base font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                  onClick={handlePrintLabel}
                >
                  <FaPrint className="w-4 h-4" />
                  <span>Print Label</span>
                </button>
                <button
                  className="md:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-2 text-sm md:text-base font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                  onClick={handlePrintDN}
                >
                  <FaPrint className="w-4 h-4" />
                  <span>Print DN</span>
                </button>
                <button
                  className="md:w-auto flex items-center justify-center gap-2 px-4 md:px-4 py-2 text-sm md:text-base font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                  onClick={handleDownloadExcel}
                >
                  <FaFileExcel className="w-4 h-4" />
                  <span>Download Excel</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="relative overflow-hidden shadow-md rounded-lg border border-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b w-[5%]">No</th>
                    <th className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b w-[15%]">Part Number</th>
                    <th className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b w-[24%]">Part Name</th>
                    <th className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b w-[8%]">UoM</th>
                    <th className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b w-[8%]">QTY PO</th>
                    <th className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b w-[8%]">QTY Label</th>
                    <th className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b w-[8%]">QTY Requested</th>
                    <th className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b w-[8%]">QTY Confirm</th>
                    {waveNumbers.map((waveNumber) => (
                      <th key={`qtyOutstanding${waveNumber}`} className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b">
                        {'Outstanding ' + waveNumber}
                      </th>
                    ))}
                    <th className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b w-[8%]">QTY Delivered</th>
                    <th className="px-3 py-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider text-center border-x border-b w-[8%]">QTY Minus</th>
                    
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {loading ? (
                    Array.from({ length: 5 }).map((_, index) => (
                      <tr key={index} className="animate-pulse">
                        {Array.from({ length: 10 + waveNumbers.length }).map((_, idx) => (
                          <td key={idx} className="px-3 py-3 text-center whitespace-nowrap">
                            <div className="h-4 bg-gray-200 rounded"></div>
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : filteredData.length > 0 ? (
                    filteredData.map((detail, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-3 py-3 text-center whitespace-nowrap">{detail.no}</td>
                        <td className="px-3 py-3 text-center whitespace-nowrap">
                          {detail.partNumber}
                        </td>
                        <td className="px-3 py-3 text-center whitespace-nowrap">{detail.partName}</td>
                        <td className="px-3 py-3 text-center whitespace-nowrap">{detail.UoM}</td>
                        <td className="px-3 py-3 text-center whitespace-nowrap">{detail.QTY}</td>
                        <td className="px-3 py-3 text-center whitespace-nowrap">
                          {detail.qtyLabel}
                        </td>
                        <td className="px-3 py-3 text-center whitespace-nowrap">
                          {detail.qtyRequested}
                        </td>
                        <td className="px-3 py-3 text-center whitespace-nowrap">
                          {confirmMode ? (
                            <input
                              type="number"
                              className="border border-gray-300 rounded text-center"
                              value={detail.qtyConfirm}
                              onChange={(e) => handleQtyChange(index, e.target.value)}
                              min="0"
                              max={detail.qtyRequested}
                            />
                          ) : (
                            detail.qtyConfirm || '-'
                          )}
                        </td>
                        {waveNumbers.map((waveNumber) => {
                          const waveKey = `wave_${waveNumber}`;
                          const qtyValue = detail.outstandings[waveKey] ?? '-';
                          return (
                            <td key={`qtyOutstanding${waveNumber}`} className="px-3 py-3 text-center whitespace-nowrap">
                              {outstandingMode && waveNumber === Math.max(...waveNumbers) ? (
                                <input
                                  type="number"
                                  className="border border-gray-300 rounded text-center"
                                  value={qtyValue}
                                  onChange={(e) => handleOutstandingQtyChange(index, waveKey, e.target.value)}
                                />
                              ) : (
                                qtyValue
                              )}
                            </td>
                          );
                        })}
                        <td className="px-3 py-3 text-center whitespace-nowrap">
                          {detail.qtyDelivered}
                        </td>
                        <td className="px-3 py-3 text-center whitespace-nowrap">
                          {isNaN(Number(detail.qtyMinus)) ? '-' : detail.qtyMinus}
                        </td>
                        
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={10 + waveNumbers.length} className="px-3 py-4 text-center text-gray-500">
                        No details available for this delivery note
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center">
            {!confirmMode && !outstandingMode && (
              <>
                {dnDetails.confirmUpdateAt ? (
                  <button
                    onClick={handleAddOutstanding}
                    className={`px-4 py-2 rounded-lg ${
                      allQtyConfirmMatch ? 'bg-gray-300 cursor-not-allowed text-white' : 'bg-blue-900 text-white'
                    }`}
                    disabled={allQtyConfirmMatch}
                    title={allQtyConfirmMatch ? 'QTY Confirm Exactly Matched' : ''}
                  >
                    Add Outstanding
                  </button>
                ) : (
                  <button
                    onClick={handleConfirmMode}
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg"
                  >
                    Confirm Order
                  </button>
                )}
              </>
            )}

            {(confirmMode || outstandingMode) && (
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isCheckboxChecked}
                    onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
                    className="w-5 h-5"
                  />
                  <span className="text-sm select-none">
                    I confirm that the data I provided is correct
                  </span>
                </label>
              </div>
            )}
          </div>
          <div className="flex items-center mb-20">
            {(confirmMode || outstandingMode) && (
              <>
                <button
                  onClick={handleSubmit}
                  className={`bg-green-600 text-white px-6 py-2 rounded-lg mr-2 ${
                    !isCheckboxChecked ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                  disabled={!isCheckboxChecked}
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryNoteDetailEdit;