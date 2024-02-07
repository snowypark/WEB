
function inputlist() {            

    const inputtext = document.querySelector(".inputtext").value;
    const span = document.getElementById(".text1");

    let textList = new Array();

    let Object = {
        content : inputtext.value
    }

    textList.push(Object);
    span.innerHTML += textList;
    console.log(textList);    
   
}

function getTodoList() {
    const ContentList = document.querySelector(".arrayList");

    ContentList.innerHTML = "";

    for(let todo of todoList) {
        ContentList.innerHTML += `${todo.content}`
    }
}