import IntlMessages from '../../../utils/IntlMessages';
import {
  AccountCircle,
  ArrowForward,
  Category,
  Chat,
  CheckCircle,
  CloudUpload,
  Colorize,
  ContactMail,
  Contacts,
  Domain,
  DonutSmall,
  DragIndicator,
  Edit,
  EditAttributes,
  Email,
  Error,
  Event,
  Group,
  ImportContacts,
  InsertChart,
  LibraryBooks,
  LocalGroceryStore,
  LockOutlined,
  Map,
  MonetizationOn,
  NotificationImportant,
  Notifications,
  Pages,
  People,
  ShowChart,
  Timeline,
  VpnKey,
  Widgets,
} from '@material-ui/icons';
import React from 'react';

const dashboardsMenus = [
  {
    name: <IntlMessages id={'sidebar.dashboard.crypto'} />,
    icon: <MonetizationOn />,
    type: 'item',
    link: '/dashboard/crypto',
  },
  {
    name: <IntlMessages id={'pages.subject'} />,
    type: 'item',
    icon: <LibraryBooks />,
    link: '/subject',
  },
  {
    name: <IntlMessages id={'pages.years'} />,
    type: 'item',
    icon: <Event />,
    link: '/years',
  },
  {
    name: <IntlMessages id={'pages.papers'} />,
    type: 'item',
    icon: <Pages />,
    link: '/paper',
  },
];


export const sidebarNavs = [
  {
    name: <IntlMessages id={'sidebar.dashboards'} />,
    type: 'section',
    children: dashboardsMenus,
  },
];

export const horizontalDefaultNavs = [
  {
    name: <IntlMessages id={'sidebar.dashboards'} />,
    type: 'collapse',
    children: dashboardsMenus,
  },
];

export const minimalHorizontalMenus = [
  {
    name: <IntlMessages id={'sidebar.dashboards'} />,
    type: 'collapse',
    children: dashboardsMenus,
  },
];
