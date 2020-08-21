import React, { Component } from 'react'
import Navigation from '../../components/Navigation/index'
import LoadMore from '../../components/LoadMore'


export default class Search extends Component {
    state={
        list:[]
    }
    getList(){
     let list=[]
     for(let i=0;i<10;i++){
         list.push({
             cover:'https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/765a18a017acf0b5c012ce765696be6f.png',
             name:`这个地方是名称--${i}`
         })
     }
     return list
    }
    componentDidMount(){
      let timer=null
      timer=setTimeout(()=>{
        this.setState({
            list:this.getList()
        })
      },1000)
    }
    componentWillUnmount(){
        // 这个地方页面跳转相当于卸载请求，不然一步请求跳转到下个页面会报错
        this.setState=(state,callback)=>{
            return
        }
    }
    goDetail(){
        console.log(this.props)
    }
    render() {
        let listDate=this.state.list.map((item,index)=>{
         return (
            <div key={index} onClick={this.goDetail}>
            <img src={item.cover} alt="" />
            <p>{item.name}</p>
        </div>
         )
        })
        return (
            <div>
               <Navigation inputType={true} />
                {listDate}
                <LoadMore />
            </div>
        )
        
    }
}
