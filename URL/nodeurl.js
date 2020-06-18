let url = require('url')
let axios = require('axios')
let request = require('request')

let URL = 'https://www.autohome.com.cn/beijing/'

request.get(URL,{
    header:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.3'}
},function(err,res,body){
    console.log(res)
    console.log(body)
})