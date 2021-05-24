import React, { Component, createRef } from 'react';
import LayoutHeader from '@/components/LayoutHeader';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { setPerson } from './models';
import { bindActionCreators } from 'redux';
import Demo4 from './../HomePage/components/demo4';
import { myContext } from './otherFunctions';
import Chat from './chat';

class HomePage2 extends Component {

    constructor() {
        super()
        this.titleRef = createRef()
    }

    state = {
        name: 'zyy'
    }

    componentDidMount() {
        
    }

    render() {
        const {
            name
        } = this.state;
        return (
            <myContext.Provider value={name}>
                <LayoutHeader title="主页2" subTitle="这是主页2">
                    <Button>设置name</Button>

                    <Chat />
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
