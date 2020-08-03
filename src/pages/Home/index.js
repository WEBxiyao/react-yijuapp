import React, { Component } from 'react'
import Tab  from '../../components/TabarNav/index'
import HomeHeader from './HomeHeader/index'
import Swiper from '../../components/Swiper/index'
import banner1 from '../../static/images/banner/1.jpg'
import banner2 from '../../static/images/banner/2.jpg'
import banner3 from '../../static/images/banner/3.jpg'
import HomeHot from './HomeHot/index'
import {connect } from 'react-redux'
 class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader city={this.props.cityStore} />
                <Swiper banner={[banner1,banner2,banner3]} />
                <HomeHot />
                <Tab />
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        cityStore:state.cityStore
    }
}
export default connect(mapStateToProps)(Home)