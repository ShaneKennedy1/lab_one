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

// D
// Create deleteTasks Function
let deleteTask = (task)=>{
    // i) receives string as parameter called task
    let index = myTasks.indexOf(task);
    // ii) removes string from array
    if(index > -1){
        myTasks.splice(index,1);
        // iii) Print message to console indicating deletion
        console.log(task + " has been deleted!");
    } else{
        console.log(task + " not found in my Tasks")
    }
    // iv)) Return number of elements in array after deletion
    return myTasks.length;
}

// add tasks
addTask("Work");
addTask("Eat");
addTask("Sleep");
// list every task
listAllTasks();
// Delete tasks
deleteTask("Eat");
deleteTask("Sleep");
//This should say it is not found
deleteTask("Run");

