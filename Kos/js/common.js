
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

    // 更新購物車資訊
    UpdateCartData();
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

        // 更新購物車資訊
        UpdateCartData();
    }
}

// 刪除購物車內商品
function RemoveCartItem(id) {
    if(confirm('確定要將此商品從購物車移除嗎？')){
        // 更新Common.js定義的物件
        CartItemsList.forEach((list, i, arr) => {
            // 用id比對商品，增加數量
            if(list.id == id) {
                CartItemsList.splice(i, 1);  // 刪除指定索引值的陣列
                // 刪除購物車內容
                $(`#cart-item-list .cart-content-table .cart-table > tbody > tr:nth-child(${i + 1})`).remove();
            }
        });

        // 如果購物車清零，顯示無商品
        if(CartItemsList.length == 0){
            // 清空購物車
            $('#cart-no-item').show();
            $('#cart-item-list').hide();
            $('#checkout-btn').hide();
        }
    }

    // 更新購物車資訊
    UpdateCartData();
}

// 更新購物車資訊
function UpdateCartData(){
    // 更新商品數量總和和總價
    let TotalCount = 0;
    let TotalPrice = 0;
    if(CartItemsList.length > 0){
        CartItemsList.forEach((item, i, arr)=>{
            TotalCount += item.count;
            TotalPrice += item.count * item.price;
        });
    }

    $('#total-count').text(TotalCount);
    $('#total-price').text(TotalPrice);

    // 更新購物車總數字
    CartItemsCount = TotalCount;
    $('#pc-cart').text(CartItemsCount);
    $('#mobile-cart').text(CartItemsCount);
}