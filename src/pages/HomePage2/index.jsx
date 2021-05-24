import React, { Component, createRef } from 'react';
import LayoutHeader from '@/components/LayoutHeader';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { setPerson } from './models';
import { bindActionCreators } from 'redux';
import Demo4 from './../HomePage/components/demo4';
import { myContext } from './otherFunctions';

class HomePage2 extends Component {

    constructor() {
        super()
        this.titleRef = createRef()
    }

    state = {
        name: 'zyy'
    }

    componentDidMount() {
        console.log(111111111)
    }

    clickBtn = () => {
        this.setState({
            name: 'yyy'
        })
        console.log(this.titleRef)
        // const {
        //     setPerson
        // } = this.props;
        // setPerson({ name: 'nihao1' })
    }

    render() {
        const {
            name
        } = this.state;
        return (
            <myContext.Provider value={name}>
                <LayoutHeader title="主页2" subTitle="这是主页2">
                    <Button onClick={this.clickBtn}>设置name</Button>
                    {this.props.state.homePageReducer2.name}
                    <Demo4 ref={this.titleRef} />
                </LayoutHeader>
            </myContext.Provider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    // return {
    //     setPerson: (params) => setPerson(params, dispatch)
    // }
    const a = bindActionCreators({ setPerson }, dispatch)
    console.log(a)
    return a
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage2);
