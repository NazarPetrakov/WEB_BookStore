function applyDiscount(medicines) {
  var id = 1;
  return medicines.map((medicine) => {
    var discountPrice =
      medicine.price > 300 ? medicine.price * 0.7 : medicine.price;
    return {
      id: id++,
      name: medicine.name,
      price: discountPrice.toFixed(2),
    };
  });
}

const medicines = [
  { name: "Noshpa", price: 170 },
  { name: "Analgin", price: 55 },
  { name: "Quanil", price: 310 },
  { name: "Alphacholine", price: 390 },
];

const discountedMedicines = applyDiscount(medicines);

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("medicine-list");
  discountedMedicines.forEach((medicine) => {
    const listItem = document.createElement("li");
    listItem.textContent = `ID: ${medicine.id}, Name: ${medicine.name}, Price: ${medicine.price} грн`;
    list.appendChild(listItem);
  });
});
