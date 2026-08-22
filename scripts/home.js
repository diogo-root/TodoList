import { rendertasks, savetasks } from "./tasks.js";
// import { savetasks } from "./tasks.js";

let ultasklist = document.querySelector("#ultasklist");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(tasks);

rendertasks(tasks, ultasklist);

function check(){
   let lis = ultasklist.querySelectorAll("li");

    for(let i = 0; i < lis.length; i++){
        const checkinput = document.createElement("input");
        checkinput.type = "checkbox";

        checkinput.addEventListener("change", function(){
            tasks[i].concluida = checkinput.checked;
            savetasks(tasks);
        });

        lis[i].appendChild(checkinput);

        if(tasks[i].concluida == true){
            checkinput.checked = tasks[i].concluida;
        }else{
            checkinput.checked = tasks[i].concluida;
        }
    }    
}

check();