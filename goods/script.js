document.addEventListener('DOMContentLoaded', () => {

    // product.forEach(element => {
    //     Object.entries(element).forEach(entry =>{
    //         let key = entry[0];
    //         let val = entry[1];
    //         const cont = `<div class="id">${key} ${val}</div>
    //                         <div class="name">${key} ${val}</div>
    //                         <div class="price">${key} ${val}</div>`
    //                         document.querySelector('.js-product-item').insertAdjacentHTML('afterbegin', cont);
    //         console.log(`${key}, ${val}`);
            
    //     })
    // });

    
    // const createProductItem = ( {id, name, price} ) => {
    //     return `<div class="id">${id}</div>
    //             <div class="name">${name}</div>
    //             <div class="price">${price}</div>`;
    // };
    
    // document.querySelectorAll('.product-item').insertAdjacentHTML('afterbegin', createProductItem());
    let result;
    for (i = 0; i < product.length; i++) {

        // do {
        //     (function createProductItem(){
        //        let wrap = document.createElement('div');
        //        wrap.classList.add('product-item');
        //     })();
            
        // } while (i < product.length);

       for (key in product[i]) {
        id = product[i].id;
        name = product[i].name;
        price = product[i].price;

        result = `${id}, ${name}, ${price}`;
       }
    }
    document.querySelector('.js-product-item').insertAdjacentHTML('afterbegin', result);
});