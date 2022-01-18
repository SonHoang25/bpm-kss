import { createTheme } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const theme = createTheme({
    overrides: {
        MuiSvgIcon: {
            root: {
                height: 'auto'
            }
        },
        MuiOutlinedInput: {
            root: {
                position: 'relative',
                borderRadius: '8px'
            }
        },
        MuiDialogContent: {
            root: {
                overflowY: 'unset'
            }
        },
        MuiDialogActions: {
            root: {
                padding: '16px 24px'
            }
        },
        MuiButton: {
            root: {
                borderRadius: '8px'
            }
        },
        MuiInputBase: {
            root: {
                Mui: {
                    disabled: {
                        color: 'rgba(0, 0, 0, 0.87)'
                    }
                }
            },
            input: {
                color: 'rgba(0, 0, 0, 0.87)'
            }
        },
        MuiDialog: {
            paper: {
                overflowY: 'unset'
            }
        },
        MuiListItemIcon: { root: { minWidth: '40px' } }
    },
    palette: {
        primary: {
            // light: '#ff7961',
            main: '#273C90'
            // dark: '#ba000d'
        }
        // secondary: {
        //     // light: '#ff7961',
        //     main: '#F05025'
        //     // dark: '#ba000d',
        //     // contrastText: '#000'
        // }
    }
});

const GlobalStyles = createGlobalStyle`
    html,
    body,
`;

export { GlobalStyles, theme };

export const GlobalWrapper = styled.div`
    margin: 0 auto;
    padding: ${(props) => props.theme.spacing(3)}px;

    ${
        '' /* @media only screen and (max-width: 1550px) {
        width: 960px;
    }

    @media only screen and (min-width: 1551px) {
        width: 1280px;
    }

    @media only screen and (min-width: 1565px) {
        width: 1280px;
    }

    @media only screen and (min-width: 1690px) {
        width: 1400px;
    }

    @media only screen and (min-width: 1875px) {
        width: 100%;
    } */
    }
`;
