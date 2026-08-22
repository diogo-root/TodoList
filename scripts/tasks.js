
export function rendertasks(tasks, ultasklist){
    ultasklist.innerHTML = "";
        for(let i = 0; i < tasks.length; i++){
            const li = document.createElement("li");
            li.textContent = tasks[i].texto;
            ultasklist.appendChild(li);
        }   
}

 export function savetasks(tasks){
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("savetasks recebeu:", tasks);
    console.trace();
}