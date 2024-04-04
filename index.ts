#! /usr/bin/env node
import inquirer from "inquirer"
let todos=[];
let condition=true;
while(condition){
 let addTask= await inquirer.prompt([
    {
        name:"todo",
        type:"input",
        message:"What do you want to add in your Todos?"
    },

    {
        name:"options",
        type:"list",
        message:"please select an option",
        default:"false",
        choices:["Add more Todos","Delete whole list","Confirm list"]
    },

])


if(addTask.options==="Add more Todos"){
    console.log("Now you can add more in the following list")
}

 if (addTask.options === "Confirm list"){
    console.log("Here is your final list:")
}
 todos.push(addTask.todo)
    condition=addTask.options==="Add more Todos";
console.log(todos)

if (addTask.options === "Delete whole list") {

    console.log("Todo list deleted");
    
 }
}


