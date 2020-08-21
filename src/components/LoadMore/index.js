import React, { Component } from 'react'

export default class LoadMore extends Component {
    constructor(){
        super()
        this.load=React.createRef()
    }
    componentDidMount(){
        // 获取页面高度
        const WH=document.documentElement.clientHeight;
        // 数据节流
        let time=null
        window.onscroll=(e)=>{
            let H=this.load.current.getBoundingClientRect().top
            if(time){
                clearTimeout(time)
                
            }
            time=setTimeout(()=>{
                if(H<WH){
                    console.log("上拉加载")
                }
            },100)
           
        }
    }
    componentWillUnmount(){
        window.onscroll=null
    }
    render() {
        return (
            <div ref={this.load}>
               上拉加载更多 
            </div>
        )
    }
}
