import React, { useState } from 'react';
import { Grid, IconButton, Tab, Tabs, Typography } from '@material-ui/core';
import RedCircle from '../../../../../public/Icons/RedCircle';
import Reload from '../../../../../public/Icons/Reload';
import InputAutocomplete from '../../../../components/InputAutocomplete';
import InputSearch from '../../../../components/InputSearch';
import TabPanel from '../TabPanel';
import { useForm } from 'react-hook-form';
import { Paper } from '../../styles';
import Task from '../Task';
import { PaddingMD } from '../../../../components/padding';

const TaskList = () => {
    const [value, setValue] = useState(0);

    const { control } = useForm({
        mode: 'onTouched',
        reValidateMode: 'onBlur',
        defaultValues: { filter: null }
    });

    const options = [
        { value: 1, label: 'Chọn tất cả' },
        { value: 2, label: 'Chưa xử lý' }
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`
        };
    }

    return (
        <div>
            <Paper elevation={3}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    variant="fullWidth"
                >
                    <Tab label={`Chưa xử lý (${value})`} {...a11yProps(0)} />
                    <Tab label={`Tất cả (${value})`} {...a11yProps(1)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <PaddingMD />

                    <InputSearch />

                    <PaddingMD />

                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                            xs={11}
                        >
                            <Grid item xs={1}>
                                <RedCircle />
                            </Grid>
                            <Grid item xs={7}>
                                <InputAutocomplete
                                    name="filter"
                                    control={control}
                                    options={options}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton>
                                <Reload />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Task />
                    <Task />
                    <Task />
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <PaddingMD />

                    <InputSearch />

                    <PaddingMD />

                    <Task />
                </TabPanel>
            </Paper>
        </div>
    );
};

export default TaskList;
