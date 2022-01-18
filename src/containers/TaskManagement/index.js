import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { GlobalWrapper } from '../../styles/GlobalStyles';
import InputAutocomplete from '../../components/InputAutocomplete';
import Detail from './components/Detail';
import { useForm } from 'react-hook-form';
import TaskList from './components/TaskList';
import { PaddingSM } from '../../components/padding';

const TaskManagement = () => {
    const { control } = useForm({
        mode: 'onTouched',
        reValidateMode: 'onBlur',
        defaultValues: { filter: null }
    });

    const options = [
        { value: 1, label: 'Trong tuần' },
        { value: 2, label: 'Trong tháng' }
    ];
    return (
        <GlobalWrapper>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={3}
            >
                <Grid
                    item
                    container
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                    xs={9}
                >
                    <Grid item xs={2}>
                        <Typography>Thời gian: </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <InputAutocomplete
                            name="filter"
                            control={control}
                            options={options}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth variant="contained" color="secondary">
                        Tạo yêu cầu
                    </Button>
                </Grid>
            </Grid>

            <PaddingSM />

            <Grid
                container
                direction="row"
                justifyContent="space-between"
                spacing={3}
            >
                <Grid item xs={4}>
                    <TaskList />
                </Grid>
                <Grid item xs={8}>
                    <Detail />
                </Grid>
            </Grid>
        </GlobalWrapper>
    );
};

export default TaskManagement;
