import React,{useState} from 'react'
import {withRouter } from 'react-router-dom'
import './styles.less'
 function SearchInput(props) {
    let [value,setValue]=useState('')
    const changeContent=(e)=>{
      console.log(e.target.value)
      setValue(e.target.value)
    }
    const changeKey=(e)=>{
      if(e.keyCode===13){
          console.log(props,"---ll--")
         props.history.push('/search/'+value)
      }
    }
    return (
        <div className="header-center">
        <span className="iconfont iconsousuo"></span>
        <input type="text" onKeyUp={changeKey} value={value} placeholder="请输入搜索内容" onChange={changeContent}></input>
    </div>
        
    )
}
export default withRouter(SearchInput)