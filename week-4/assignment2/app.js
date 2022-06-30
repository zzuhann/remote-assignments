function ajax(src, callback) {
    // your code here
    fetch(src)
        .then(res => res.json())
        .then(data => callback(data))
        .catch(err => console.log(err));
}
function render(data) {
    // your code here
    const body = document.body;
    let cardHTML = '';
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        cardHTML += `<div class="card">
        <h1 class="title">${data[i].name}</h1>
        <p class="description">${data[i].description}</p>
        <p class="price">價格：<span>${data[i].price}</span></p>
        </div>`
    }
    body.innerHTML = cardHTML;
}
ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
    function (response) {
        render(response);
    }
); // you should get product information in JSON format and render data in the pag