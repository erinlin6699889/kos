
var CartItemsCount = 0;  // 購物車內全部商品數量
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
    $('#hint-panel').hide();
    $('#cart-panel').show();
}

// 關閉購物車
function HideCartDetail() {
    $('#cart-panel').hide();
}

// 增加購物車商品數量
function IncreaseCartNumber(id) {
    let Num = parseInt($(`#number-${id}`).text());  // 數量
    let ItemPrice = parseInt($(`#cart-price-${id}`).text()) / Num;  // 商品單價
    $(`#number-${id}`).text(Num + 1);
    $(`#cart-price-${id}`).text(ItemPrice * (Num + 1));

    // 更新Common.js定義的物件
    CartItemsList.forEach((list, i, arr) => {
        // 用id比對商品，增加數量
        if(list.id == id) {
            list.count += 1;
        }
    });
    console.log(CartItemsList)
}

// 減少購物車商品數量
function ReduceCartNumber(id) {
    let Num = parseInt($(`#number-${id}`).text());  // 數量
    let ItemPrice = parseInt($(`#cart-price-${id}`).text()) / Num;  // 商品單價
    if(Num > 1) {
        $(`#number-${id}`).text(Num - 1);
        $(`#cart-price-${id}`).text(ItemPrice * (Num - 1));

        // 更新Common.js定義的物件
        CartItemsList.forEach((list, i, arr) => {
            // 用id比對商品，增加數量
            if(list.id == id) {
                list.count -= 1;
            }
        });
        console.log(CartItemsList)
    }
}

// 刪除購物車內商品
function RemoveCartItem(id) {

}