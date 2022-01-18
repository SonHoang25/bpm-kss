import React from 'react';
import { SvgIcon } from '@material-ui/core';

const Signout = ({ style }) => {
    return (
        <SvgIcon
            viewBox="0 0 25 24"
            style={style ? style : { fontSize: '20px' }}
        >
            <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.94 8.90002C20.54 9.21002 22.01 11.06 22.01 15.11V15.24C22.01 19.71 20.22 21.5 15.75 21.5H9.23998C4.76998 21.5 2.97998 19.71 2.97998 15.24V15.11C2.97998 11.09 4.42998 9.24002 7.96998 8.91002"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.5 15V3.62"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15.85 5.85L12.5 2.5L9.15002 5.85"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </SvgIcon>
    );
};

export default Signout;
