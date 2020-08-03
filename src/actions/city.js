import city from '../constants/city'
export function setCity(data){
  return{
      type:city.initCity,
      data
  }
}
export function changeCity(data){
    return{
        type:city.newCity,
        data
    } 
}