import React, { Component } from 'react'
import './styles.less'

export default class HomeHotView extends Component {
    render() {
        let {list}=this.props
        console.log(list)
        let content=list.map((item,index)=>{
           return (
                <div key={item.id} className="hotList-item">
                   <img src={item.cover} alt="" />
                   <p>{item.title}</p>
               </div>
           )
        })
        return (
            <div className="hotList">
               {content}
            </div>
        )
    }
}
