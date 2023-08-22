
// 顯示商品詳細資訊
function ShowDetails() {
    //tab
    $('#details-tab').addClass('active');
    $('#care-tab').removeClass('active');
    $('#shipping-tab').removeClass('active');
    // add class
    $('#details').addClass('active');
    $('#care').addClass('disabled');
    $('#shipping').addClass('disabled');
    // remove class
    $('#details').removeClass('disabled');
    $('#care').removeClass('active');
    $('#shipping').removeClass('active');
}

// 顯示商品保存方式
function ShowCare() {
    //tab
    $('#details-tab').removeClass('active');
    $('#care-tab').addClass('active');
    $('#shipping-tab').removeClass('active');
    // add class
    $('#details').addClass('disabled');
    $('#care').addClass('active');
    $('#shipping').addClass('disabled');
    // remove class
    $('#details').removeClass('active');
    $('#care').removeClass('disabled');
    $('#shipping').removeClass('active');
}

// 顯示商品退換貨方式
function ShowShipping() {
    //tab
    $('#details-tab').removeClass('active');
    $('#care-tab').removeClass('active');
    $('#shipping-tab').addClass('active');
    // add class
    $('#details').addClass('disabled');
    $('#care').addClass('disabled');
    $('#shipping').addClass('active');
    // remove class
    $('#details').removeClass('active');
    $('#care').removeClass('active');
    $('#shipping').removeClass('disabled');
}

// 減少商品數量
function ReduceProductNumber() {
    let Num = parseInt($('#number').text());
    if(Num > 1) {
        $('#number').text(Num - 1);
    }
}

// 增加商品數量
function IncreaseProductNumber() {
    let Num = parseInt($('#number').text());
    $('#number').text(Num + 1);
}

// 將商品加入購物車
function AddItemToCart(id) {
    // alert('已將' + $('#number').text() + '件商品加入購物車');
    // 載入商品資訊
    $('#current-items').text($('#product-name').text());
    $('#current-count').text($('#number').text());
    $('#current-price').text('$' + parseInt($('#product-price').text()) * parseInt($('#number').text()));

    // 檢查同商品是否已在購物車內
    let CartExistItem = false;
    let CartItemsIndex = 0;  // 商品陣列索引值
    if(CartItemsList.length > 0){
        CartItemsList.forEach((item, i, arr) => {
            if(item.id == id) {
                CartExistItem = true;
                item.count += parseInt($('#number').text());  // 加總數字
                CartItemsIndex = i;
            }
        })
    }
    if(!CartExistItem) {
        // 將商品資訊加入到Common.js定義的物件中
        CartItemsList.push({
            id: id,
            name: $('#product-name').text(),
            count: parseInt($('#number').text()),
            price: parseInt($('#product-price').text())
        });
        CartItemsIndex = CartItemsList.length - 1;
    } 

    // 更新介面上顯示的數字
    CartItemsCount += parseInt($('#number').text());
    $('#pc-cart').text(CartItemsCount);
    $('#mobile-cart').text(CartItemsCount);

    // 更新購物車內容
    $('#cart-no-item').hide();
    $('#cart-item-list').show();
    $('#checkout-btn').show();

    // 更新購物車HTML
    $('#cart-item-list .cart-content-table .cart-table > tbody').html(`
        <tr>
            <td>
                <div class="cart-column1">
                    <div class="cart-img-cover">
                        <img src="asset/shop-01.png" />
                    </div>
                </div>
                <div class="cart-column2">
                    <div class="cart-name">${$('#product-name').text()}</div>
                    <div class="cart-count">
                        <div>
                            <a href="javascript:void(0)" onclick="ReduceCartNumber(${id})">
                                <img class="minus-icon" src="asset/minus.png" />
                            </a>
                        </div>
                        <div class="number-label">
                            <label id="number-${id}" class="cart-number">${CartItemsList[CartItemsIndex].count}</label>
                        </div>
                        <div>
                            <a href="javascript:void(0)" onclick="IncreaseCartNumber(${id})">
                                <img class="plus-icon" src="asset/plus.png" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="cart-column3">
                    <div class="cart-price">$ <span id="cart-price-${id}">${CartItemsList[CartItemsIndex].count * CartItemsList[CartItemsIndex].price}</span></div>
                    <div class="cart-remove">
                        <a href="javascript:void(0)" onclick="RemoveCartItem(1)"><img src="asset/trash.png" /></a>
                    </div>
                </div>
            </td>
        </tr>
    `);
    
    // 更新購物車資訊
    UpdateCartData();

    // 顯示提示視窗
    $('#hint-panel').show();
    $('#hint-bg').addClass('active');
    $('#cart-hint').addClass('active');

    // 重製商品數字
    $('#number').text(1);
}

// 顯示商品
function HideCartHint() {
    $('#hint-bg').removeClass('active');
    $('#cart-hint').removeClass('active');
    setTimeout(() => {
        $('#hint-panel').hide();
    }, 250);
}