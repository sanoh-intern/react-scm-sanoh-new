import { NavLink, useLocation } from "react-router-dom";

export const SupplierWarehouse = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const deliveryNotePaths = [
        '/delivery-note', 
        '/delivery-note-detail', 
        '/delivery-note-detail-edit'
    ];
    
    const isDeliveryNoteActive = deliveryNotePaths.some(path => 
        currentPath.startsWith(path) || currentPath.includes(path)
    );

    return (
        <div>
            <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-black-2  dark:text-bodydark2">
                SUPPLIER WAREHOUSE MENU 
                </h3>
                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item Dashboard --> */}            
                    <li>
                        <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out ${
                            isActive
                                ? 'bg-graydark text-white'
                                : 'text-black-2 dark:text-bodydark2 hover:bg-graydark hover:text-white dark:hover:bg-meta-4'
                            }`
                        }
                        >
                        <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                            fill=""
                            />
                            <path
                            d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                            fill=""
                            />
                            <path
                            d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                            fill=""
                            />
                            <path
                            d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                            fill=""
                            />
                        </svg>
                        Dashboard
                        </NavLink>
                    </li>
                    {/* <!-- Menu Item Dashboard --> */}

                    {/* <!-- Menu Item Delivery Note --> */}
                    <li>
                        <NavLink
                        to="/delivery-note"
                        end
                        className={
                            `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out ${
                            isDeliveryNoteActive
                                ? 'bg-graydark text-white'
                                : 'text-black-2 dark:text-bodydark2 hover:bg-graydark hover:text-white dark:hover:bg-meta-4'
                            }`
                        }
                        >

                        <svg
                            className="fill-current"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_130_9756)">
                            <path
                                d="M15.625 2.49989H12.7922C12.441 2.1067 12.0108 1.79212 11.5296 1.57673C11.0484 1.36134 10.5272 1.25 10 1.25C9.47282 1.25 8.95158 1.36134 8.47041 1.57673C7.98924 1.79212 7.55899 2.1067 7.20781 2.49989H4.375C4.04348 2.49989 3.72554 2.63158 3.49112 2.866C3.2567 3.10042 3.125 3.41837 3.125 3.74989V16.8749C3.125 17.2064 3.2567 17.5243 3.49112 17.7588C3.72554 17.9932 4.04348 18.1249 4.375 18.1249H15.625C15.9565 18.1249 16.2745 17.9932 16.5089 17.7588C16.7433 17.5243 16.875 17.2064 16.875 16.8749V3.74989C16.875 3.41837 16.7433 3.10042 16.5089 2.866C16.2745 2.63158 15.9565 2.49989 15.625 2.49989ZM10 2.49989C10.663 2.49989 11.2989 2.76328 11.7678 3.23212C12.2366 3.70096 12.5 4.33685 12.5 4.99989H7.5C7.5 4.33685 7.76339 3.70096 8.23223 3.23212C8.70107 2.76328 9.33696 2.49989 10 2.49989ZM12.5 12.4999H7.5C7.33424 12.4999 7.17527 12.434 7.05806 12.3168C6.94085 12.1996 6.875 12.0406 6.875 11.8749C6.875 11.7091 6.94085 11.5502 7.05806 11.4329C7.17527 11.3157 7.33424 11.2499 7.5 11.2499H12.5C12.6658 11.2499 12.8247 11.3157 12.9419 11.4329C13.0592 11.5502 13.125 11.7091 13.125 11.8749C13.125 12.0406 13.0592 12.1996 12.9419 12.3168C12.8247 12.434 12.6658 12.4999 12.5 12.4999ZM12.5 9.99989H7.5C7.33424 9.99989 7.17527 9.93404 7.05806 9.81683C6.94085 9.69962 6.875 9.54065 6.875 9.37489C6.875 9.20913 6.94085 9.05016 7.05806 8.93295C7.17527 8.81573 7.33424 8.74989 7.5 8.74989H12.5C12.6658 8.74989 12.8247 8.81573 12.9419 8.93295C13.0592 9.05016 13.125 9.20913 13.125 9.37489C13.125 9.54065 13.0592 9.69962 12.9419 9.81683C12.8247 9.93404 12.6658 9.99989 12.5 9.99989Z"
                                fill=""
                            />
                            </g>
                            <defs>
                            <clipPath id="clip0_130_9756">
                                <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.052124)"
                                />
                            </clipPath>
                            </defs>
                        </svg>
                        Delivery Note
                        </NavLink>
                    </li>
                    {/* <!-- Menu Item Delivery Note --> */}
                </ul>
            </div>

            {/* <!-- History Group --> */}
            <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-black-2 dark:text-bodydark2">
                HISTORY
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item History Delivery Note --> */}
                    <li>
                        <NavLink
                        to="/history-delivery-note"
                        end
                        className={({ isActive }) =>
                            `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out ${
                            isActive
                                ? 'bg-graydark text-white'
                                : 'text-black-2 dark:text-bodydark2 hover:bg-graydark hover:text-white dark:hover:bg-meta-4'
                            }`
                        }
                        >
                        <svg
                            className="fill-current"
                            width="19"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_130_9763)">
                            <path id="Union" fillRule="evenodd" d="M8.999498571428571 1.606204285714286c-4.0833900000000005 0 -7.393615714285715 3.3102000000000005 -7.393615714285715 7.3935257142857145 0 4.083312857142857 3.3102257142857145 7.393512857142858 7.393615714285715 7.393512857142858 3.4950985714285716 0 6.425601428571429 -2.4258857142857146 7.1957442857142855 -5.686611428571429 0.1020857142857143 -0.43191 0.5348571428571429 -0.6993385714285715 0.966857142857143 -0.5973171428571429 0.4318714285714286 0.10203428571428572 0.6993000000000001 0.5348700000000001 0.5973428571428572 0.9667928571428572 -0.9378000000000001 3.969578571428572 -4.502828571428572 6.924278571428572 -8.759944285714287 6.924278571428572 -4.97097 0 -9.000754151142857 -4.029685714285715 -9.000754151142857 -9.000655714285715C-0.0012555797142857145 4.028785714285715 4.028528571428572 -0.0009416854285714287 8.999498571428571 -0.0009416854285714287c2.7603385714285715 0 5.229501428571428 1.2424466854285716 6.880101428571429 3.197355971142857l0.7489285714285715 -0.7489285714285715c0.22975714285714288 -0.22982142857142857 0.5754857142857144 -0.29856857142857146 0.8757000000000001 -0.17418857142857141 0.30021428571428577 0.12436714285714286 0.49602857142857143 0.41738142857142857 0.49602857142857143 0.742397142857143v2.8312971428571427c0 0.44380285714285717 -0.35974285714285714 0.8035714285714286 -0.8035714285714286 0.8035714285714286h-0.6095571428571429c-0.005914285714285715 0.00014142857142857145 -0.01182857142857143 0.00020571428571428574 -0.017742857142857144 0.0002185714285714286 -0.0063 0 -0.012728571428571431 -0.00006428571428571429 -0.01902857142857143 -0.0002185714285714286h-2.1849428571428575c-0.3250285714285715 0 -0.6180428571428572 -0.19577571428571428 -0.7425 -0.4960542857142857 -0.12432857142857143 -0.30027857142857145 -0.05554285714285715 -0.6459042857142857 0.17421428571428574 -0.8757257142857143l0.9412714285714286 -0.9412200000000002c-1.3561714285714286 -1.6671985714285715 -3.4237800000000003 -2.7313585714285717 -5.738901428571429 -2.7313585714285717ZM10.12469142857143 4.5c0 -0.6213214285714286 -0.5036785714285714 -1.125 -1.125 -1.125s-1.125 0.5036785714285714 -1.125 1.125V9c0 0.6213214285714286 0.5036785714285714 1.125 1.125 1.125h3.2142857142857144c0.6213214285714286 0 1.1250514285714288 -0.5036785714285714 1.1250514285714288 -1.125s-0.5037300000000001 -1.125 -1.1250514285714288 -1.125h-2.0892857142857144V4.5Z" clipRule="evenodd" strokeWidth="1"></path>
                            
                            </g>
                            <defs>
                            <clipPath id="clip0_130_9763">
                                <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.052124)"
                                />
                            </clipPath>
                            </defs>
                        </svg>
                        History Delivery Note
                        </NavLink>
                    </li>
                    {/* <!-- Menu Item History Delivery Note --> */}
                </ul>
            </div>

        </div>
    );
};