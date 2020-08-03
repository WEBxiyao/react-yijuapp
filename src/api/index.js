import {getHttp } from '../utils/http'
import httpSrc from './base'
export default{
    getHot(){
        return getHttp(httpSrc.hot)
    }
}