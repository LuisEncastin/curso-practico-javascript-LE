//  (p*(100-D))/100 
// Estableciendo la fórmula para el descuento
const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

// Convirtiéndo la fórmula en función.
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
};

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento (priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
};

// Usando cupones de descuento

// Array de objetos con info de los cupones.
const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];
// validar si el cupón que escribió el usuario está guardado en la propiedad name de alguno de los objetos en la lista de cupones.
const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

// Arrojar el porcentaje de descuento
if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
}else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// Aportación de la comunidad

// Base de datos de cupones
const coupons = [
    { name: "black_friday", discount: 35 },
    { name: "cyber_monday", discount: 20 },
    { name: "summer_vibes", discount: 15 },
    { name: "quarantine", discount: 25 },
    { name: "half_price", discount: 50 },
  ];
  
  // Calcular el cupón de descuento
  function calculateCouponDiscount() {
    const resultP = document.getElementById("ResultP");
  
    const clientCoupon = document.getElementById("InputCoupon").value;
    // couponValidator retorna un booleano para saber
    // si el cupón existe en la base de datos.
    const couponValidator = coupons.some((element) => {
      return element.name == clientCoupon;
    });
  
    // Condicional para hacer el calculo o mandar mensaje de error
    if (couponValidator) {
      const priceValue = document.getElementById("InputPrice").value;
      const coupon = coupons.find((element) => {
        return element.name == clientCoupon;
      });
      const couponDiscount = coupon.discount;
  
      const finalPrice = calcularPrecioConDescuento(priceValue, couponDiscount);
  
      resultP.innerText = `El precio con cupón aplicado es de $${finalPrice}`;
    } else {
      resultP.innerText = "El cupón no es válido";
    }
}