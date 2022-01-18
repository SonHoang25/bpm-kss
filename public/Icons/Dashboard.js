import React from 'react';
import { SvgIcon } from '@material-ui/core';

const Dashboard = ({ style }) => {
    return (
        <SvgIcon
            viewBox="0 0 18 18"
            style={style ? style : { fontSize: '20px' }}
        >
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.74 9.00001C15.69 9.00001 16.5 8.25001 15.78 5.79001C15.2925 4.13251 13.8675 2.70751 12.21 2.22001C9.75 1.50001 9 2.31001 9 4.26001V6.42001C9 8.25001 9.75 9.00001 11.25 9.00001H13.74Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15 11.025C14.3025 14.4975 10.9725 17.0175 7.18501 16.4025C4.34251 15.945 2.05501 13.6575 1.59001 10.815C0.982509 7.04251 3.48751 3.71251 6.94501 3.00751"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </SvgIcon>
    );
};

export default Dashboard;
