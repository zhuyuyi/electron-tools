import React, {Fragment} from 'react';
import styles from './ChooseList.less';
import {echartsData} from './echarts';

function ChooseList(props) {
    const {goDetails} = props;

    return (
        <Fragment>
            <ul className={styles.ulBox}>
                {echartsData.map((category, index) => {
                    return (
                        <li key={index} className={styles.liNav}>
                            <a href={`#${category.id}`}>{category.title}</a>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.canvasContainer}>
                <ul className={styles.canvasUl}>
                    {echartsData.map((category, index) => {
                        return (
                            <li key={index} className={styles.canvasLi}>
                                <h2 className={styles.canvasTitle}>{category.title}</h2>
                                <ul className={styles.echartsUl} id={category.id}>
                                    {category.echarts.map((item, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className={styles.echartsLi}
                                                onClick={() => {
                                                    goDetails(item, category);
                                                }}
                                            >
                                                <div className={styles.echartsTitle}>
                                                    {item.title}
                                                </div>
                                                <div className={styles.echartsImgDiv}>
                                                    <img
                                                        className={styles.echartsImg}
                                                        src={item.url}
                                                        alt="x"
                                                    />
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Fragment>
    );
}

export default ChooseList;
