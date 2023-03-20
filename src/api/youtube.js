import axios, { Axios } from 'axios'
 const KEY = "AIzaSyDOtYDJqGIIKOhjBSNI11v8ijRInnhzbAA";


 export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY

    },
    headers:{}
 })