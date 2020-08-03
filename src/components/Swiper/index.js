import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';
import PageDots from '../PageDots/index'
import './style.less'
export default class Swiper extends Component {
    state={
        currentIndex:0
    }
    changeIndex=(e)=>{
      this.setState({
          currentIndex:e
      })
      console.log(this.state.currentIndex)
    }
    render() {
        let content=this.props.banner.map((item,index)=>{
            return (<div className="swipe-item" key={index} >
            <img src={item} alt="" />
        </div>)
        })
        return (
            <div className="swipe">
                <SwipeableViews onChangeIndex={this.changeIndex}>
                   {content}
                </SwipeableViews>
                <PageDots currentIndex={this.state.currentIndex} num={this.props.banner.length}></PageDots>
            </div>
        )
    }
}
