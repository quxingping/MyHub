let path = require('path')

// 1 获取扩展名 paht.extname
let str = 'aa.png'
let extName = path.extname(str)
console.log(extName)

// 2 路径拼接 path.resolve
let arr = ['a','b','c']
let uri = path.resolve(...arr)
console.log(uri)

// 3 获取当前的路径 __dirname 获取当前执行文件__filename
console.log(__dirname)
 
// 4 拼接join
let uri2 = path.join(__dirname,'a','b')
console.log(uri2)
