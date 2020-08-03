import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import './style.less'
export default class Tab extends Component {
    render() {
        return (
            <div className="tabar">
                <NavLink exact activeClassName="tabar-on" className="tabar-item" to="/">
                   <span className="iconfont icondaohangshouye"></span>
                   <p>首页</p>
                   </NavLink>
                   <NavLink activeClassName="tabar-on" className="tabar-item" to="/shop">
                   <span className="iconfont iconshangcheng"></span>
                   <p>商城</p>
                   </NavLink>
                   <NavLink activeClassName="tabar-on" className="tabar-item" to="/life">
                   <span className="iconfont iconshenghuo"></span>
                   <p>生活</p>
                   </NavLink>
                   <NavLink activeClassName="tabar-on" className="tabar-item" to="/mine">
                   <span className="iconfont iconwode"></span>
                   <p>我的</p>
                   </NavLink>
            </div>
        )
    }
}
