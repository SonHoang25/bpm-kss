import React from 'react';
import { SvgIcon } from '@material-ui/core';

const Notifications = ({ style }) => {
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
                <g clipPath="url(#clip0_6_3441)">
                    <path
                        d="M12.52 2.90997C9.21003 2.90997 6.52003 5.59997 6.52003 8.90997V11.8C6.52003 12.41 6.26003 13.34 5.95003 13.86L4.80003 15.77C4.09003 16.95 4.58003 18.26 5.88003 18.7C10.19 20.14 14.84 20.14 19.15 18.7C20.36 18.3 20.89 16.87 20.23 15.77L19.08 13.86C18.78 13.34 18.52 12.41 18.52 11.8V8.90997C18.52 5.60997 15.82 2.90997 12.52 2.90997Z"
                        stroke="#6A707E"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M14.37 3.2C14.06 3.11 13.74 3.04 13.41 3C12.45 2.88 11.53 2.95 10.67 3.2C10.96 2.46 11.68 1.94 12.52 1.94C13.36 1.94 14.08 2.46 14.37 3.2Z"
                        stroke="#6A707E"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.52 19.06C15.52 20.71 14.17 22.06 12.52 22.06C11.7 22.06 10.94 21.72 10.4 21.18C9.86002 20.64 9.52002 19.88 9.52002 19.06"
                        stroke="#6A707E"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_6_3441">
                        <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.5)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </SvgIcon>
    );
};

export default Notifications;
