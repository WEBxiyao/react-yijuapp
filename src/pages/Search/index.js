import React, { Component } from 'react'
import Navigation from '../../components/Navigation/index'

export default class Search extends Component {
    render() {
        console.log(this.props.match.params.content,"搜索页面")
        return (
            <div>
               <Navigation inputType={true} />
              
            </div>
        )
        
    }
}
