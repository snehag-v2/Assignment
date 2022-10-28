const taskList = [];
const taskListElement = document.querySelector("#tasklist");

document.querySelector("#add_button").addEventListener("click", addtask);
document.querySelector("#input").addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    addtask()
  }
});

// add
function addtask() {
  
    const tasktxt = document.querySelector("#input").value;

    if (tasktxt == ""){
      alert("Enter the task name!!");
      } else {
      const taskobj = {
        id: taskList.length,
        tasktxt: tasktxt,
        done: false,
      };
      taskList.unshift(taskobj);
      display();
    }
}

// check
function complete(taskId) {
  const s_index = taskList.findIndex((item) => item.id == taskId);

  taskList[s_index].done
    ? (taskList[s_index].done = false)
    : (taskList[s_index].done = true);
  display();
}

//delete
function deletetask(del) {
  taskList.splice(
    taskList.findIndex((item) => item.id == del),1);
  display();
}

//display
function display() {
  taskListElement.innerHTML = "";
  document.querySelector("#input").value = "";

    taskList.forEach(function(item){
    const list_ele = document.createElement("li");
    const del_btn = document.createElement("i");

    list_ele.innerHTML = item.tasktxt;
    list_ele.setAttribute("info-id", item.id);
    
    del_btn.setAttribute("info-id", item.id);
    del_btn.classList.add("fa");
    del_btn.classList.add("fa-trash-o");
    del_btn.setAttribute("info-id", item.id);

    if (item.done) {
      list_ele.classList.add("checked");
    }

    list_ele.addEventListener("click", function (e) {
      const s_id = e.target.getAttribute("info-id");
      complete(s_id);
    });

    del_btn.addEventListener("click", function (e) {
      const del_id = e.target.getAttribute("info-id");
      deletetask(del_id);
    });

    taskListElement.appendChild(list_ele);
    list_ele.appendChild(del_btn);

  });
}

// drag 



