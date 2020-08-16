import React from 'react';
import {PageHeader} from 'antd';
import styles from './index.less';

function LayoutHeader(props) {
    return (
        <div className={styles.layoutHeaderDiv}>
            <PageHeader title={props.title} breadcrumb={[]} subTitle={props.subTitle || ''}>
                <div className={styles.contents}>{props.children}</div>
            </PageHeader>
        </div>
    );
}

export default LayoutHeader;
