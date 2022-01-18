import styled from 'styled-components';
import { Dialog as MuiDialog, withStyles } from '@material-ui/core';

export const Dialog = withStyles({
    root: {
        '& .MuiDialog-paper': {
            padding: '15px',
            alignItems: 'center'
        }
    }
})(MuiDialog);
