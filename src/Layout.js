import React, { Component } from 'react'
import { connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import * as cityActions from '../src/actions/city'

 class Layout extends Component {
    // 这个地方是相当于初始化redux的值在路由外面多加了一成嵌套
    componentWillMount(){
        this.props.cityActions.setCity({name:'北京'})
    }
    render() {
        return (
            <div>
               {this.props.children}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        cityStore:state.cityStore
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Layout)