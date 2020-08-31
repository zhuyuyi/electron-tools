import React, {useState, useEffect} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import menus from './menu';

import styles from './index.less';

const MenuItem = Menu.Item;

function LayoutLeft() {
    const [selectedKeys, setSelectedKeys] = useState(['1']);

    // 副作用
    useEffect(() => {
        if (sessionStorage.selectedKeys) {
            let _keys = JSON.parse(sessionStorage.selectedKeys);
            if (!_keys.length || _keys.length === 0) {
                return false;
            }
            setSelectedKeys(_keys);
        }
    }, []);

    // 选择的菜单
    const onSelect = props => {
        setSelectedKeys(props.selectedKeys);
        sessionStorage.selectedKeys = JSON.stringify(props.selectedKeys);
    };

    return (
        <div className={styles.menuDiv}>
            <Menu
                defaultSelectedKeys={selectedKeys}
                selectedKeys={selectedKeys}
                mode="inline"
                theme="dark"
                onSelect={onSelect}
            >
                {menus.map((item, index) => {
                    return (
                        <MenuItem key={String(index + 1)} icon={item.icon()}>
                            <Link to={item.path}>{item.name}</Link>
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
}

export default LayoutLeft;
