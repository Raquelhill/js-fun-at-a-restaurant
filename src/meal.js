function nameMenuItem(menuItemName) {
  var nameMenuItem = menuItemName
  return `Delicious ${nameMenuItem}`
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
  return menuItem;
};

function addIngredients(extraIngredient, ingredients) {
  if (ingredients.includes(extraIngredient)) {
    return
  } else {
    return ingredients.push(extraIngredient)
  }
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`
};

function decreasePrice(price) {
  var discount = (price * .10)
  var decreasePrice = (price - discount)
  return decreasePrice
};

function createRecipe(title, ingredients, menuItemType) {
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
};

module.exports = {

  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
