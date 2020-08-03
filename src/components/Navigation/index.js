import React from 'react'
import { withRouter} from 'react-router-dom'
import SearchInput from '../SearchInput/index'
import './styles.less'
 function Navigation(props) {
    let { title,inputType}=props
    const back=()=>{
        // props.history.goBack(1)
        window.history.back(-1)
    }
    return (
       <div>
            <div className="nav">
            <div className="nav-icon iconfont iconfanhui" onClick={back}></div>
            {title?<div className="nav-title">{title}</div>:''}  
            {inputType?<div className="nav-input"><SearchInput /></div>:''}
             </div>
            <div className="zhanwei"></div>
       </div>
    )
}
export default withRouter(Navigation)
