let input = document.querySelector("#newtask");
let btnadd = document.querySelector("#addnewtask");
let btndll = document.querySelector("#deleteall");

let ultasklist = document.querySelector("#ultasklist");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

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

function managerbuttons(){
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
            tasks.splice(i, 1);
            saveandupdate();

          
        });
        btnedit.addEventListener("click", function(){
            tasks[i].texto = prompt();
            if(tasks[i].texto === null || tasks[i].texto === ""){
                return;
            }
            saveandupdate();
        });
        
        checkinput.addEventListener("change", function(){
            tasks[i].concluida = checkinput.checked;
            savetasks(tasks);
        });
        
        lis[i].appendChild(checkinput);
        lis[i].appendChild(actions);
       
        lis[i].appendChild(btnedit);
        lis[i].appendChild(btndell);

        if(tasks[i].concluida == true){
            checkinput.checked = tasks[i].concluida;
        }else{
            checkinput.checked = tasks[i].concluida;
        }
    }
}

function updatepagemanager(){
    rendertasks(tasks, ultasklist);
    managerbuttons();
}
function saveandupdate(){
    savetasks(tasks);
    updatepagemanager();   
}