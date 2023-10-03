const discounts = [
    {
        name: 'Lunes locos',
        discount: 15
    },
    {
        name: 'Viernes carnes',
        discount: 30
    },
    {
        name: 'Jueves verduras',
        discount: 50
    }
];

const form = document.querySelector('#form');
const discount__select = document.querySelector('#discount__select');
const money__input = document.querySelector('#money__input');

form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const old_price = money__input.value;
    const discount_value = discount__select.value;

    // const discount = discounts.filter((coupon)=> {
    //     return coupon.name === discount_value;
    // });

    const discount = discounts.find((coupon)=> {
        return coupon.name === discount_value;
    });

    if(old_price > 0 && discount) {

        // new_price = old_price * (1 - (discount[0].discount/100));
        new_price = old_price * (1 - (discount.discount/100));

        const money__outcome = document.querySelector('#money__outcome');
        money__outcome.innerHTML = new_price;

    }else{

        money__outcome.innerHTML = "Uno o varios de los valores no son correctos";

    }
})