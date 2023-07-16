
var CartItemsCount = 0;  // 購物車內商品數量
var CartItemsList = [];  // 購物車內商品資訊

$(function(){
    $('#pc-cart').text(CartItemsCount);
    $('#mobile-cart').text(CartItemsCount);
})

// 開啟手機版選單
function ShowBurgerMenu() {
    $('#menu').show();
}

// 關閉手機版選單
function HideBurgerMenu() {
    $('#menu').hide();
}

// 開啟購物車
function ShowCartDetail() {
    $('#cart-panel').show();
}

// 關閉購物車
function HideCartDetail() {
    $('#cart-panel').hide();
}