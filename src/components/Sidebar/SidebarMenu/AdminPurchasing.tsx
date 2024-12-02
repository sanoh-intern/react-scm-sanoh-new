import { NavLink } from "react-router-dom";

export const AdminPurchasing = () => {
    const { pathname } = location;
    return (
        <div>
            <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-black-2  dark:text-bodydark2">
                PURCHASING MENU 
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

                    {/* <!-- Menu Item Purchase Order --> */}
                    <li>
                    <NavLink
                        to="/purchase-order"
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
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g clipPath="url(#clip0_130_9756)">
                            <path
                            d="M17.6 5.16865L10.725 1.40694C10.5413 1.30544 10.3349 1.2522 10.125 1.2522C9.91513 1.2522 9.70869 1.30544 9.525 1.40694L2.65 5.17022C2.45366 5.27764 2.28977 5.43581 2.17543 5.6282C2.06109 5.8206 2.00051 6.04016 2 6.26397V13.7358C2.00051 13.9596 2.06109 14.1792 2.17543 14.3716C2.28977 14.564 2.45366 14.7222 2.65 14.8296L9.525 18.5929C9.70869 18.6944 9.91513 18.7476 10.125 18.7476C10.3349 18.7476 10.5413 18.6944 10.725 18.5929L17.6 14.8296C17.7963 14.7222 17.9602 14.564 18.0746 14.3716C18.1889 14.1792 18.2495 13.9596 18.25 13.7358V6.26475C18.2499 6.04055 18.1895 5.82049 18.0752 5.62765C17.9608 5.43481 17.7967 5.27627 17.6 5.16865ZM10.125 2.50069L16.4023 5.93819L14.0758 7.21084L7.79844 3.77334L10.125 2.50069ZM10.125 9.37569L3.84766 5.93819L6.49687 4.4874L12.7742 7.9249L10.125 9.37569ZM17 13.739L10.75 17.1601V10.4562L13.25 9.08819V11.8757C13.25 12.0414 13.3158 12.2004 13.4331 12.3176C13.5503 12.4348 13.7092 12.5007 13.875 12.5007C14.0408 12.5007 14.1997 12.4348 14.3169 12.3176C14.4342 12.2004 14.5 12.0414 14.5 11.8757V8.40381L17 7.03584V13.7358V13.739Z"
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
                        Purchase Order
                    </NavLink>
                    </li>
                    {/* <!-- Menu Item Purchase Order --> */}

                </ul>
                </div>

                {/* <!-- History Group --> */}
                <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-black-2 dark:text-bodydark2">
                    HISTORY
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item History Purchase Order --> */}
                    <li>
                    <NavLink
                        to="/history-purchase-order"
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
                        History Purchase Order
                    </NavLink>
                    </li>
                    {/* <!-- Menu Item History Purchase Order --> */}

                </ul>
                </div>

                {/* <!-- OTHER Group --> */}
                <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-black-2 dark:text-bodydark2">
                    OTHER
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item Performance Report --> */}
                    <li>
                    <NavLink
                        to="/performance-report"
                        className={() =>
                        `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out ${
                            pathname.includes('performance-report')
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
                        <g clipPath="url(#clip0_130_9763)">
                            <path
                            d="M13.75 0H1.25C0.918479 0 0.600537 0.131696 0.366116 0.366116C0.131696 0.600537 0 0.918479 0 1.25V13.75C0 14.0815 0.131696 14.3995 0.366116 14.6339C0.600537 14.8683 0.918479 15 1.25 15H13.75C14.0815 15 14.3995 14.8683 14.6339 14.6339C14.8683 14.3995 15 14.0815 15 13.75V1.25C15 0.918479 14.8683 0.600537 14.6339 0.366116C14.3995 0.131696 14.0815 0 13.75 0ZM3.125 11.875H2.5C2.33424 11.875 2.17527 11.8092 2.05806 11.6919C1.94085 11.5747 1.875 11.4158 1.875 11.25C1.875 11.0842 1.94085 10.9253 2.05806 10.8081C2.17527 10.6908 2.33424 10.625 2.5 10.625H3.125C3.29076 10.625 3.44973 10.6908 3.56694 10.8081C3.68415 10.9253 3.75 11.0842 3.75 11.25C3.75 11.4158 3.68415 11.5747 3.56694 11.6919C3.44973 11.8092 3.29076 11.875 3.125 11.875ZM3.125 8.125H2.5C2.33424 8.125 2.17527 8.05915 2.05806 7.94194C1.94085 7.82473 1.875 7.66576 1.875 7.5C1.875 7.33424 1.94085 7.17527 2.05806 7.05806C2.17527 6.94085 2.33424 6.875 2.5 6.875H3.125C3.29076 6.875 3.44973 6.94085 3.56694 7.05806C3.68415 7.17527 3.75 7.33424 3.75 7.5C3.75 7.66576 3.68415 7.82473 3.56694 7.94194C3.44973 8.05915 3.29076 8.125 3.125 8.125ZM3.125 4.375H2.5C2.33424 4.375 2.17527 4.30915 2.05806 4.19194C1.94085 4.07473 1.875 3.91576 1.875 3.75C1.875 3.58424 1.94085 3.42527 2.05806 3.30806C2.17527 3.19085 2.33424 3.125 2.5 3.125H3.125C3.29076 3.125 3.44973 3.19085 3.56694 3.30806C3.68415 3.42527 3.75 3.58424 3.75 3.75C3.75 3.91576 3.68415 4.07473 3.56694 4.19194C3.44973 4.30915 3.29076 4.375 3.125 4.375ZM12.5 11.875H5.625C5.45924 11.875 5.30027 11.8092 5.18306 11.6919C5.06585 11.5747 5 11.4158 5 11.25C5 11.0842 5.06585 10.9253 5.18306 10.8081C5.30027 10.6908 5.45924 10.625 5.625 10.625H12.5C12.6658 10.625 12.8247 10.6908 12.9419 10.8081C13.0592 10.9253 13.125 11.0842 13.125 11.25C13.125 11.4158 13.0592 11.5747 12.9419 11.6919C12.8247 11.8092 12.6658 11.875 12.5 11.875ZM12.5 8.125H5.625C5.45924 8.125 5.30027 8.05915 5.18306 7.94194C5.06585 7.82473 5 7.66576 5 7.5C5 7.33424 5.06585 7.17527 5.18306 7.05806C5.30027 6.94085 5.45924 6.875 5.625 6.875H12.5C12.6658 6.875 12.8247 6.94085 12.9419 7.05806C13.0592 7.17527 13.125 7.33424 13.125 7.5C13.125 7.66576 13.0592 7.82473 12.9419 7.94194C12.8247 8.05915 12.6658 8.125 12.5 8.125ZM12.5 4.375H5.625C5.45924 4.375 5.30027 4.30915 5.18306 4.19194C5.06585 4.07473 5 3.91576 5 3.75C5 3.58424 5.06585 3.42527 5.18306 3.30806C5.30027 3.19085 5.45924 3.125 5.625 3.125H12.5C12.6658 3.125 12.8247 3.19085 12.9419 3.30806C13.0592 3.42527 13.125 3.58424 13.125 3.75C13.125 3.91576 13.0592 4.07473 12.9419 4.19194C12.8247 4.30915 12.6658 4.375 12.5 4.375Z"
                            fill=""
                            />
                            
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
                        Performance Report
                    </NavLink>
                    </li>
                    {/* <!-- Menu Item Performance Report --> */}

                    {/* <!-- Menu Item Forecast Report --> */}
                    <li>
                    <NavLink
                        to="/forecast-report"
                        className={() =>
                        `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out ${
                            pathname.includes('forecast-report')
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
                        <g clipPath="url(#clip0_130_9763)">
                            <path
                            d="M13.75 0H1.25C0.918479 0 0.600537 0.131696 0.366116 0.366116C0.131696 0.600537 0 0.918479 0 1.25V13.75C0 14.0815 0.131696 14.3995 0.366116 14.6339C0.600537 14.8683 0.918479 15 1.25 15H13.75C14.0815 15 14.3995 14.8683 14.6339 14.6339C14.8683 14.3995 15 14.0815 15 13.75V1.25C15 0.918479 14.8683 0.600537 14.6339 0.366116C14.3995 0.131696 14.0815 0 13.75 0ZM3.125 11.875H2.5C2.33424 11.875 2.17527 11.8092 2.05806 11.6919C1.94085 11.5747 1.875 11.4158 1.875 11.25C1.875 11.0842 1.94085 10.9253 2.05806 10.8081C2.17527 10.6908 2.33424 10.625 2.5 10.625H3.125C3.29076 10.625 3.44973 10.6908 3.56694 10.8081C3.68415 10.9253 3.75 11.0842 3.75 11.25C3.75 11.4158 3.68415 11.5747 3.56694 11.6919C3.44973 11.8092 3.29076 11.875 3.125 11.875ZM3.125 8.125H2.5C2.33424 8.125 2.17527 8.05915 2.05806 7.94194C1.94085 7.82473 1.875 7.66576 1.875 7.5C1.875 7.33424 1.94085 7.17527 2.05806 7.05806C2.17527 6.94085 2.33424 6.875 2.5 6.875H3.125C3.29076 6.875 3.44973 6.94085 3.56694 7.05806C3.68415 7.17527 3.75 7.33424 3.75 7.5C3.75 7.66576 3.68415 7.82473 3.56694 7.94194C3.44973 8.05915 3.29076 8.125 3.125 8.125ZM3.125 4.375H2.5C2.33424 4.375 2.17527 4.30915 2.05806 4.19194C1.94085 4.07473 1.875 3.91576 1.875 3.75C1.875 3.58424 1.94085 3.42527 2.05806 3.30806C2.17527 3.19085 2.33424 3.125 2.5 3.125H3.125C3.29076 3.125 3.44973 3.19085 3.56694 3.30806C3.68415 3.42527 3.75 3.58424 3.75 3.75C3.75 3.91576 3.68415 4.07473 3.56694 4.19194C3.44973 4.30915 3.29076 4.375 3.125 4.375ZM12.5 11.875H5.625C5.45924 11.875 5.30027 11.8092 5.18306 11.6919C5.06585 11.5747 5 11.4158 5 11.25C5 11.0842 5.06585 10.9253 5.18306 10.8081C5.30027 10.6908 5.45924 10.625 5.625 10.625H12.5C12.6658 10.625 12.8247 10.6908 12.9419 10.8081C13.0592 10.9253 13.125 11.0842 13.125 11.25C13.125 11.4158 13.0592 11.5747 12.9419 11.6919C12.8247 11.8092 12.6658 11.875 12.5 11.875ZM12.5 8.125H5.625C5.45924 8.125 5.30027 8.05915 5.18306 7.94194C5.06585 7.82473 5 7.66576 5 7.5C5 7.33424 5.06585 7.17527 5.18306 7.05806C5.30027 6.94085 5.45924 6.875 5.625 6.875H12.5C12.6658 6.875 12.8247 6.94085 12.9419 7.05806C13.0592 7.17527 13.125 7.33424 13.125 7.5C13.125 7.66576 13.0592 7.82473 12.9419 7.94194C12.8247 8.05915 12.6658 8.125 12.5 8.125ZM12.5 4.375H5.625C5.45924 4.375 5.30027 4.30915 5.18306 4.19194C5.06585 4.07473 5 3.91576 5 3.75C5 3.58424 5.06585 3.42527 5.18306 3.30806C5.30027 3.19085 5.45924 3.125 5.625 3.125H12.5C12.6658 3.125 12.8247 3.19085 12.9419 3.30806C13.0592 3.42527 13.125 3.58424 13.125 3.75C13.125 3.91576 13.0592 4.07473 12.9419 4.19194C12.8247 4.30915 12.6658 4.375 12.5 4.375Z"
                            fill=""
                            />
                            
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
                        Forecast Report
                    </NavLink>
                    </li>
                    {/* <!-- Menu Item Forecast Report --> */}
                </ul>
            </div>
    </div>
    )
};