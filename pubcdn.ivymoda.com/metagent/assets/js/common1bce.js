$(function () {
    $('.lazy').lazy();
});

$(document).ready(function () {
    shoppingCart(1);

    range_price();

    $('#order_account_code').select2();

    $('input[name=customer_birthday]').datepicker({
        dateFormat: 'dd/mm/yy'
    });

    $('button[name=btn_subscribe_submit]').on('click', function () {
        let that = this;
        let text_loading = $(this).attr('data-loading-text');
        let text_normal = $(this).attr('data-normal-text');
        let email = $('input[name=subscribe_email]').val();

        if (!email) {
            toastr.info('Bạn chưa nhập email!');
            return false;
        }

        setTextButton(this, text_loading);

        $.ajax({
            url: base_url + 'ajax/subscribe',
            data: { email: email },
            dataType: 'JSON',
            type: 'POST'
        }).done(function (response) {
            if (response.status == 1) {
                toastr.success(response.message);
            } else {
                toastr.error(response.message);
            }

            setTextButton(that, text_normal, 1);
        }).fail(function (error) {
            console.log(error);
        }).always(function () {
            setTextButton(that, text_normal, 1);
        });
    });

    $('form[name=newsletter]').on('submit', function (e) {
        e.preventDefault();

        let that = this;
        let email = $(this).find('input[name=newsletter_email]').val();

        $.ajax({
            url: base_url + 'ajax/subscribe',
            data: { email: email },
            dataType: 'JSON',
            type: 'POST'
        }).done(function (response) {
            if (response.status == 1) {
                toastr.success(response.message);
            } else {
                toastr.error(response.message);
            }
        }).fail(function (error) {
            console.log(error);
        });
    });

    $('.shop-name').on('click', function () {
        let key = $(this).attr('data-key');
        let type = $(this).attr('data-type'); //0: defaul - header, 1: page stores
        $('.shop-name').removeClass('active');
        $(this).addClass('active');

        if (typeof (type) !== "undefined" && type == 1) {
            showInfoMapPage(key);
        }
    });

    $(document).on('change', '#register_region_id', function () {
        show_city('#register_region_id', '#register_city_id');
        show_text_address('#register_region_id', '', '');
        $('#vnward_id').html('<option value="-1">Phường/Xã</option>');
    });

    $(document).on('change', '#register_city_id', function () {
        show_vnward('#register_region_id', '#register_city_id', '#vnward_id');
        show_text_address('', '#register_city_id', '');
    });

    $('.sel-order-option').on('click', function () {
        let value = $(this).attr('data-value');
        $('input[name=sel_order]').val(value);
        $('#frm_cat').submit();
    });

    $('.but_filter_product, .sel-order-option').click(function () {
        let att_size = $("input[name='att_size[]']").map(function () { if ($(this).is(":checked")) { return $(this).val() }; }).get();
        $('input[name=hid_size]').val(att_size);

        let att_color = $("input[name='att_color[]']").map(function () { if ($(this).is(":checked")) { return $(this).val() }; }).get();
        $('input[name=hid_color]').val(att_color);

        let att_chat_lieu = $("input[name='chat_lieu[]']").map(function () { if ($(this).is(":checked")) { return $(this).val() }; }).get();
        $('input[name=att_chat_lieu]').val(att_chat_lieu);

        let att_kieu_dang = $("input[name='kieu_dang[]']").map(function () { if ($(this).is(":checked")) { return $(this).val() }; }).get();
        $('input[name=att_kieu_dang]').val(att_kieu_dang);

        let att_hoa_tiet = $("input[name='hoa_tiet[]']").map(function () { if ($(this).is(":checked")) { return $(this).val() }; }).get();
        $('input[name=att_hoa_tiet]').val(att_hoa_tiet);

        let att_co_ao = $("input[name='co_ao[]']").map(function () { if ($(this).is(":checked")) { return $(this).val() }; }).get();
        $('input[name=att_co_ao]').val(att_co_ao);

        let att_tay_ao = $("input[name='tay_ao[]']").map(function () { if ($(this).is(":checked")) { return $(this).val() }; }).get();
        $('input[name=att_tay_ao]').val(att_tay_ao);

        let att_cap_quan = $("input[name='cap_quan[]']").map(function () { if ($(this).is(":checked")) { return $(this).val() }; }).get();
        $('input[name=att_cap_quan]').val(att_cap_quan);

        let att_cap_zuyp = $("input[name='cap_zuyp[]']").map(function () { if ($(this).is(":checked")) { return $(this).val() }; }).get();
        $('input[name=att_cap_zuyp]').val(att_cap_zuyp);

        let att_discount = $("input[name='att_discount']").map(function () { if ($(this).is(":checked")) { return $(this).val() }; }).get();
        $('input[name=hid_discount]').val(att_discount[0]);

        $('#frm_cat').submit();
    });

    $('.but_filter_remove').click(function () {
        var link = $('#frm_cat').data('slug');
        if (link == '' || link == undefined) {
            let url_string = window.location.href;
            let url = new URL(url_string);
            link = 'tim-kiem?q=' + url.searchParams.get('q');
        }

        document.location.href = base_url + link;
    });

    $('.product-detail__color__input input[name=color]').on('click', function () {
        $(this).parents('.product-detail__color__input').find('input[name=color]').removeAttr('checked');
        $(this).prop('checked', true);
    });

    $('#check_showroom').on('click', function () {
        if (!$('input[name=size]').is(':checked')) {
            toastr.info('Bạn chưa chọn size !');
            return;
        }

        $('.list_cuahang').empty();
        $('.list-showroom').empty();

        if ($('.list-showroom').is(':empty')) {
            $.ajax({
                type: 'post',
                url: base_url + 'ajax/box_find_at_the_shop',
                dataType: 'json'
            }).done(function (data) {
                if (data.status == 1) {
                    $('.list-showroom').html(data.data_html);
                    $('#list-showroom').modal('show');
                }
            }).fail(function (error) {
                console.log(error);
            });
        }
    });

    $(document).on('change', '#find_shop_region_id', function () {
        let value = $('option:selected', this).text();

        if (value == 'Chọn Tỉnh/Thành phố') value = '';

        findAtTheShop(value, '', '');
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('.account__link-delete').on('click', function (e) {
        let link = $(this).attr('href');
        e.preventDefault();

        Swal.fire({
            title: 'Xóa địa chỉ?',
            text: "Địa chỉ của bạn sẽ bị xóa vĩnh viễn!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = link;
            }
        });
    });

    // favourite
    $(document).on('click', '.favourite, .btn--wishlist, .btn-quick-shop-heart', function () {
        setBusy();

        if (!logged_in_id) {
            toastr.info('Bạn cần đăng nhập để thực hiện chức năng này !');
            clearBusy();
            return false;
        }

        let type_btn = 1; //1: .favourite, 2: .btn--wishlist, 3: .btn-quick-shop-heart
        let product_id = $(this).attr('data-product-id');
        let type = $(this).attr('data-type');
        let that = this;

        if ($(this).hasClass('btn--wishlist')) type_btn = 2;

        if ($(this).hasClass('btn-quick-shop-heart')) type_btn = 3;

        $.ajax({
            url: base_url + 'ajax/product-favourite',
            dataType: 'JSON',
            data: { 'product_id': product_id, 'type': type }
        }).done(function (response) {
            if (response.status == 0) {
                toastr.info(response.msg);
            } else {
                if (type_btn == 1) {
                    $('.favourite[data-product-id=' + product_id + ']').toggleClass("open");
                    $('.favourite[data-product-id=' + product_id + ']').find("i").toggleClass("icon-ic_heart");
                    $('.favourite[data-product-id=' + product_id + ']').find("i").toggleClass("icon-ic_heart_fill");
                    $('.favourite[data-product-id=' + product_id + ']').attr('data-type', type == 0 ? 1 : 0);
                } else if (type_btn == 2) {
                    $(that).toggleClass("open");
                    $(that).find("span").toggleClass("icon-ic_heart");
                    $(that).find("span").toggleClass("icon-ic_heart_fill");
                    $(that).attr('data-type', type == 0 ? 1 : 0);
                } else {
                    $(that).parents('.slider-quickshop').find('.btn-quick-shop-heart').toggleClass('active-heart');
                    $(that).parents('.slider-quickshop').find("span").toggleClass("icon-ic_heart");
                    $(that).parents('.slider-quickshop').find("span").toggleClass("icon-ic_heart_fill");
                    $(that).attr('data-type', type == 0 ? 1 : 0);

                    $('.favourite[data-product-id=' + product_id + ']').toggleClass("open");
                    $('.favourite[data-product-id=' + product_id + ']').find("i").toggleClass("icon-ic_heart");
                    $('.favourite[data-product-id=' + product_id + ']').find("i").toggleClass("icon-ic_heart_fill");
                    $('.favourite[data-product-id=' + product_id + ']').attr('data-type', type == 0 ? 1 : 0);
                }
            }
        }).fail(function (error) {
            console.log(error);
        }).always(function () {
            clearBusy();
        })
    });

    // partial product
    $(document).on('click', '.btn-quick-shop', function (e) {
        e.preventDefault();

        let product_id = $(this).attr('data-product-id');

        if (!product_id) {
            toastr.info('Không tìm thấy sản phẩm !');
            return false;
        }

        getPartialProduct(product_id);
    });

    // add to cart, purchase
    $(document).on('click', '.btn-add-to-cart, .purchase', function () {
        let product_id = $(this).attr('data-product-id');
        let product_sub_id = $('input[name=size][data-product-id=' + product_id + ']:checked').attr('data-product-sub-id');
        let product_sub_quantity = $('input[name=product_sub_quantity][data-product-id=' + product_id + ']').val();

        if (!product_sub_id) {
            toastr.info('Bạn chưa chọn size sản phẩm !');

            return false;
        }

        if (product_sub_quantity < 1) {
            toastr.info('Số lượng sản phẩm không hợp lệ !');

            return false;
        }

        if ($(this).hasClass('btn-add-to-cart')) {
            addToCart({ product_sub_id: product_sub_id, product_sub_quantity: product_sub_quantity });
        } else {
            purchase({ product_sub_id: product_sub_id, product_sub_quantity: product_sub_quantity });
        }
    });

    // remove from cart
    $(document).on('click', '.cart_product_sub_remove', function () {
        let index = $(this).attr('data-product-index');
        let rq_confirm = $(this).attr('data-confirm');

        if (!index) {
            toastr.info('Xóa sản phẩm khỏi giỏ hàng không thành công !');

            return false;
        }

        if (rq_confirm == 1) {
            Swal.fire({
                title: 'Xóa sản phẩm?',
                text: 'Sản phẩm của bạn sẽ bị xóa khỏi giỏ hàng!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xóa',
                cancelButtonText: 'Hủy'
            }).then((result) => {
                if (result.isConfirmed) {
                    removeFromCart(index);
                }
            });
        } else {
            removeFromCart(index);
        }
    });

    // quantity product
    $('.cart__table .product-detail__quantity-input').each(function () {
        let data = {};
        let incBtn = $(this).find('.product-detail__quantity--increase');
        let decBtn = $(this).find('.product-detail__quantity--decrease');
        let input = $(this).find('input[name=product_sub_quantity]');
        let product_sub_id = input.attr('data-product-sub-id');
        let hide_aside = input.attr('data-hide-aside');
        data.product_sub_id = product_sub_id;
        data.hide_aside = hide_aside;

        incBtn.on("click", function (e) {
            e.preventDefault();

            let currentVal = Number(input.val());
            let new_value = currentVal + 1;
            input.val(new_value);

            data.product_sub_quantity = currentVal;
            addToCart(data);
        });

        decBtn.on("click", function (e) {
            e.preventDefault();

            let currentVal = Number(input.val());
            let new_value = currentVal - 1 < 1 ? 1 : currentVal - 1;
            input.val(new_value);

            if (new_value != 1) {
                data.product_sub_quantity = new_value;
                addToCart(data);
            }
        });

        input.on('change', function () {
            if (input.val() <= 1) {
                input.val('1');
            } else {
                data.product_sub_quantity = input.val() - 1;

                addToCart(data);
            }
        });
    });

    // add couple to cart
    $(document).on('click', '.add-couple', function () {
        let data = {};
        let product_sub_id = $(this).attr('data-product-sub-id');

        if (!product_sub_id) {
            toastr.info('Không tìm thấy sản phẩm theo cặp !');

            return false;
        }

        data.product_sub_id = product_sub_id;
        data.product_sub_quantity = 1;
        data.hide_aside = 1;

        addToCart(data);
    });

    //partial choose address
    $('.checkout-partial-choose-address').on('click', function () {
        partialListAddress();
    });

    //choose address
    $(document).on('click', '.item-popup-chose-ad', function () {
        let that = this;
        let address_id = $(this).attr('data-address-id');
        let ship_id = $('input[name=shipping_method]:checked').val();

        setBusy();

        $.ajax({
            url: base_url + 'ajax/choose-address',
            data: { address_id: address_id, ship_id: ship_id },
            dataType: 'JSON'
        }).done(function (response) {
            if (response.status == 0) {
                toastr.info(response.msg);
            } else {
                $('.posi-mappin').removeClass('active');
                $(that).find('.posi-mappin').addClass('active');
                $('#box-address').html(response.box_address);
                $('.delivery-time').html('Thời gian giao hàng dự kiến: ' + response.delivery_time);
                shoppingCart();
            }
        }).fail(function (error) {
            console.log(error);
        }).always(function () {
            clearBusy();
        });
    });

    //partial add address
    $('.checkout-partial-add-address').on('click', function () {
        partialAddAddress();
    });

    //change payment method
    $('input[name=payment_method]').on('change', function () {
        let payment_method = $(this).val();

        $.ajax({
            url: base_url + 'ajax/choose-payment-method',
            data: { payment_method: payment_method }
        }).done(function (response) {
            if (response.status == 0) {
                toastr.info(response.msg);
            }
        }).fail(function (error) {
            console.log(error);
        });
    });

    //change shipping method
    $('input[name=shipping_method]').on('change', function () {
        let shipping_method_id = $(this).val();

        $.ajax({
            url: base_url + 'ajax/choose-shipping-method',
            data: { shipping_method_id: shipping_method_id }
        }).done(function (response) {
            if (response.status == 0) {
                toastr.info(response.msg);
            }
        }).fail(function (error) {
            console.log(error);
        });
    });

    //apply coupon
    $(document).on('click', '#but_coupon_code', function () {
        let coupon_code = $('input[name=coupon_code_text]').val();

        if (!coupon_code) return false;

        applyCouponCode(coupon_code);
    });

    //quick apply coupon
    $(document).on('click', '#but_cart_coupon_code', function () {
        let coupon_code = $('input[name=cart_coupon_code_text]').val();

        if (!coupon_code) return false;

        applyCouponCode(coupon_code);
    });

    //remove coupon
    $(document).on('click', '#but_cart_coupon_delete, #but_coupon_delete', function () {
        setBusy();

        $.ajax({
            url: base_url + 'ajax/remove-coupon-code'
        }).done(function (response) {
            if (response.status == 0) {
                toastr.info(response.msg);
            } else {
                $('input[name=coupon_code_text]').val('');
                $('input[name=cart_coupon_code_text]').val('');

                $('#but_cart_coupon_delete').text('Áp dụng');
                $('#but_coupon_delete').text('Áp dụng');

                $('#but_cart_coupon_delete').removeClass('btn--outline');
                $('#but_coupon_delete').removeClass('btn--outline');

                $('#but_cart_coupon_delete').attr('id', 'but_cart_coupon_code');
                $('#but_coupon_delete').attr('id', 'but_coupon_code');

                shoppingCart();
            }
        }).fail(function (error) {
            console.log(error);
        }).always(function () {
            clearBusy();
        });
    });

    //repurchase
    $('.btn-repurchase').on('click', function () {
        let product_sub_id = $(this).attr('data-product-sub-id');
        let product_sub_quantity = $(this).attr('data-product-sub-quantity');

        if (!product_sub_id) {
            toastr.info('Không tìm thấy sản phẩm!');

            return false;
        }

        if (!product_sub_quantity) product_sub_quantity = 1;

        addToCart({ product_sub_id: product_sub_id, product_sub_quantity: product_sub_quantity });
    });

    //cancel order
    $('.but-order-cancel').on('click', function () {
        let order_invoice_no = $(this).attr('data-order-invoice-no');

        if (!order_invoice_no) {
            toastr.info('Không tìm thấy đơn hàng!');

            return false;
        }

        cancelOrder(order_invoice_no);
    });

    //buy combo
    $('#add-combo-to-cart').on('click', function () {
        let list_product_sub_sku = $('input[name=hid_combo_product_sub_sku]').val();

        if (!list_product_sub_sku) {
            toastr.info('Thêm combo vào giỏ hàng thất bại!');

            return false;
        }

        setBusy();

        $.ajax({
            url: base_url + 'ajax/add_combo_to_cart',
            data: { list_product_sub_sku: list_product_sub_sku },
            dataType: 'JSON'
        }).done(function (response) {
            if (response.status == 0) {
                toastr.info(response.msg);
            } else {
                shoppingCart(1);
                showCartAside();
            }
        }).fail(function (error) {
            console.log(error);
        }).always(function () {
            clearBusy();
        });
    });

    //suggest search
    $('#search-quick').on('keydown', function (e) {
        if (e.keyCode !== 13) {
            return;
        }

        e.preventDefault();

        let key = $(this).val();

        setBusy();

        $.ajax({
            url: base_url + 'ajax/suggest_search',
            data: { key: key },
            dataType: 'JSON'
        }).done(function (response) {
            if (response.status == 0) {
                toastr.info(response.msg);
            } else {
                $('#suggest-search').html(response.data_html);
                showSuggestSearchBox();
            }
        }).fail(function (error) {
            console.log(error);
        }).always(function () {
            clearBusy();
        });
    });

    $(document).on('click', '.suggest-search .external-directory h4', function () {
        let text = $(this).find('span').text();
        $('#search-quick').val(text);
    });

    $(document).on('click', '.search-view-all', function () {
        let _form = $('form[name=frm_search]');

        _form.submit();
    });

    //popup enabled
    if (popup_enabled.length > 0) {
        for (let i = 0; i < popup_enabled.length; i++) {
            if (popup_enabled[i]['popup_time_delay'] == 0) {
                $('.popup-' + popup_enabled[i]['popup_key']).addClass('size-active');
            } else {
                setTimeout(function () { $('.popup-' + popup_enabled[i]['popup_key']).addClass('size-active') }, popup_enabled[i]['popup_time_delay'] * 1000);
            }

            if (popup_enabled[i]['popup_time_show'] > 0) {
                let time_out = Number(popup_enabled[i]['popup_time_delay']) + Number(popup_enabled[i]['popup_time_show']);

                setTimeout(function () { $('.popup-' + popup_enabled[i]['popup_key']).removeClass('size-active') }, time_out * 1000);
            }
        }
    }

    $('.item-zoom').zoom({ on: 'click' });

    $('.btn-filter-news').on('click', function () {
        let category_selected = [];

        $('.field-cat').each(function () {
            if ($(this).is(':checked')) category_selected.push($(this).val());
        });

        $('input[name=category_selected]').val(category_selected.join(','));

        $('form[name=filter_category]').submit();
    });

    $('.category-description-short--icon').on('click', function () {
        $(this).toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
        $('.category-description-long').slideToggle(500, 'swing');
    });
});

$.fn.serializeFormToObject = function () {
    var $form = $(this);
    var fields = $form.find('[disabled]');
    fields.prop('disabled', false);
    var json = $form.serializeJSON();
    fields.prop('disabled', true);
    return json;
};

function setTextButton(button, text, status = 0) {
    //0: loading, 1: normal
    switch (status) {
        case 0:
            $(button).addClass('avoid-clicks');
            $(button).html(text);
            break;
        case 1:
            $(button).removeClass('avoid-clicks');
            $(button).html(text);
            break;
    }
}

function FormatCurrency(number) {
    return number.toLocaleString('de-DE', { minimumFractionDigits: 0 });
}

function show_city(register_id_in, city_id_out) {
    var region_id = $(register_id_in).val();

    if (region_id != '' && region_id != -1) {
        $.ajax({
            type: 'post',
            url: base_url + 'ajax/getCity',
            dataType: 'json',
            data: { 'region_id': region_id }
        }).done(function (data) {
            $(city_id_out).html(data.city_html);
        }).fail(function (error) {
            console.log(error);
        });
    }
}

function show_vnward(register_id_in, city_id_out, vnward_out) {
    var region_id = $(register_id_in).val();
    var city_id = $(city_id_out).val();

    if (region_id != '' && region_id != -1 && city_id != '-1') {
        $.ajax({
            type: 'post',
            url: base_url + 'ajax/getVnward',
            dataType: 'json',
            data: { 'region_id': region_id, 'city_id': city_id }
        }).done(function (data) {
            $(vnward_out).html(data.vnward_html);
        }).fail(function (error) {
            console.log(error);
        });
    }
}

function show_text_address(region_id, city_id, vnward_id) {
    if (region_id != '') {
        var region_text = $(region_id + ' option:selected').text();
        $('.address_text_region_name').text(region_text);
    }

    if (city_id != '') {
        var city_text = $(city_id + ' option:selected').text();
        $('.address_text_city_name').text(city_text + ',');
    }

    if (vnward_id != '') {
        var vnward_text = $(vnward_id + ' option:selected').text();
        $('.address_text_vnward_name').text(vnward_text + ',');
    }
}

function range_price() {
    let product_price_from = $('input[name=product_price_from]').val() != '' ? $('input[name=product_price_from]').val() : 0;
    let product_price_to = $('input[name=product_price_to]').val() != '' ? $('input[name=product_price_to]').val() : 10000000;

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 10000000,
        values: [product_price_from, product_price_to],
        slide: function (event, ui) {
            $("#amout-from").html(FormatCurrency(ui.values[0]) + 'đ');
            $("#amout-to").html(FormatCurrency(ui.values[1]) + 'đ');

            $('input[name=product_price_from]').val(ui.values[0]);
            $('input[name=product_price_to]').val(ui.values[1]);
        }
    });
}

function setBusy() {
    $('html').addClass('wait');
    $('#overlay').addClass('visible');
}

function clearBusy() {
    $('html').removeClass('wait');
    $('#overlay').removeClass('visible');
}

function findAtTheShop(city_name, district_name, count_call) {
    var product_sub_key = $('input[name=size]:checked').attr('data-product-sub-sku');

    if (count_call == '') count_call = 0;

    data_send = { city_name: city_name, district_name: district_name, product_key: product_sub_key, count_call: count_call };

    setBusy();

    $.ajax({
        type: 'post',
        url: base_url + 'ajax/find_at_the_shop',
        dataType: 'json',
        data: data_send
    }).done(function (data) {
        if (data.status == 1) {
            $('.list_cuahang').html(data.box_shop);
            p_message('#msg_cuahang', '');
        } else {
            $('.list_cuahang').html('');
            p_message('#msg_cuahang', data.message);
        }
    }).fail(function (error) {
        console.log(error);
    }).always(function () {
        clearBusy();
    });
}

function p_message(idc, msg) {
    $(idc).html(msg);
    $(idc).show();
    $(idc).delay(50000).fadeOut(500);
}

function getPartialProduct(product_id = '') {
    setBusy();

    $.ajax({
        url: base_url + 'ajax/partial_product',
        dataType: 'JSON',
        data: { product_id: product_id }
    }).done(function (response) {
        if (response.status == 0) {
            toastr.info(response.msg);
        } else {
            $('#partial_product').html(response.data);
            $('.modal-quickshop').toggleClass('quickshop-active');
            $('body').addClass('over-hidden-tran');
        }
    }).fail(function (error) {
        console.log(error);
    }).always(function () {
        clearBusy();
    });
}

function addToCart(data) {
    setBusy();

    $.ajax({
        url: base_url + 'ajax/add-to-cart',
        dataType: 'JSON',
        data: data
    }).done(function (response) {
        if (response.status == 0) {
            toastr.info(response.msg);
        } else {
            if (!data.hide_aside) {
                hideQuickShopOverlay();
                showCartAside();
            }
            // toastr.success(response.msg);
        }

        shoppingCart();
    }).fail(function (error) {
        console.log(error);
    }).always(function () {
        clearBusy();
    });
}

function purchase(data) {
    setBusy();

    $.ajax({
        url: base_url + 'ajax/add-to-cart',
        dataType: 'JSON',
        data: data
    }).done(function (response) {
        if (response.status == 0) {
            toastr.info(response.msg);
        } else {
            toastr.success(response.msg);

            window.location.href = base_url + 'thanhtoan/giohang';
        }
    }).fail(function (error) {
        console.log(error);
    }).always(function () {
        clearBusy();
    });
}

function removeFromCart(index) {
    setBusy();

    $.ajax({
        url: base_url + 'ajax/remove-from-cart',
        dataType: 'JSON',
        data: { del_product_index: index }
    }).done(function (response) {
        if (response.status == 0) {
            toastr.info(response.msg);
        } else {
            shoppingCart();
        }
    }).fail(function (error) {
        console.log(error);
    }).always(function () {
        clearBusy();
    })
}

function shoppingCart(type = 0) {
    //0: all, 1: cart aside, 2: cart box, 3: order_summary
    $.ajax({
        url: base_url + 'ajax/shopping-cart'
    }).done(function (response) {
        response = JSON.parse(response);

        if (response.status == 0) {
            toastr.info(response.msg);
        } else {
            switch (type) {
                case 1:
                    $('#cart-aside').html(response.cart_aside);
                    break;
                case 2:
                    $('#cart-box').html(response.cart_box);
                    break;
                case 3:
                    $('#order-summary').html(response.order_summary);
                    break;
                default:
                    $('#cart-aside').html(response.cart_aside);
                    $('#cart-box').html(response.cart_box);
                    $('#order-summary').html(response.order_summary);
            }

            $('.item-cart .icon .number-cart').text(response.total_product);
        }
    }).fail(function (error) {
        console.log(error);
    });
}

function hideQuickShopOverlay() {
    $('.modal-quickshop.quickshop-active').removeClass('quickshop-active');
    $('body').removeClass('over-hidden-tran');
}

function showCartAside() {
    $('.header-actions .item.item-cart').find('.sub-action-cart').addClass('sub-active');
}

function partialListAddress() {
    setBusy();

    $.ajax({
        url: base_url + 'ajax/partial-choose-address'
    }).done(function (response) {
        response = JSON.parse(response);

        if (response.status == 0) {
            toastr.info(response.msg);
        } else {
            $('body').append(response.data_html);

            $('#dialog-content-2').fancybox().trigger('click');
        }
    }).fail(function (error) {
        console.log(error);
    }).always(function () {
        clearBusy();
    });
}

function partialAddAddress() {
    setBusy();

    $.ajax({
        url: base_url + 'ajax/partial-add-address'
    }).done(function (response) {
        response = JSON.parse(response);

        if (response.status == 0) {
            toastr.info(response.msg);
        } else {
            $('body').append(response.data_html);

            $('#fancybox-popup').fancybox().trigger('click');
        }
    }).fail(function (error) {
        console.log(error);
    }).always(function () {
        clearBusy();
    });
}

function applyCouponCode(coupon_code) {
    setBusy();

    $.ajax({
        url: base_url + 'ajax/apply-coupon-code',
        data: { coupon_code: coupon_code }
    }).done(function (response) {
        if (response.status == 0) {
            toastr.info(response.msg);
        } else {
            $('input[name=coupon_code_text]').val(coupon_code);
            $('input[name=cart_coupon_code_text]').val(coupon_code);

            $('#but_cart_coupon_code').text('Bỏ mã');
            $('#but_coupon_code').text('Bỏ mã');

            $('#but_cart_coupon_code').addClass('btn--outline');
            $('#but_coupon_code').addClass('btn--outline');

            $('#but_cart_coupon_code').attr('id', 'but_cart_coupon_delete');
            $('#but_coupon_code').attr('id', 'but_coupon_delete');

            shoppingCart();
        }
    }).fail(function (error) {
        console.log(error);
    }).always(function () {
        clearBusy();
    });
}

function cancelOrder(order_invoice_no) {
    Swal.fire({
        title: 'Xác nhận hủy đơn hàng?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hủy đơn',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            setBusy();

            $.ajax({
                url: base_url + 'ajax/cancel_order',
                data: { order_invoice_no: order_invoice_no },
                dataType: 'JSON'
            }).done(function (response) {
                if (response.status == 0) {
                    toastr.info(response.msg);
                } else {
                    toastr.success(response.msg);
                    window.location.href = window.location.href;
                }
            }).fail(function (error) {
                console.log(error);
            }).always(function () {
                clearBusy();
            });
        }
    });
}

function formatTime(time) {
    if (time < 10) {
        time = '0' + time;
    }

    return time;
}

function showSuggestSearchBox() {
    $('.quick-search').addClass('quick-hidden');
    $('.main-suggest').addClass('show-suggest');
    $('.template-suggest').addClass('active');
    $('.suggest-search').css('display', 'block');
}

function hideSuggestSearchBox() {
    $('.quick-search').removeClass('quick-hidden');
    $('.main-suggest').removeClass('show-suggest');
    $('.template-suggest').removeClass('active');
    $('.suggest-search').css('display', 'none');
}