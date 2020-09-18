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
        path: '/editor',
        icon() {
            return <PieChartOutlined />;
        },
        name: '编辑器',
    },
    {
        path: '/ckeditor',
        icon() {
            return <BarChartOutlined />;
        },
        name: 'ckeditor编辑器',
    },
];

export default menus;
