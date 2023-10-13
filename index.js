var readlineSync = require('readline-sync');
var username = readlineSync.question("What is your name? \n");
console.log(`Hi ${username}! let's decide today's task`);

console.log(`Please enter the tasks. Type "done" when finished adding! \n`);

var tasks = [];
while(true){
  var subTasks = readlineSync.question();
  if(subTasks == "done") break;
  tasks.push(subTasks);
}
console.log(`here's the list of tasks: `, tasks);
console.log("Is there any update you want to make to the list?(yes/no)");

var delRequest = readlineSync.question();
if(delRequest == "yes"){
  console.log(`Ok, select the item number from list to delete. Type "done" when finished deleting!`)
  var delArray = [];
  var num = 1;
  while(true){
    var delNum = readlineSync.question();
    if(delNum == "done") break;
    delArray.push(delNum);
  }
  console.log(delArray);
  delArray.sort((a,b) => a-b);
  for(var i = 0; i < delArray.length; i++){
    tasks.splice(delArray[i]-num,1);
    num++;
  }
  console.log(`list of tasks: `, tasks);
} else {
  console.log("Ok, great!");
}

console.log("Any new task you want to add?(yes/no)");
var newRequest = readlineSync.question();
if(newRequest == "yes"){
  console.log(`Ok, add any new task. Type "done" when finished adding!`);
  while(true){
    var newTask = readlineSync.question();
    if(newTask == "done") break;
    tasks.push(newTask);
  }

  console.log(`updated list: `, tasks);
} else {
  console.log("Ok, all the best!")
}



console.log("Assume, you are done for the day. What tasks have you completed? \n");


var complete = [];
var incomplete = [];
var count = 0;
console.log(`Write the tasks completed(Type 'done' when finished typing!): `);
while(true){
  var compTask = readlineSync.question();
  if(compTask == "done") break;
  if(tasks.includes(compTask)){
    count++;
    complete.push(compTask);
  }
}
if(complete.length){
  console.log("Task Completed: ", complete);
} else {
  console.log("Task Completed: none");
}

for(var i = 0; i <  tasks.length; i++){
  if(!complete.includes(tasks[i])){
    incomplete.push(tasks[i]);
  }
}

if(incomplete.length){
  console.log("Task Incomplete: ", incomplete);
} else {
  console.log( "Task Incomplete: none");
}

console.log("You have completed", count, "tasks");