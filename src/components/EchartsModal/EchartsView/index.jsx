import React, {useEffect} from 'react';
import styles from './index.less';

function EchartsView(props) {
    const {json} = props;

    useEffect(() => {
        if (json) {
            initEcharts();
        }
    }, [json]);
    let options = '';

    // init
    const initEcharts = () => {
        const myChart = window.echarts.init(document.getElementById('echarts'), null, {
            renderer: 'canvas',
        });
        myChart.clear();

        if (json) {
            options = eval('(' + json + ')');
        }
        myChart.setOption(options);
    };

    return (
        <div className={styles.viewBox}>
            <div id="echarts" className={styles.viewEcharts}></div>
        </div>
    );
}

export default EchartsView;
