import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import MenuList from './components/MenuList';

const useStyles = makeStyles((theme) => ({
    fullList: {
        width: 'auto'
    },
    root: {
        display: 'flex'
    },
    menuIcon: {
        marginRight: theme.spacing(3)
    },
    drawer: {
        width: 250
    },
    drawerPaper: {
        width: 250,
        backgroundColor: '#273C90',
        zIndex: theme.zIndex.drawer
    },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    listItemText: {
        color: '#fff'
    },
    nestedListItem: {
        paddingLeft: '30px',
        backgroundColor: 'rgb(255 255 255 / 8%)'
    },
    childListItem: {
        paddingLeft: '30px',
        backgroundColor: 'rgb(255 255 255 / 15%)'
    }
}));

const AppLayout = ({ children }) => {
    const classes = useStyles();
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpen = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <CssBaseline />
            <Header classes={classes} handleOpen={handleOpen} />
            <MenuList
                handleOpen={handleOpen}
                openMenu={openMenu}
                classes={classes}
            />
            <div>
                <div className={classes.drawerHeader} />
                <div>{children}</div>
            </div>
        </>
    );
};

export default AppLayout;
