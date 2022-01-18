import React from 'react';
import Search from '../../../public/Icons/Search';
import { InputBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px #ededed',

        '&:hover': {
            boxShadow: '0px 0px 10px #ededed'
        },
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
const InputSearch = () => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <Search style={{ fontSize: '25px' }} />
            </div>

            <InputBase
                placeholder="Tìm kiếm tính năng"
                fullWidth
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
};

export default InputSearch;
