
export function rendertasks(tasks, ultasklist){
    ultasklist.innerHTML = "";
        for(let i = 0; i < tasks.length; i++){
            const li = document.createElement("li");
            const pdate = document.createElement("p");
            const ptime = document.createElement("p");

            li.textContent = tasks[i].texto;
            pdate.textContent = tasks[i].data;
            ptime.textContent = tasks[i].hora;

            li.appendChild(pdate);
            li.appendChild(ptime);
            ultasklist.appendChild(li);
        }   
}

 export function savetasks(tasks){
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("savetasks recebeu:", tasks);
    console.trace();
}