import qs from 'querystring';
export function getHttp(url){
    return fetch(url)     
  }
 export function postHttp(url,type,data) {
    let result=fetch(url,{
        method: type,
        header:{
        'Content-Type':'application/json;charset=UTF-8',
       },
      body:qs.stringify(data)
    })
    return result
 }