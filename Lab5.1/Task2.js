const products = [
  { id: 1, name: "Tomato", price: 51 },
  { id: 2, name: "Cucumber", price: 44 },
  { id: 3, name: "Garbage", price: 77 },
  { id: 4, name: "Carrot", price: 33 },
];

function getProductDetails(productId, successCallback, errorCallback) {
  const product = products.find((p) => p.id === productId);

  if (product) {
    successCallback(product);
  } else {
    errorCallback(`Product with ID ${productId} not found.`);
  }
}

function onSuccess(product) {
  console.log("Product details:", product);
}

function onError(errorMessage) {
  console.error("Error:", errorMessage);
}

getProductDetails(2, onSuccess, onError);
getProductDetails(5, onSuccess, onError);
