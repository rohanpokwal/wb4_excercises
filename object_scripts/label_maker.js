"use strict";

/* 
name
address
city
state
zip
 */

let person = {
  name: "Eric Schwartz",
  address: "1234 Rolling street",
  city: "Fort Myers Beach",
  state: "FL",
  zip: "33931",
};

//create a function that formats and prints an address for a contact to the console
function printContact(contact) {
  console.log(`
    ${contact.name}
    ${contact.address}
    ${contact.city}, ${contact.state} ${contact.zip}
    `);
}

printContact(person);
