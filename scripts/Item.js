'use strict';

const Item = (function(){
  const foo = 'bar';
  function validateName(name) {
    if(!name) {
      throw new Error('Name does not exist.');
    }
  }
  function create(name) {
    return {
      id: cuid(), name, checked: false
    };
  }
  return {
    validateName,
    create
  };
}());

console.log(Item);
console.log(foo);