/** 
 * servlet 프로젝트명: product
 * group_id : com.study
 * artifact_id : product
 * name: product
 * jdk: 11
 * dependencies
 *  1. lombok
 *  2. jsp
 *  3. Gson
 *  4. mysql
 * 
 * package
 *  com.study.product
 *      config - DBconfig
 *      dao     - ProductDao
 *      entity  - Product
 *      filter  - CommonFilter
 *      servlet - InsertProductServlet (/product, POST)
 *              - SearchProductServlet (/products, GET)
 * 
 * DB - db_study
 * table(product_tb)
 * product_id, product_name(유니크), product_price, product_size(SS, S, M L, XL, XXL)
 * 
*/


async function handleAddClick() {
    const datainput = document.querySelectorAll(".product-inputs");

    const data = {
        product_name: datainput[0].value,
        product_price: datainput[1].value,
        product_size: datainput[2].value
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

    try {
        const response = await fetch("http://localhost:8080/product/product1", option);

        if(!response.ok) {
            throw await response.json();
        }
        console.log(response);
        const json = await response.json();
        console.log(json);

    } catch(error) {
        alert(error.errorMessage);
    }





}