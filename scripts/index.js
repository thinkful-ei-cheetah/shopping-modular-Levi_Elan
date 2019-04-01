'use strict';
/* global shoppingList, cuid */
/* global $ */

// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  shoppingList.render();
  shoppingList.bindEventListeners();
  shoppingList.render();
});
