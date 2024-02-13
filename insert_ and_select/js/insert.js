function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };

    console.log(data);
    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    };

    fetch("http://localhost:8080/insert_and_select/data/addition", option)
    .then((response) => {
        response.json()
        .then((json) => {
            console.log(json)
        })
    });

}