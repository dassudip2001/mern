const  express=require('express')
const cors=require('cors')

const  app=express()

const port=3001

app.use(express.json())
app.use(cors)


// create todo

app.post("/todo",(req,res)=>{
// implement
})

// get all todo
app.get("/todo",(req,res)=>{
// implement
})

// complete todo
app.put("/todo",(req,res)=>{
//implement
})
app.listen(()=>{
    console.log("application is running on `localhost:3001`")
})