import React from 'react';
import {AreaChartOutlined, PieChartOutlined, BarChartOutlined} from '@ant-design/icons';

const menus = [
    {
        path: '/',
        icon() {
            return <AreaChartOutlined />;
        },
        name: '主页',
    },
    {
        path: '/person',
        icon() {
            return <PieChartOutlined />;
        },
        name: '个人',
    },
    {
        path: '/setting',
        icon() {
            return <BarChartOutlined />;
        },
        name: '设置',
    },
];

export default menus;
