import express from "express";
import connection from "./dbconnect";
import { Menu} from "./menu";
import bodyparser from 'body-parser'
import { Restu } from "./restu";
const port:number = 3000;

let app=express();


app.get('/',(req,res)=>{
    res.send("this is index page")
})



app.listen(port,()=>{
    console.log("server is  port : "+port)
}
)

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get('/menu',(req,res)=>{
    connection.query('SELECT * FROM menu',(err,reslut)=>{
        if(err){
            console.log("query error: "+err);
            res.json({"Error":err})
        }
       else{
           res.json(reslut);
       }

    })
})

app.get('/menu/:id',(req,res)=>{
    let id = req.params['id'];
    connection.query('SELECT * FROM menu WHERE id=?',id,(err,reslut)=>{
        if(err){
            console.log("query error: "+err);
            res.json({"Error":err})
        }
       else{
           res.json(reslut);
       }

    })
})


app.post('/menu',(req,res)=>{
    let menu:Menu = req.body.menu;
    
    connection.query(`
    INSERT INTO  menu (title,description,price) VALUES
    ('${menu.title}','${menu.description}','${menu.price}');
    `,(err,reslut)=>{
        if(err){
            console.log("query error: "+err);
            res.json({"Error":err})
        }
       else{
           res.json(reslut);
       }
    });

})


app.get('/restu',(req,res)=>{
    connection.query('SELECT * FROM restu',(err,reslut)=>{
        if(err){
            console.log("query error: "+err);
            res.json({"Error":err})
        }
       else{
           res.json(reslut);
       }

    })
})


app.get('/restu/:id',(req,res)=>{
    let id = req.params['id'];
    connection.query('SELECT * FROM restu WHERE id=?',id,(err,reslut)=>{
        if(err){
            console.log("query error: "+err);
            res.json({"Error":err})
        }
       else{
           res.json(reslut);
       }

    })
})


app.post('/restu',(req,res)=>{
    let restu:Restu = req.body.restu;
    
    connection.query(`
    INSERT INTO  restu (title,cuisines,lat,lng,rate,image) VALUES
    ('${restu.title}','${restu.cuisines}','${restu.lat}','${restu.lng}','${restu.rate}','${restu.image}');
    `,(err,reslut)=>{
        if(err){
            console.log("query error: "+err);
            res.json({"Error":err})
        }
       else{
           res.json(reslut);
       }
    });

})

