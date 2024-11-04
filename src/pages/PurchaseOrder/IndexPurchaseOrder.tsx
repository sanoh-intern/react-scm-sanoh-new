import { useEffect, useState } from "react";
import PurchaseOrder from "./Pages/PO/PurchaseOrder";
import PurchasingPurchaseOrder from "./Pages/PO/PurchasingPurchaseOrder";

const IndexPurchaseOrder: React.FC = () => {
    const [userRole, setUserRole] = useState<string>('');
  
    useEffect(() => {
      const role = localStorage.getItem('role') || '';
      setUserRole(role);
    }, []);
  
    if (userRole === 'supplier' || userRole === 'subcont') {
      return <PurchaseOrder />;
    } else if (userRole === 'purchasing') {
      return <PurchasingPurchaseOrder />;
    } else {
      return <div>No dashboard available for your role.</div>;
    }
  };
  
  export default IndexPurchaseOrder;