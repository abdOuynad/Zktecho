const express = require("express")
//
const controller = require('./controlllers/zktech_controller')
//
const app = express()
//
const session = require('express-session')
//
app.use(express.urlencoded({
    extended:false
}))
//
app.use(session({
    secret:'Ztecho_app'
}))
//
app.set('view engine','ejs');
//
app.use(express.json())
//
app.use(express.static(__dirname+'/views'))
//
// GET ROUTER
//
app.get('/',controller.GetLoginPage)
app.get('/dashboard',controller.DashboardPage)
app.get('/all_events',controller.GetEventsOfOne)
//
// POST ROUTER
//
app.post('/',controller.CreateConfig,controller.GetAllEmployee,controller.GetAllData,controller.GetAllEvent,controller.GetAllDepartments,controller.aff)
app.post('/calcul',controller.bingo,controller.CalculAllPresentPlus)
//
// PORT LISTEN ..
//
app.listen(3000,()=>{
    //
    console.log(" the application Ztech presence runing in 3000 ....")
    //
})