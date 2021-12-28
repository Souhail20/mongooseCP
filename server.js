const express = require('express');
const connectDB = require('./DB/connectdB')
const persons = require('./model/clientModel'); 
const app = express();
connectDB();
const port = process.env.PORT || 4000;
const findPerson = ()=>{
    const Person = new persons({name:'Marry',age:23,favouriteFood:["Pizza"]})
    Person.save(function(err){
        if(err) return console.log(err);
    }) 
}
//  findPerson();
const findNew = ()=>{
   persons.create({name:'Souhail',age:23,favouriteFood:["Pizza","Spaghetti"]},{name:'Koussay',age:26,favouriteFood:["Mlewi"]},{name:'Chaima',age:22,favouriteFood:["Ma9loub"]})
}
//  findNew();
const findPr = () => {
   persons.findOne({name:'Koussay'},(err,data)=>{err?console.log(err):console.log(data)})
}
//  findPr();
const findOne=()=>{
    persons.findOne({favoriteFood:['Mlewy']},(err,data)=>{err?console.log(err):console.log(data)})
}
// findOne()
const findId=()=>{
    persons.findById("61cb483c036223e01b1f38ed",(err,data)=>{err?console.log(err):console.log(data)})
}
// findId();
const findEditSave=async()=>{
    const pr=await persons.findById("61cb483c036223e01b1f38ed").exec()
   await  pr.favouriteFood.push('Tacos')
   await pr.save()
   }
// findEditSave();
const findOneAndUpdate = ()=>{
    persons.findOneAndUpdate({name:'Koussay'},{age:20},(err,data)=>{err?console.log(err):console.log(data)})
}
// findOneAndUpdate();
const findByIdAndRemove = ()=>{
    persons.findByIdAndRemove("61cb4563fc35b8955bdc340f",(err,data)=>{err?console.log(err):console.log(data)})
}
// findByIdAndRemove();
const removePerson = ()=>{
    persons.remove({name:"Marry"},(err,data)=>{err?console.log(err):console.log(data)})
}
// removePerson();
const ChainQuery=()=>{
    persons.find({favoriteFood:["Pizza"]})
    .sort({name:1 })
    .limit(2)
    .select("-age")
    .exec((err,data)=>{err?console.log(err):console.log(data)})
}
// ChainQuery()
app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server running on port ${port}`);
})