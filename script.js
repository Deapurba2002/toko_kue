// script.js
export function formatPrice(price) {
  return `Rp ${price.toLocaleString('id-ID')},-`;
}

export function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discount;
}

export function getCakes() {
  return [
    "Kue Cokelat",
    "Kue Keju",
    "Kue Red Velvet",
    "Kue Tart",
    "Kue Lapis",
    "Brownies",
    "Kue Lumpur",
    "Kue Sus",
    "Donat",
    "Kue Ulang Tahun",
    "Kue Nastar",
    "Kue Putri Salju",
    "Kue Kastengel",
    "Macaron",
    "Kue Brown Butter",
    "Kue Pandan",
    "Kue Kukus",
    "Kue Bolu",
    "Kue Cupcake",
    "Kue Cubit",
    "Kue Lumpur Kentang",
    "Kue Roti Maryam",
    "Kue Donat Kentang",
    "Kue Brownie Cookies",
    "Kue Opera",
    "Kue Zebra",
    "Kue Mille Crepes",
    "Kue Charlotte",
    "Kue Tiramisu",
  ];
}
