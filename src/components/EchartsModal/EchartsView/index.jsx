import React, {Component} from 'react';
import styles from './index.less';

class EchartsView extends Component {
    state = {
        myChart: null,
    };

    componentDidUpdate(preProps) {
        const {json} = this.props;
        if (preProps.json !== json) {
            this.initEcharts();
        }
    }

    initEcharts = () => {
        const {json} = this.props;

        const myChart = window.echarts.init(document.getElementById('echarts'), null, {
            renderer: 'canvas',
        });
        myChart.clear();
        let options;
        if (json) {
            options = eval('(' + json + ')');
        }
        myChart.setOption(options);
        this.setState({
            myChart,
        });
    };

    render() {
        return (
            <div className={styles.viewBox}>
                <div id="echarts" className={styles.viewEcharts}></div>
            </div>
        );
    }
}

export default EchartsView;
