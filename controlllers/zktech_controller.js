//
const sql = require('mssql')
//
module.exports = {
    //
    GetLoginPage:(req,res)=>{
        //
        res.render('login')
        //
    },
    //
    CreateConfig:(req,res,next)=>{
        //
        const config ={
            server:req.body.server,
            user:req.body.username,
            password:req.body.password,
            database:req.body.database,
            options: {
                trustedConnection: true, 
                enableArithAort: true,
                encrypt: false
            }
        }
        //
        req.dbConfig = config
        req.session.config = config
        //
        next()
        //
    },
    //
    GetAllData:(req,res,next)=>{
        //
        sql.connect(req.dbConfig,(err)=>{
            //
            if(err){
                //
                res.send('Err Connection',err)
                //
            }else{
                //
                new sql.Request().query('select * from CHECKINOUT as a join USERINFO as b on a.USERID = b.USERID join DEPARTMENTS as d on b.DEFAULTDEPTID = d.DEPTID join Machines as m on a.sn = m.sn',(err,rows)=>{
                    //
                    if(rows){
                        //
                        req.session.data = rows.recordset
                        //
                        next()
                        //
                    }else{
                        //
                        next()
                        //
                    }
                    //
                })
                //
            }
            //
        })
        //
    },
    //
    GetAllDepartments:(req,res,next)=>{
        //
        sql.connect(req.dbConfig,(err)=>{
            //
            if(err){
                //
                res.send('Err Connection',err)
                //
            }else{
                //
                new sql.Request().query('SELECT * FROM DEPARTMENTS',(err,rows)=>{
                    //
                    if(rows){
                        //
                        req.session.department = rows.recordset
                        //console.log(rows.recordset)
                        //
                        next()
                        //
                    }else{
                        //
                        next()
                        //
                    }
                    //
                })
                //
            }
            //
        })
        //
    },
    //
    GetAllEmployee:(req,res,next)=>{
        //
        sql.connect(req.dbConfig,(err)=>{
            //
            if(err){
                //
                res.send('Err Connection',err)
                //
            }else{
                //
                new sql.Request().query('select * from USERINFO as a join DEPARTMENTS as b on a.DEFAULTDEPTID = b.DEPTID',(err,rows)=>{
                    //
                    if(rows){
                        //
                        req.session.employee = rows.recordset
                        //console.log(rows.recordset[0])
                        //
                        next()
                        //
                    }else{
                        //
                        next()
                        //
                    }
                    //
                })
                //
            }
            //
        })
        //
    },
    //
    GetAllEvent:(req,res,next)=>{
        //
        sql.connect(req.dbConfig,(err)=>{
            //
            if(err){
                //
                res.send('Err Connection',err)
                //
            }else{
                //
                new sql.Request().query('SELECT * FROM CHECKINOUT',(err,rows)=>{
                    //
                    if(rows){
                        //
                        req.session.event = rows.recordset
                        //
                        next()
                        //
                    }else{
                        //
                        next()
                        //
                    }
                    //
                })
                //
            }
            //
        })
        //
    },
    //
    GetEventsOfOne:(req,res,next)=>{
        //
        const pin = Number(req.query.pin)
        console.log(pin)
        //
        sql.connect(req.session.config,(err)=>{
            //
            if(err){
                //
                res.json({data:err,text:'connection Error'})
                //
            }else{
                //
                new sql.Request().query(`select * from CHECKINOUT as a join USERINFO as b on a.USERID = b.USERID join Machines as m on a.sn = m.sn where a.USERID = ${pin}`,(err,rows)=>{
                    //
                    if(rows){
                        //
                        res.json({data:rows.recordset,text:'Success'})
                        //
                    }else{
                        //
                        res.json({data:'err',text:'query error'})
                        //
                    }
                    //
                })
                //
            }
            //
        })
        //
    },
    //
    TestConnection:(req,res,next)=>{
        //
        const config ={
            server:req.body.server,
            user:req.body.username,
            password:req.body.password,
            database:req.body.database,
            options: {
                trustedConnection: true, 
                enableArithAort: true,
                encrypt: false
            }
        }
        //
        console.log(config)
        //
        sql.connect(config,(err)=>{
            //
            if(err){
                //
                res.json({'Error the Connection ':err})
                //
            }else{
                //
                res.send('connection success')
                //
            }
            //
        })
        //
    },
    //
    GetEvent:(req,res,next)=>{
        //
        const config ={
            server:req.body.server,
            user:req.body.username,
            password:req.body.password,
            database:req.body.database,
            options: {
                trustedConnection: true, 
                enableArithAort: true,
                encrypt: false
            }
        }
        //
        console.log(config)
        //
        sql.connect(config,(err)=>{
            //
            if(err){
                //
                res.json({'Error the Connection ':err})
                //
            }else{
                //
                new sql.Request().query('SELECT * FROM CHECKINOUT',(err,rows)=>{
                    //
                    if(rows){
                        //
                        req.event = rows.recordset
                        next()
                        //
                    }else{
                        //
                        next()
                        //
                    }
                    //
                })
                //
            }
            //
        })
        //
    },
    //
    aff:(req,res)=>{
        //
        res.redirect('/dashboard')
        //
    },
    //
    DashboardPage:(req,res)=>{
        //
        //console.log(req.session.data[0])
        //console.log(req.session.employee[0])
        //console.log(req.session.department[0])
        res.render('index',(events=req.session.data,employees=req.session.employee,departments=req.session.department,database=req.session.config))
        //
    },
    //
    bingo:(req,res,next)=>{
        console.log('bingo')
        next()
    },
    //
    CalculAllPresent : (req,res)=>{
        //
        console.log(req.body)
        const start = new Date(req.body.start).getTime()
        const end = new Date(req.body.end).getTime()
        //
        console.log('start',start)
        console.log('end',end)
        //
        sql.connect(req.session.config,(err)=>{
            //
            if(err){
                //
                res.json({err:err})
                //
            }else{
                //
                new sql.Request().query(`select * from CHECKINOUT as a join USERINFO as b on a.USERID = b.USERID join DEPARTMENTS as d on b.DEFAULTDEPTID = d.DEPTID join Machines as m on a.sn = m.sn`,(err,rows)=>{
                    //
                    if(rows){
                        //
                        var resultat = []
                        var task = []
                        let department = {}
                        //
                        const rows_date = rows.recordset.filter((elm)=>{
                            //
                            return (new Date(elm.CHECKTIME).getTime() >= start && new Date(elm.CHECKTIME).getTime() <= end)
                            //
                        })
                        //
                        console.log('length befor the filter ===>',rows.recordset.length)
                        console.log('the legth after the filter ===>',rows_date.length)
                        //
                        rows_date.forEach((row)=>{
                            //
                            let user = []
                            let sum = 0
                            let data = null
                            //
                            if(!task.includes(row.USERID)){
                                //insert user info
                                //user
                                //
                                rows_date.forEach((col)=>{
                                    //
                                    if(row.USERID == col.USERID){
                                        //
                                        let point = 0
                                        let ev = col.MachineAlias.split("-").pop()
                                        //
                                        if(ev =='IN'){
                                            //
                                            point = 1
                                            //
                                        }else{
                                            //
                                            point = -1
                                            //
                                        }
                                        //
                                        col.TIME = new Date(col.CHECKTIME).getTime()
                                        //
                                        user.push({date:col.CHECKTIME,departement:col.DEPTNAME,TIME:col.TIME,event:col.MachineAlias,point:point})
                                        //
                                    }
                                    //
                                })
                                user = user.sort((a,b)=>{b.TIME -a.TIME})
                                user.forEach((elm)=>{
                                    //
                                    sum+=elm.point
                                    //
                                })
                                //DEPARTMENT CALCUL PERSONE
                                let DEPName = row.DEPTNAME
                                console.log('departement ==>',DEPName)
                                console.log('sum ===>',sum)
                                //
                                if(!department[DEPName]){
                                    //
                                    department[DEPName] = 0
                                    //
                                }
                                if(sum>0){
                                    //
                                    department[DEPName] += 1
                                    //
                                }
                                //
                                data = 
                                {
                                    pin:row.USERID,
                                    name:row.NAME,
                                    sum:sum,
                                    event_number:user.length,
                                    data:user
                                }
                                //
                                resultat.push(data)
                                task.push(row.USERID)
                                //
                            }
                            //
                        })
                        //
                        console.log(task)
                        console.log(resultat)
                        console.log(department)
                        res.json({status:'success',client_number:resultat.length,department:department,resultat:resultat})
                        //
                    }else{
                        //
                        res.json({status:'err',err:err})
                        //
                    }
                    //
                })
                //
            }
            //
        })
        //
    },
    //
    CalculAllPresentPlus : (req,res)=>{
        //
        console.log(req.body)
        const start = new Date(req.body.start).getTime()
        const end = new Date(req.body.end).getTime()
        //
        console.log('start',start)
        console.log('end',end)
        //
        sql.connect(req.session.config,(err)=>{
            //
            if(err){
                //
                res.json({err:err})
                //
            }else{
                //
                new sql.Request().query(`select * from CHECKINOUT as a join USERINFO as b on a.USERID = b.USERID join DEPARTMENTS as d on b.DEFAULTDEPTID = d.DEPTID join Machines as m on a.sn = m.sn`,(err,rows)=>{
                    //
                    if(rows){
                        //
                        var resultat = []
                        var task = []
                        let department = {}
                        let resultat_department = {}
                        //
                        const rows_date = rows.recordset.filter((elm)=>{
                            //
                            return (new Date(elm.CHECKTIME).getTime() >= start && new Date(elm.CHECKTIME).getTime() <= end)
                            //
                        })
                        //
                        console.log('length befor the filter ===>',rows.recordset.length)
                        console.log('the legth after the filter ===>',rows_date.length)
                        //
                        rows_date.forEach((row)=>{
                            //
                            let user = []
                            let sum = 0
                            let data = null
                            //
                            if(!task.includes(row.NAME)){
                                //insert user info
                                //user
                                //
                                task.push(row.NAME)
                                //
                                rows_date.forEach((col)=>{
                                    //
                                    if(row.NAME == col.NAME){
                                        //
                                        let point = 0
                                        let ev = col.MachineAlias.split("-").pop()
                                        //
                                        if(ev =='IN'){
                                            //
                                            point = 1
                                            //
                                        }else{
                                            //
                                            point = -1
                                            //
                                        }
                                        //
                                        col.TIME = new Date(col.CHECKTIME).getTime()
                                        //
                                        user.push({name:col.NAME,date:col.CHECKTIME,departement:col.DEPTNAME,TIME:col.TIME,event:col.MachineAlias,point:point})
                                        //
                                    }
                                    //
                                })
                                user = user.sort((a,b)=>{b.TIME -a.TIME})
                                console.log("user length ===>",user.length)
                                console.log("user ===>",user)
                                user.forEach((elm)=>{
                                    //
                                    sum+=elm.point
                                    //
                                })
                                //DEPARTMENT CALCUL PERSONE
                                let DEPName = row.DEPTNAME
                                console.log('departement ==>',DEPName)
                                console.log('sum ===>',sum)
                                //
                                if(!department[DEPName]){
                                    //
                                    department[DEPName] = 0
                                    //
                                }
                                if(sum>0){
                                    //
                                    department[DEPName] += 1
                                    //
                                }
                                //
                                data = 
                                {
                                    pin:row.USERID,
                                    name:row.NAME,
                                    sum:sum,
                                    department:row.DEPTNAME,
                                    event_number:user.length,
                                    data:user
                                }
                                //
                                resultat.push(data)
                                //task.push(row.USERID)
                                //
                            }
                            //
                            Object.keys(department).forEach((dep)=>{
                                //
                                let d = []
                                //
                                resultat.forEach((res)=>{
                                    //
                                    if(dep == res.department){
                                        //
                                        d.push(res)
                                        //
                                    }
                                    //
                                })
                                //
                                resultat_department[dep] = d
                                //
                            })
                            //
                        })
                        //
                        console.log(resultat_department)
                        //console.log('task ==>',task)
                        //console.log(resultat)
                        //console.log(department)
                        res.json({status:'success',client_number:resultat.length,department:department,resultat:resultat_department})
                        //
                    }else{
                        //
                        res.json({status:'err',err:err})
                        //
                    }
                    //
                })
                //
            }
            //
        })
        //
    }
    //

}