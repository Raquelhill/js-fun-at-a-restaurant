function nameMenuItem(name) {
  return `Delicious ${name}`
};

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
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
