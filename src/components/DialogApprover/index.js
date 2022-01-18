import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    IconButton
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import Alert from '../../../public/Icons/Alert';
import { Dialog } from '../DialogApprover/styles';
import { PaddingSM } from '../padding';

const DialogApprover = (props) => {
    const { openDialog, handleCloseDialog } = props;
    return (
        <Dialog
            open={openDialog}
            maxWidth="sm"
            fullWidth
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <IconButton onClick={handleCloseDialog}>
                        <Close />
                    </IconButton>
                </Grid>
            </Grid>

            <Alert style={{ fontSize: '28px' }} />

            <PaddingSM />

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Có 12 giao dịch đang được chọn
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <Button
                            onClick={handleCloseDialog}
                            variant="contained"
                            color="primary"
                        >
                            Hoàn tiền
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={handleCloseDialog}
                            variant="outlined"
                            color="primary"
                            autoFocus
                        >
                            Chi lại tự động
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={handleCloseDialog}
                            variant="outlined"
                            color="primary"
                            autoFocus
                        >
                            Đi UNC thủ công
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
};

export default DialogApprover;
