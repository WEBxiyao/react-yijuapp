import React, { Component } from 'react'
import Navigation from '../../components/Navigation/index'
import './styles.less'
import {connect } from 'react-redux'
import cityStore from '../../reduers/city'
import { bindActionCreators } from 'redux'
import * as cityActions from '../../actions/city'
 class City extends Component {
    state={
     active:0,
     cityList:[
         {
             name:'北京'
         },
         {
            name:'上海'
        },
        {
            name:'广州'
        },
        {
            name:'安徽'
        },
        {
            name:'广东'
        },
        {
            name:'天津'
        },
        {
            name:'重庆'
        },
        {
            name:'西安'
        },
        {
            name:'武汉'
        },
        {
            name:'厦门'
        },
     ]
    }
    componentWillMount(){
        let city=this.props.cityStore.name
        let index=this.state.cityList.findIndex((v,index)=>v.name===city)
        this.setState({
            active:index
        })
    }
    changeIndex=(index)=>{
        let name=this.state.cityList[index].name
        this.props.cityActions.setCity({name})
        this.setState({
            active:index
        })
    }
    render() {
        let listDate=this.state.cityList.map((item,index)=>{
            return (
                <div className={this.state.active===index?'allcity-item allcity-on':'allcity-item'} key={index} onClick={()=>{this.changeIndex(index)}}>
                   {item.name}   
                </div>
            )
        })
        return (
            <div>
                <Navigation title={"城市选择"} />
                <div className="topTitle">
                  <h3>当前城市{this.props.cityStore.name}</h3>
                </div>
                <div className="city">
                    <h5>热门城市</h5>
                    <div className="allcity">
                    {listDate}
                    </div>
                </div>
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
    return{
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(City)