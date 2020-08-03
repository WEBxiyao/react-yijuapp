import React, { Component } from 'react'
import HomeHotView from './HomeHotView/index'
import $H from '../../../api/index'

export default class HomeHot extends Component {
    state={
        list:[]
    }
    componentDidMount(){
        $H.getHot()
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                list:data.data
            })
        })
    }
    render() {
        return (
            <div>
                <h3>热门商品</h3>
                {this.state.list.length>0?<HomeHotView list={this.state.list} />:<div>正在加载数据...</div>}
            </div>
        )
    }
}
