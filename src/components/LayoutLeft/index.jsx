import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import menus from './menu';

import styles from './index.less';

const MenuItem = Menu.Item;

class LayoutLeft extends Component {
    state = {
        selectedKeys: ['1'], // 选中的值
    };

    componentDidMount() {
        if (localStorage.selectedKeys) {
            let _keys = JSON.parse(localStorage.selectedKeys);
            if (!_keys.length || _keys.length === 0) {
                return false;
            }
            this.setState({
                selectedKeys: _keys,
            });
        }
    }

    // 缓存上一次的记录
    onSelect = props => {
        this.setState(
            {
                selectedKeys: props.selectedKeys,
            },
            () => {
                localStorage.selectedKeys = JSON.stringify(props.selectedKeys);
            }
        );
    };

    render() {
        const {selectedKeys} = this.state;

        return (
            <div className={styles.menuDiv}>
                <Menu
                    defaultSelectedKeys={selectedKeys}
                    selectedKeys={selectedKeys}
                    mode="inline"
                    theme="dark"
                    onSelect={this.onSelect}
                    onClick={this.checkSamePath}
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
}

export default LayoutLeft;
