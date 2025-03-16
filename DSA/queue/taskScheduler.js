// Real-World Example - Task Scheduler
// Problem: Implement a task scheduler that processes tasks in the order they arrive.

class TaskScheduler {
    constructor(){
        this.task=[];
    }
    addTask(work){
        this.task.push(work);
        console.log("Task Added Successfully!");
    }
    processTask(){
        if(this.task.length ===0){
            console.log("No task to process!");
            return;
        }
        this.task.shift();
        console.log("Task sucessfully completed!");
    }
}

// Test
const scheduler = new TaskScheduler();

scheduler.addTask("Email Notification");
scheduler.addTask("Generate Report");
scheduler.addTask("Data Backup");

scheduler.processTask(); // Processing task: Email Notification
scheduler.processTask(); // Processing task: Generate Report
scheduler.processTask(); // Processing task: Data Backup
scheduler.processTask(); // No tasks to process.