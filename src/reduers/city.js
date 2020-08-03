import city from '../constants/city'
let init={name:'123'}
 const cityStore=(state=init,action)=>{
 switch (action.type) {
     case city.initCity:
        console.log(action,"----hhhh---")
         return state=action.data
         break;
         case city.newCity:
            return state=action.data;
            break;
     default:
         return state
         break;
 }
}
export default cityStore