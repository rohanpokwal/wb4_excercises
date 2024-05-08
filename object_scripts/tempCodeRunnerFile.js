"use strict";

let productCode = "supplierCode:productNumber-size";

function parsePartCode(yourProductCode) {
  let colonIndexValue = yourProductCode.indexOf(":");
  let hypenIndexValue = yourProductCode.indexOf("-");

  let supplierCode = yourProductCode.substring(0, colonIndexValue);
  let productNumber = yourProductCode.substring(
    colonIndexValue + 1,
    hypenIndexValue
  );
  console.log(productNumber);
}

parsePartCode(productCode);
