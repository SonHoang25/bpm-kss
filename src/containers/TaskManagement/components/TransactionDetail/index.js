import { Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Clock from '../../../../../public/Icons/Clock';
import { Paper } from '../../styles';
import DialogApprover from '../../../../components/DialogApprover';
import { PaddingMD, PaddingXS } from '../../../../components/padding';

const TransactionDetail = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <PaddingMD />

            <Paper
                elevation={0}
                style={{
                    backgroundColor: '#F7F7F7'
                }}
            >
                <Typography variant="h6">Xử lý GD chi hộ lỗi</Typography>

                <PaddingXS />

                <Grid container direction="row" spacing={2}>
                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Grid item xs={4}>
                            <Typography>
                                <Clock /> 12 phút trước
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                <Clock /> 3h48
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                <Clock /> Chờ xử lý
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Grid item container justifyContent="flex-end" xs={4}>
                            <Typography>Vai trò: Kiểm tra</Typography>
                        </Grid>
                        <Grid item container justifyContent="flex-end" xs={4}>
                            <Typography>Mai.DTG</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            <PaddingMD />

            <Paper
                elevation={0}
                style={{
                    backgroundColor: '#F7F7F7'
                }}
            >
                <Grid container alignItems="center" direction="row" spacing={2}>
                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>
                </Grid>
            </Paper>

            <PaddingMD />

            <Paper
                elevation={0}
                style={{
                    backgroundColor: '#F7F7F7'
                }}
            >
                <Grid container alignItems="center" direction="row" spacing={2}>
                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-start" xs={6}>
                        <Typography variant="body2" disabled>
                            Kênh chi hộ
                        </Typography>
                    </Grid>

                    <Grid item container justifyContent="flex-end" xs={6}>
                        <Typography variant="body2">KLB</Typography>
                    </Grid>
                </Grid>
            </Paper>

            <PaddingMD />

            <Grid container alignItems="center" direction="row" spacing={2}>
                <Grid item container justifyContent="flex-start" xs={6}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleOpenDialog}
                    >
                        Hoàn tiền
                    </Button>
                </Grid>

                <Grid item container justifyContent="flex-end" xs={3}>
                    <Button variant="outlined" color="secondary">
                        Chi lại tự động
                    </Button>
                </Grid>
                <Grid item container justifyContent="flex-end" xs={3}>
                    <Button variant="outlined" color="secondary">
                        Đi UNC thủ công
                    </Button>
                </Grid>
            </Grid>

            <DialogApprover
                openDialog={openDialog}
                handleCloseDialog={handleCloseDialog}
            />
        </>
    );
};

export default TransactionDetail;
