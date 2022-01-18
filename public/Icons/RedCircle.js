import React from 'react';
import { SvgIcon } from '@material-ui/core';

const RedCircle = ({ style }) => {
    return (
        <SvgIcon
            viewBox="0 0 13 13"
            style={style ? style : { fontSize: '20px' }}
        >
            <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="6.22778"
                    cy="6.81853"
                    r="5"
                    stroke="#F04F24"
                    strokeWidth="2"
                />
            </svg>
        </SvgIcon>
    );
};

export default RedCircle;
