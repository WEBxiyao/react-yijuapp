// import React,{useState} from 'react'
// const TodoList=(list)=>{
// const [value,setValue]=useState(list)
// return {
//     value,
//     onChange:e=>setValue(e.target.value)
// }
// }
//  const HooksTest=()=>{
//     const text=TodoList("")
//     return (
//         <div>
//             <input type="text" {...text}></input>
//         </div>
//     )
// }
// export default HooksTest
// 这个地方测试useReduer
// import React,{useReducer} from 'react'
// const demo={count:0}
// function reduer(state,action){
//     console.log(state,"--888--")
//   switch (action.type) {
//       case 'add':
//           return {count:state.count+1}
//           break;
//           case 'remove':
//             return {count:state.count-1}
//             break;
//       default:
//           throw new Error();
//           break;
//   }
// }
// export default function HooksTest() {
//     const [state,dispatch]=useReducer(reduer,demo)
//     console.log(state,"---pp---")
//     return (
//         <div>
//             <h1>数量:{state.count}</h1>
//             <button onClick={()=>{dispatch({type:'add'})}}>加一</button>
//             <button onClick={()=>{dispatch({type:'remove'})}}>减一</button>
//         </div>
//     )
// }
// 这个地方测试useContext
import React,{useContext,createContext} from 'react'
const testContent=createContext()
export default function HooksTest() {
    return (
        <div>
            <testContent.Provider value="父组件传值">
             <Childa />
             <Childb />
            </testContent.Provider>
        </div>
    )
}
function Childa(){
    const name=useContext(testContent)
    return (
        <div>
            <h1>这个是子组件a------{name}</h1>
        </div>
    )
}

function Childb(){
    return (
        <div>
            <h1>这个是子组件b</h1>
        </div>
    )
}