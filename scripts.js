const listContainer = document.getElementById("list-container");
function addTask(){
    const node = document.createElement("li");
    const textNode = document.createTextNode(getValue())
    node.appendChild(textNode);
    document.getElementById("list-container").appendChild(node);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    node.appendChild(span)
}

function getValue(){
    const data = document.querySelector('input').value
    return data
}

