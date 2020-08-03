import React, { Component } from 'react'
import './style.less'

export default class PageDots extends Component {
    render() {
        let {currentIndex,num}=this.props
        let arr=new Array(num).fill(1)
        return (
            <div className="dot">
                <ul>
                    {arr.map((item,index)=>{
                      return (<li className={currentIndex===index?'dot-on':''} key={index}></li>)
                    })}
                </ul>
            </div>
        )
    }
}
