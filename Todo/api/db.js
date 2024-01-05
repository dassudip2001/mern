const  mongoose=require('mongoose')

mongoose.connect('')

const  todo =mongoose.Schema({
    name:String,
    description:String,
    isCompleate:Boolean
})


module.exports={
    todo
}