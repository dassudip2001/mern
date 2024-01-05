import {boolean, string} from "zod";

const zod=require(zod)
const createTodo=zod.object({
    name: zod.string().min(3),
    describption: zod.string(),
    isCompleate:boolean().default(false)
})


const updateTodo=zod.object({
    name:string(),
    describption:zod.string(),
    isCompleate:boolean()
})



module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}