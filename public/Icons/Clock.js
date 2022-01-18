import React from 'react';
import { SvgIcon } from '@material-ui/core';

const Clock = ({ style }) => {
    return (
        <SvgIcon
            viewBox="0 0 21 16"
            style={style ? style : { fontSize: '20px' }}
        >
            <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.6667 8.49998C14.6667 12.18 11.68 15.1666 8 15.1666C4.32 15.1666 1.33333 12.18 1.33333 8.49998C1.33333 4.81998 4.32 1.83331 8 1.83331C11.68 1.83331 14.6667 4.81998 14.6667 8.49998Z"
                    stroke="#6A707E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.4733 10.62L8.40667 9.38665C8.04667 9.17332 7.75333 8.65999 7.75333 8.23999V5.50665"
                    stroke="#6A707E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </SvgIcon>
    );
};

export default Clock;
