
function takeOrder(order, orderType) {
  if (orderType.length < 3) {
    orderType.push(order)
  }
};


function refundOrder(orderNumber, orderType) {
  for (var i = 0; i < orderType.length; i++) {
    if (orderNumber ===  orderType[i].orderNumber) {
      orderType.splice(i, 1)
    }
  }
};

function listItems (orderType) {
  var differentOrders = []
    for (var i = 0; i < orderType.length; i++) {
      differentOrders.push(orderType[i].item);
  }
  return differentOrders.join(", ");

};


function searchOrder(orderType, item) {
  var orderList = [];
    for (i =0; i < orderType.length; i++) {
      orderList.push(orderType[i].item)
    } if (orderList.includes(item)) {
      return true;
    } else {
      return false;
    }
  }



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
