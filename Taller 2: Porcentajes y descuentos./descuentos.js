//  (p*(100-D))/100 
// Estableciendo la fórmula para el descuento
// const precioOriginal = 100;
// const descuento = 15;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

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

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
};

// Usando cupones de descuento

// Array de objetos con info de los cupones.
const coupons = [
  { name: "BLACKFRIDAY", discount: 35 },
  { name: "CYBERMONDAY", discount: 20 },
  { name: "SUMMERVIBES", discount: 15 },
  { name: "CHRISTMAS", discount: 25 },
  { name: "BIRTHDAY", discount: 50 },
];

// Calcular el cupón de descuento
function calculateCouponDiscount() {
  const resultP = document.getElementById("resultP");

  const clientCoupon = document.getElementById("inputCoupon").value;
  // couponValidator retorna un booleano para saber
  // si el cupón existe en la base de datos.
  const couponValidator = coupons.some((element) => {
    return element.name == clientCoupon;
  });

  // Condicional para hacer el calculo o mandar mensaje de error
  if (couponValidator) {
    const priceValue = document.getElementById("inputPrice").value;
    const coupon = coupons.find((element) => {
      return element.name == clientCoupon;
    });
    const couponDiscount = coupon.discount;

    const finalPrice = calcularPrecioConDescuento(priceValue, couponDiscount);

    resultP.innerText = `El precio con cupón aplicado es de ${finalPrice} pesos`;
  } else {
    resultP.innerText = "El cupón no es válido";
  }
}

function cleanResultPriceDiscount () {
  document.getElementById("resultP").innerText = ' ';
}