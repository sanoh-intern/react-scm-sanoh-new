import { NavLink, useLocation } from "react-router-dom"

const DeliveryNote = () => {

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
    )
}

export default DeliveryNote;