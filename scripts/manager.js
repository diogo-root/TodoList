let input = document.querySelector("#newtask");
let btnadd = document.querySelector("#addnewtask");
let btndll = document.querySelector("#deleteall")
let ultasklist = document.querySelector("#ultasklist");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

import { rendertasks } from "./tasks.js";
import { savetasks } from "./tasks.js";



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
        const btndell = document.createElement("input");
        const btnedit = document.createElement("input");

        btndell.type = "button";
        btndell.value = "Excluir";
        btnedit.type = "button";
        btnedit.value = "Editar";

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

        lis[i].appendChild(btndell);
        lis[i].appendChild(btnedit);
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

