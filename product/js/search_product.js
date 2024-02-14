async function handleSearchClick() {

    try {
        const response = await fetch("http://localhost:8080/product/products");

        if(!response.ok) {
            throw await response.json();
        }

        const responseData = await response.json();

        const productList = document.querySelector(".product-list");

        productList.innerHTML = ``;

        for(let product of responseData.data) {
            productList.innerHTML += `

            <li> <td>${product.product_id}</td>  <td>${product.product_name}</td>  <td> ${product.product_price}</td>  <td>${product.product_size}</td> </li>
            `;
        }
    }catch(error) {
        console.log(error);
    }


}
