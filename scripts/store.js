'use strict';

const store = (function() {
  const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id) {
    store.items.find( item => item.id === id)
  }

  function addItem(name) {
    try {
        Item.validateName(name);
        const newItem = Item.create(name);
        this.items.push(newItem);
    }
    catch(error) {
        console.log('Cannot add item: ' + error.message)
    }
  }

  function findAndToggleChecked(id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id, newName) {
    try {
        Item.validateName(newName);
        const item = findById(id);
        item.name = newName;
    }
    catch (error) {
        console.log(`Cannot update name: ${error.message}`);
    } 
  }

  function findAndDelete(id) {
    const index = store.items.findIndex(item => item.id === id);
    store.items.splice(index, 1);
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}());