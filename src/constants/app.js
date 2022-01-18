import Dashboard from '../../public/Icons/Dashboard';
import Research from '../../public/Icons/Research';
import Tasks from '../../public/Icons/Tasks';
import Setting from '../../public/Icons/Setting';

export const MENU_ITEMS = [
    {
        id: 1,
        displayText: 'Dashboard',
        path: '/',
        hasNestedMenu: false,
        icon: Dashboard
    },
    {
        id: 2,
        displayText: 'Công việc của tôi',
        path: '/task-management',
        hasNestedMenu: false,
        icon: Tasks
    },
    {
        id: 3,
        displayText: 'Tra cứu',
        path: '/',
        hasNestedMenu: false,
        icon: Research
    },
    {
        id: 4,
        displayText: 'Cài đặt',
        path: '/',
        hasNestedMenu: false,
        icon: Setting
    }

    // {
    //     id: 5,
    //     displayText: 'Bank Transaction Request',
    //     path: '/bank-transaction-request',
    //     hasNestedMenu: false,
    //     icon: Assessment
    // },

    // {
    //     id: 6,
    //     displayText: 'Bank Transaction Response',
    //     path: '/bank-transaction-response',
    //     hasNestedMenu: false,
    //     icon: Assessment
    // },

    // {
    //     id: 7,
    //     displayText: 'Collect Process',
    //     path: '/collect-process',
    //     hasNestedMenu: false,
    //     icon: Assessment
    // },
    // {
    //     id: 8,
    //     displayText: 'Bank Notification Inbound',
    //     path: '/bank-notification-inbound',
    //     hasNestedMenu: false,
    //     icon: Assessment
    // },
    // {
    //     id: 9,
    //     displayText: 'Báo Cáo',
    //     path: '/',
    //     hasNestedMenu: true,
    //     icon: Settings,
    //     nestedMenu: [
    //         {
    //             id: 9.1,
    //             displayText: 'Báo Cáo 1',
    //             icon: Settings,
    //             path: '/'
    //         },
    //         {
    //             id: 9.2,
    //             displayText: 'Báo Cáo 1',
    //             icon: Settings,
    //             path: '/'
    //         }
    //     ]
    // }
];
