function createRestaurant(name, menus) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
};

function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === "breakfast" && !restaurant.menus.breakfast.includes(menuItem)) {
    restaurant.menus.breakfast.push(menuItem)
} else if (menuItem.type === "lunch" && !restaurant.menus.lunch.includes(menuItem)) {
    restaurant.menus.lunch.push(menuItem)
} else if (menuItem.type === "dinner" && !restaurant.menus.dinner.includes(menuItem)) {
    restaurant.menus.dinner.push(menuItem)
  }
};

function removeMenuItem(restaurant, name, type) {
  if (restaurant.menus[type].length === 0) {
    return `Sorry, we don't sell ${name}, try adding a new recipe!`;
  } else {
      for (var i = 0; i < restaurant.menus[type].length; i++) {
      restaurant.menus[type].splice(i, 1);
      return  `No one is eating our ${name} - it has been removed from the ${type} menu!`;
    }
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
