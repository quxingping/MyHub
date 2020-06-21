var fs = require('fs');
var {myRead,myWrite} = require('../文件操作/readwrite')
console.log(myRead)
fs.readdir('../文件操作',function(err,files){
    if(err){

    }else{
        files.forEach(async function(file,index){
            let content = await myRead(file)
            console.log(file)
            await myWrite('file.txt',content)
        })
    }
})