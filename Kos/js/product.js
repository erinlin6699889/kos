
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
function AddItemToCart() {
    alert('已將' + $('#number').text() + '件商品加入購物車');
}