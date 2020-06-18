let fs = require('fs')
function myRead(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{flags:'r',encoding:'utf-8'},function (err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

function myWrite(path,content){
    return new Promise(function(resolve,reject){
        fs.appendFile(path,content,{flags:'a',encoding:'utf-8'},function (err){
            if(err){
                reject(err)
            }else{
                resolve('写入成功!!!')
            }
        })
    })
}

module.exports = {myRead,myWrite}
