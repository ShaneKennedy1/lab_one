// A
// Create an empty array of Strings
let myTasks = [];

// B
// Create addTask function
// i) Receives string "task" as a parameter
let addTask = (task) =>{
    // ii) Adds new task to the array
    myTasks.push(task);
    // iii) Output to console that the newly entered task has been added
    console.log(task+ " has been added to my Tasks!");
    // iv) Return the new length of the array
    return myTasks.length;
}
// C
// Create listAllTasks function
let listAllTasks = ()=>{
    // i) Iterate over each task in the array
    myTasks.forEach((item)=>{
        // ii) Prints each array item to the console
        console.log(item);
    })
}

let deleteTask = (task)=>{

    let index = myTasks.indexOf(task);
    if(index > -1){
        myTasks.splice(index,1);
        console.log(task + " has been deleted!");
    } else{
        console.log(task + " not found in my Tasks")
    }
}

// D
//  let index = myTasks.indexOf("Work")
//  myTasks.splice(index,1);
 
// Test if the all of the above functions work
addTask("Work");
addTask("Eat");
addTask("Sleep");
listAllTasks();
deleteTask("Work");
deleteTask("Sleep");
deleteTask("Run");

