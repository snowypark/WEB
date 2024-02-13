function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };

    console.log(data);
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    const dataObj = JSON.parse(jsonData);
    console.log(dataObj);
}