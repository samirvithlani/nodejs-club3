//http module
var http = require('http')
//var user = require('./calc')
var userdata = require('./filehandling/user')
var  data = require('./calc')
console.log(data.user)
console.log(data.sum(100,2))

//userdata.readDataFromFille()
userdata.writeDataToFile()
//userdata.appendDataToFile()
//userdata.removeFile()
//userdata.createFolder()
//userdata.copyfile()
//userdata.removeFolder()

//create server
var PORT = 3000




const server  =http.createServer()
server.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})
//listen to port 3000

