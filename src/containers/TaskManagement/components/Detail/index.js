import { Tab, Tabs } from '@material-ui/core';
import TabPanel from '../TabPanel';
import React, { useState } from 'react';
import { Paper } from '../../styles';
import TransactionDetail from '../TransactionDetail';
import TransactionHistory from '../TransactionHistory';

const Detail = (props) => {
    const [value, setValue] = useState(0);

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
        <>
            <Paper elevation={3}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    aria-label="full width tabs example"
                >
                    <Tab label="Thông tin giao dịch" {...a11yProps(0)} />
                    <Tab label="Lịch sử" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <TransactionDetail />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TransactionHistory />
                </TabPanel>
            </Paper>
        </>
    );
};

export default Detail;
