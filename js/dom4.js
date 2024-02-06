const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
    const boxContainer = document.querySelector(".box-container");
    boxContainer[0].innerHTML += `<div class="box"></div>`;  

    const boxList = document.querySelectorAll(".box");

    for(let box of boxList) {
        box.onclick = () => {
            let isBlueBox = box.classList.contains("blue-box");
            let isRedBox = box.classList.contains("red-box");

            if(!isBlueBox && !isRedBox) {
                box.classList.add("blue-box");
            }else if(isBlueBox && !isRedBox) {
                box.classList.remove("blue-box");
                box.classList.add("red-box");
            }else {
                boxContainer[0].removeChild(box);
                boxContainer[1].appendChild(box);
            }
           
        }
    }
  
}

