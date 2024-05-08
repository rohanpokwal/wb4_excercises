"use strict";

function parsePartCode(yourProductCode) {
  let colonIndexValue = yourProductCode.indexOf(":");
  let hypenIndexValue = yourProductCode.indexOf("-");

  let supplierCode = yourProductCode.substring(0, colonIndexValue);
  let productNumber = yourProductCode.substring(
    colonIndexValue + 1,
    hypenIndexValue
  );

  let size = yourProductCode.substring(hypenIndexValue + 1);

  let productInfo = {
    supplierCode: supplierCode,
    productNumber: productNumber,
    productSize: size,
  };

  return productInfo;
}

//pretend that this is your product description
let productCode = "XYZ:1234-L";

//calling this function gives us the object with different property of that specific part
let productInfo = parsePartCode(productCode);

//call the object and print the value
console.log(`
Supplier Code: ${productInfo.supplierCode}
Product Number: ${productInfo.productNumber}
Product Size: ${productInfo.productSize}
`);
