let input = document.querySelector("#newtask");
let btnadd = document.querySelector("#addnewtask");
let btndll = document.querySelector("#deleteall");

let ultasklist = document.querySelector("#ultasklist");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let BtnPendentes = document.querySelector("#pendentes");
let BtnConcluidas = document.querySelector("#concluidas");
let BtnAll = document.querySelector("#all");


import { rendertasks, savetasks } from "./tasks.js";

updatepagemanager();

btnadd.addEventListener("click", function(){
    btndll.classList.add("btn-delete-all");
    const taskforadd = input.value;
    if(taskforadd == ""){
        alert("Empty");
        return;
    }
    const tarefa ={
        texto: taskforadd,
        concluida: false
    }

    tasks.push(tarefa);
    saveandupdate();
    input.value = "";   
});

btndll.addEventListener("click", function(){
    tasks= [];
    saveandupdate();
});

function managerbuttons(taskList){
    let lis = ultasklist.querySelectorAll("li");
    console.log(lis);

    for(let i = 0; i < lis.length; i++){
        const actions = document.createElement("div");
        actions.classList.add("task-actions");

        const btndell = document.createElement("input");
        const btnedit = document.createElement("input");

        const checkinput = document.createElement("input");


        btndell.type = "button";
        btndell.value = "Excluir";
        btnedit.type = "button";
        btnedit.value = "Editar";

        checkinput.type = "checkbox";

        btndell.style.backgroundColor = "#c84949eb";

        btndell.addEventListener("click", function(){
            const index = tasks.indexOf(taskList[i]);
            tasks.splice(index, 1);
            
            saveandupdate();
        });
        btnedit.addEventListener("click", function(){
            taskList[i].texto = prompt();
            if(taskList[i].texto === null || taskList[i].texto === ""){
                return;
            }
            saveandupdate();
        });
        
        checkinput.addEventListener("change", function(){
            taskList[i].concluida = checkinput.checked;
            savetasks(tasks);
        });
        
        lis[i].appendChild(checkinput);
        lis[i].appendChild(actions);
       
        lis[i].appendChild(btnedit);
        lis[i].appendChild(btndell);

        if(taskList[i].concluida == true){
            checkinput.checked = taskList[i].concluida;
        }else{
            checkinput.checked = taskList[i].concluida;
        }
    }
}
BtnAll.addEventListener("click", function(){
    updatepagemanager();
});
BtnPendentes.addEventListener("click", function(){
  let filteredtask = tasks.filter(function(tarefa){
        return tarefa.concluida === false;    
    });
    rendertasks(filteredtask, ultasklist);
    managerbuttons(filteredtask);

});
BtnConcluidas.addEventListener("click", function(){
  let filteredtask = tasks.filter(function(tarefa){
        return tarefa.concluida === true;    
    });
    rendertasks(filteredtask, ultasklist);
    managerbuttons(filteredtask);

});

function updatepagemanager(){
    rendertasks(tasks, ultasklist);
    managerbuttons(tasks);
}
function saveandupdate(){
    savetasks(tasks);
    updatepagemanager();   
}