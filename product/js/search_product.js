async function handleSearchClick() {

    try {
        const response = await fetch("http://localhost:8080/product/products");

        if(!response.ok) {
            throw await response.json();
        }

        const responseData = await response.json();

        const productList = document.querySelector(".product-list");

        productList.innerHTML += ``;

        for(let product of responseData.data) {
            productList.innerHTML += `

            <li>product_id: ${product.product_id} / product_name: ${product.product_name} / product_price: ${product.product_price} / product_size: ${product.product_size}</li>
            `;
        }
    }catch(error) {
        console.log(error);
    }


}
