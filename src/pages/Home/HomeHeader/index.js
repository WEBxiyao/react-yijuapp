import React, { Component } from 'react'
import './style.less'
import { Link } from 'react-router-dom'
import SearchInput from '../../../components/SearchInput'
export default class HomeHeader extends Component { 
    render() { 
        return (
            <div className="header">
                   <Link to="/city" className="header-left">
                   <p>{this.props.city.name}</p>
                    <span className="iconfont iconxiala"></span>
                   </Link>
               <SearchInput />
                <div className="header-right">
                    <span className="iconfont iconqiche"></span>
                </div>
            </div>
        )
    }
}

