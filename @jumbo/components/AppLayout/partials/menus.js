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
    name: <IntlMessages id={'pages.language'} />,
    type: 'item',
    icon: <Event />,
    link: '/language',
  },
  {
    name: <IntlMessages id={'pages.exam'} />,
    type: 'item',
    icon: <Event />,
    link: '/exam',
  },
  {
    name: <IntlMessages id={'pages.papers'} />,
    type: 'item',
    icon: <Pages />,
    link: '/papers',
  },
  {
    name: <IntlMessages id={'pages.unsrruct'} />,
    type: 'item',
    icon: <Pages />,
    link: '/ocr',
  },
  {
    name: <IntlMessages id={'pages.srruct'} />,
    type: 'item',
    icon: <Pages />,
    link: '/structures',
  },
  {
    name: <IntlMessages id={'pages.compair'} />,
    type: 'item',
    icon: <Pages />,
    link: '/compare',
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
