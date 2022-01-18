import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import RedCircle from '../../../../../public/Icons/RedCircle';
import { PaddingMD, PaddingSM } from '../../../../components/padding';
import { Paper } from '../../styles';

const useStyles = makeStyles((theme) => ({
    subTitle: {
        color: '#6A707E'
    }
}));

const Task = () => {
    const classes = useStyles();
    return (
        <>
            <PaddingMD />

            <Paper elevation={3}>
                <Typography
                    variant="h6"
                    style={{
                        backgroundColor: '#F7F7F7',
                        padding: '5px 16px'
                    }}
                >
                    <RedCircle
                        style={{
                            margin: '0 10px 0 0 ',
                            fontSize: '20px'
                        }}
                    />
                    Xử lý GD chi hộ lỗi
                </Typography>

                <PaddingSM />

                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Typography className={classes.subTitle}>
                            Số TKCK
                        </Typography>
                        <Typography paragraph>0C470000001</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography className={classes.subTitle}>
                            Số tiền
                        </Typography>
                        <Typography paragraph>100.000.000</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Typography className={classes.subTitle}>
                            Họ và tên
                        </Typography>
                        <Typography paragraph>Nguyễn Thị Thu Trang</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography className={classes.subTitle}>
                            Thời hạn
                        </Typography>
                        <Typography paragraph>09-02-2022</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default Task;
