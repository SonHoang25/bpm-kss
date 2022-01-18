import React from 'react';
import clsx from 'clsx';
import { Menu } from '@material-ui/icons';
import {
    AppBar,
    Badge,
    IconButton,
    makeStyles,
    Toolbar
} from '@material-ui/core';
import Signout from '../../../../../public/Icons/Signout';
import Notifications from '../../../../../public/Icons/Notifications';
import InputSearch from '../../../../components/InputSearch';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    search: {
        position: 'relative',
        borderRadius: '10px',
        '&:hover': {
            boxShadow: '0px 0px 10px #ededed'
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: 'auto'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const { handleOpen } = props;
    return (
        <>
            <AppBar position="fixed" color="inherit" elevation={0}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={() => handleOpen()}
                    >
                        <Menu />
                    </IconButton>
                    <InputSearch />

                    <div className={classes.grow} />
                    <IconButton color="inherit" onClick={() => handleOpen()}>
                        <Badge badgeContent={4} color="secondary">
                            <Notifications style={{ fontSize: '25px' }} />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" onClick={() => handleOpen()}>
                        <Signout style={{ fontSize: '25px' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
