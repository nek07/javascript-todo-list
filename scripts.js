const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        markTask(e);
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        deleteTask(e);
        saveData();
    }
},false);

function addTask(){
    if(getValue()===""){
        alert("You must write your task!")
    }
    else{
        const node = document.createElement("li");
        const textNode = document.createTextNode(getValue())
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        node.appendChild(span);
        node.appendChild(textNode);
        listContainer.appendChild(node);
        
    }
    inputBox.value="";
    saveData()

}
function markTask(e){
    e.target.classList.toggle("checked");
}
function deleteTask(e){
    e.target.parentElement.remove();
}
function getValue(){
    const data = document.querySelector('input').value;
    return data;
}
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();