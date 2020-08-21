import React, { Component } from 'react'

export default class TabSelect extends Component {
    render() {
        return (
            <div>
               {
                React.Children.map(this.props.children,(item,index)=>{
                  return (
                      <div>{item.props.tabname}</div>
                  )
                })
               }
               {
                React.Children.map(this.props.children,(item,index)=>{
                  return (
                      <div>{item.props.children}</div>
                  )
                })
               }
            </div>
        )
    }
}

