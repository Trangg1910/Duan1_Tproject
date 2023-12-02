function calculateTime(countDownDate, {
    day,
    hour,
    minute,
    second
}) {
    // Get today's date and time
    if (!datetime_now) {
        datetime_now = new Date().getTime();
    } else {
        datetime_now = datetime_now +1000;
    }

    var now = datetime_now;

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.html(formatTime(days));
    hour.html(formatTime(hours));
    minute.html(formatTime(minutes));
    second.html(formatTime(seconds));
}

function countDown(dateEnd, {
    day,
    hour,
    minute,
    second
}) {
    // Set the date we're counting down to
    var countDownDate = new Date(dateEnd).getTime();
    calculateTime(countDownDate, {
        day,
        hour,
        minute,
        second
    });
    // Update the count down every 1 second
    var x = setInterval(function() {
        calculateTime(countDownDate, {
            day,
            hour,
            minute,
            second
        });
    }, 1000);
}

(function($) {
    "use strict";
    $(document).ready(function() {
        $(".auth__block .auth__title").on("click", function(e) {
            if (window.innerWidth < 768) {
                e.preventDefault();
                $(this).toggleClass("active");
                $(this).siblings(".auth__login__content").slideToggle();
                $(".auth__block .auth__title")
                    .not($(this))
                    .siblings(".auth__login__content")
                    .slideUp();
                $(".auth__block .auth__title").not($(this)).removeClass("active");
            }
        });

        $(".ds__list .ds__province h4").on("click", function(e) {
            e.preventDefault();
            $(this).parent().toggleClass("active");
            $(".ds__list .ds__province").not($(this).parent()).removeClass("active");
        });

        $(".product-detail__rating-wrapper").each(function() {
            var percentage = Number($(this).data("percentage"));
            $(this)
                .find(".product-detail__rating__bar")
                .css({
                    width: `${percentage}%`,
                });
        });

        $(".product-detail__flash-sale__time").each(function() {
            var dateEnd = $(this).data("time");
            var day = $(this).find("#days");
            var hour = $(this).find("#hours");
            var minute = $(this).find("#minutes");
            var second = $(this).find("#seconds");

            countDown(dateEnd, {
                day,
                hour,
                minute,
                second,
            });
        });

        // $(".product-detail__tab .tab-item").on("click", function () {
        //   const itemIndex = $(this).index();
        //   $(".product-detail__tab .tab-content").each(function (index) {
        //     if (index === itemIndex) {
        //       $(this).addClass("active");
        //     } else {
        //       $(this).removeClass("active");
        //     }
        //   });
        //   $(".product-detail__tab .tab-item").each(function (index) {
        //     if (index === itemIndex) {
        //       $(this).addClass("active");
        //     } else {
        //       $(this).removeClass("active");
        //     }
        //   });
        // });

        // the js

        // list-related-combo-slider
        $(".list-related-combo-sl .owl-carousel").owlCarousel({
            loop: false,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 2,
                    margin: 30,
                },
                992: {
                    items: 3,
                    margin: 30,
                },
            }
        });

        // related news slider
        $(".related-news .owl-carousel").owlCarousel({
            loop: false,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 2,
                    margin: 30,
                },
                992: {
                    items: 4,
                    margin: 30,
                },
            }
        });
        // about slider
        $('.about-coo__list .owl-carousel').owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            margin: 26,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 3,
                    margin: 56,
                },
                415: {
                    items: 4,
                    margin: 56,
                },
                992: {
                    items: 5,
                    margin: 26,
                },
                1081: {
                    items: 6,
                    margin: 26,
                }
            }
        });

        // product-detail__tab
        $(".product-detail__tab .tab-item .title").on("click", function() {
            $(this).parent().find('.tab-content').slideToggle(500);
            $(this).toggleClass('active');
        });

        // Slider
        if ($(window).width() < 768) {
            $('.product-detail__content--left .owl-carousel').owlCarousel({
                items: 1,
                nav: false,
                dots: false,
                loop: true,
                center: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 7000,
                autoplayHoverPause: true
            });
        } else {
            const contentSticky = new VanillaSticky({
                HTMLElement: document.querySelector('.product-detail__content--left'),
                indents: {
                    top: 0,
                    bottom: 50,
                },
            });
            contentSticky.init();

            const mainSidebarSticky = new VanillaSticky({
                HTMLElement: document.querySelector('.product-detail__conttent--right'),
                indents: {
                    top: 0,
                    bottom: 50,
                },
            });
            mainSidebarSticky.init();
        }


        // Store list-map
        if ($(window).width() < 767) {
            var width_screen_t = $(window).width();
            $('.map-page .sub-action--left iframe').css('height', width_screen_t);
            // console.log(width_screen_t);
        }


        // Silder combo
        $(".combo__content--ct-slider .owl-carousel").owlCarousel({
            loop: true,
            margin: 68,
            items: 2,
            dots: false,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 16,
                    dots: true,
                },
                620: {
                    items: 2,
                    margin: 50,
                    dots: true,
                },
                1200: {
                    items: 2,
                    margin: 30,
                    dots: false,
                },
                1440: {
                    items: 2,
                    margin: 68,
                    dots: false,
                }
            }
        });
        // End the js

        $(".star-rating .star-rating__background .star-rating__backgroud-item").on(
            "click",
            function() {
                var index = ($(this).index() + 1) * 20;
                $(".star-rating .star-rating__bar").css({
                    width: `${index}%`,
                });
                $(".star-rating input[hidden]").val(`${index}%`);
            }
        );


        // Product image slider
        if (typeof Swiper === "function") {
            const smallProductSlider = new Swiper(
                ".product-gallery__slide--small .swiper-container", {
                    loop: true,
                    slidesPerView: 4,
                    direction: $(window).innerWidth() >= 768 ? "vertical" : "horizontal",
                    watchSlidesProgress: true,
                    spaceBetween: 15,
                    breakpoints: {
                        768: {
                            slidesPerView: 6,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    },
                }
            );
            const bigProductSlider = new Swiper(
                ".product-gallery__slide--big .swiper-container", {
                    loop: true,
                    slidesPerView: 1,
                    effect: "fade",
                    navigation: {
                        prevEl: ".product-gallery__slide--big .swiper-nav-prev",
                        nextEl: ".product-gallery__slide--big .swiper-nav-next",
                    },
                    fadeEffect: {
                        crossfade: true,
                    },
                    thumbs: {
                        swiper: smallProductSlider,
                    },
                }
            );

            // open popup details
            $('.product-detail .pro__detail--list-img .item-cat-product img').on('click', function(e) {
                e.preventDefault();

                let index = $(this).attr('data-index');

                smallProductSlider.slideTo(index);
                bigProductSlider.slideTo(index);

                $(this).parents('.product-detail__content').find('.pro__detail--list-img-popup').addClass('pp-active');
                $('body').addClass('over-hidden-tran');
            });
        }

        $("#user_avatar_input").on("change", function (e) {
            if (e.target.files[0]) {
              var file = e.target.files[0];
              var typeimage = false;

              if(file.type == 'image/png'){
                  typeimage = true;
              }

              if(file.type == 'image/jpeg'){
                  typeimage = true;
              }

              if( typeimage == false) {
                  toastr.info('Hình ảnh không đúng định dạng png hoặc jpeg !');
                  return;
              }

              if(file.size > 1048576){
                  toastr.info('Kích thước hình ảnh phải nhỏ hơn 1MB !');
                  return;
              }

              var reader = new FileReader();
              var file_name = reader.result;

              reader.onloadend = function () {
                $.ajax({
                  type: "post",
                  url: base_url+"customer/up_img",
                  data: {
                    imgBase64: reader.result,
                  },
                  dataType: "Json",
                  beforeSend: function () {
                  },
                  success: function (response) {
                      if (response.success == true) {
                          $('input[name=customer_img]').val(response.rand_name+'.png');
                          $("#user_avatar_preview").attr("src", static_url + 'images/customer/avatar/' + response.rand_name + '.png');
                      } else {
                          toastr.info('Đã có lỗi xảy ra!');
                      }
                  },
                  complete: function () {
                  },
                });
              };

              reader.readAsDataURL(file);
            }
          });

        $(".order-sidemenu__user").on("click", function(e) {
            if ($(window).innerWidth() <= 1024) {
                e.preventDefault();
                $(this).siblings(".order-sidemenu__menu").slideToggle();
            }
        });

        $(".product-detail .product-detail__quantity-input").each(function() {
            const incBtn = $(this).find(".product-detail__quantity--increase");
            const decBtn = $(this).find(".product-detail__quantity--decrease");
            const input = $(this).find('input[type="number"]');
            incBtn.on("click", function(e) {
                const currentVal = Number(input.val());
                e.preventDefault();
                input.val(currentVal + 1);
            });
            decBtn.on("click", function(e) {
                const currentVal = Number(input.val());
                e.preventDefault();
                input.val(currentVal - 1 < 1 ? 1 : currentVal - 1);
            });
            input.on('change', function() {
                if (input.val() < 1) {
                    input.val('1')
                }
            });
        });

        $(".main-action .info-price-quantity").each(function() {
            const incBtns = $(this).find(".price-quantity-plus");
            const decBtns = $(this).find(".price-quantity-minus");
            const inputs = $(this).find('input[type="number"]');
            incBtns.on("click", function(e) {
                const currentVal = Number(inputs.val());
                e.preventDefault();
                inputs.val(currentVal + 1);
            });

            decBtns.on("click", function(e) {
                const currentVal = Number(inputs.val());
                e.preventDefault();
                inputs.val(currentVal - 1 < 1 ? 1 : currentVal - 1);
            });
            inputs.on('change', function() {
                if (inputs.val() < 1) {
                    inputs.val('1')
                }
            });
        });

        // Prodetail slider 
        // var swiper = new Swiper(".mySwiper-pro-dt", {
        //   loop: true,
        //   spaceBetween: 10,
        //   slidesPerView: 4,
        //   freeMode: true,
        //   watchSlidesProgress: true,
        // });
        // var swiper2 = new Swiper(".mySwiper2-pro-dt", {
        //   loop: true,
        //   spaceBetween: 10,
        //   navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        //   },
        //   thumbs: {
        //     swiper: swiper,
        //   },
        // });

        $('.pro-details-overlay').on('click', function(e) {
            e.preventDefault();
            $(this).parents('.product-detail__content').find('.pro__detail--list-img-popup').removeClass('pp-active');
            $('body').removeClass('over-hidden-tran');
        })

        // open cart right when add cart quick shop
        $('.modal-quickshop .btn.btn--large').on('click', function(e) {
            e.preventDefault();
            $(this).parents('.modal-quickshop').removeClass('quickshop-active');
            $('.header-actions .item.item-cart').find('.sub-action-cart').addClass('sub-active');
        })

        $('input[name=allow_gnvc], input[name=allow_ttgd]').on('click', function () {
            if ($(this).attr('checked')) {
                $(this).prop('checked', false);
                $(this).removeAttr('checked');
            } else {
                $(this).attr('checked', 'checked');
            }
        });
    });

})(jQuery);

$(document).ready(function() {
    $(document).on('click', '.suggest-search .list-color ul li', function (e) {
        e.preventDefault();
        $(this).parent().find('li').removeClass('checked');
        $(this).toggleClass('checked');
        if ($(this).parent().find('li').hasClass('checked')) {
            let img_front = $(this).attr('data-img-front');
            let product_url = $(this).attr('data-product-url');
            $(this).parents('.products-suggest-item').find('.products-img-item img').attr("src", img_front);
            $(this).parents('.products-suggest-item').find('.products-img-item a, .title-product a').attr('href', product_url);
        }
    });

    // edit account - change email
    var clickschangeEmail = 0;
    $("#changeEmail").click(function(){
      if(clickschangeEmail == 0){
        var customer_email = $('#customer_email').val();
        $.ajax({
          type: "post",
          url: base_url+"customer/change_email",
          data: {
            customer_email: customer_email,
          },
          dataType: "Json",
          beforeSend: function () {
              clickschangeEmail = 1;
              $('#changeEmail').html("<img style='width: 23px;height: 23px' src='" + static_url + "images/assets/loading-buffering.gif' />");
          },
          success: function (response) {
            if(response.status){
              clickschangeEmail = 1;
                toastr.success(response.data);
            }else {
                clickschangeEmail = 0;
                toastr.info(response.data);
            }
          },
          complete: function () {
             $('#changeEmail').text("Thay đổi");
          },
        });
      }
    });
    // edit account - change password
    $("#change_pass").click(function(){
      var customer_pass_old = $('#customer_pass_old').val();
      var customer_pass_new1 = $('#customer_pass_new1').val();
      var customer_pass_new2 = $('#customer_pass_new2').val();
      $.ajax({
        type: "post",
        url: base_url+"customer/change_pass",
        data: {
          customer_pass_old: customer_pass_old,
          customer_pass_new1: customer_pass_new1,
          customer_pass_new2: customer_pass_new2,
        },
        dataType: "Json",
        beforeSend: function () {
        },
        success: function (response) {
          if(response.status == false) {
            for(var i = 0; i < response.errors.length; i++) {
              toastr.info(response.errors[i]);
            }
          }else{
            toastr.success('Bạn thay đổi mật khẩu thành công !');
            window.location= base_url+"customer/info";
          }
        },
        complete: function () {
        },
      });

    });
    // edit account - change phone
    var clicks = 0;
    $("#change_phone").click(function(){
      if (clicks == 0){
        var customer_phone = $('#customer_phone').val();
        $.ajax({
          type: "post",
          url: base_url+"customer/change_phone",
          data: {
            customer_phone: customer_phone,
          },
          dataType: "Json",
          beforeSend: function () {
              clicks = 1;
              $('#change_phone').html("<img style='width: 23px;height: 23px' src='" + static_url + "images/assets/loading-buffering.gif' />");
          },
          success: function (response) {
            $('#verify_token').val(response.verify_token);
            if(response.status == true){
              clicks = 1;
              toastr.success(response.data);
            }else{
              clicks = 0;
              toastr.info(response.data);
            }
          },
            complete: function () {
                $('#change_phone').text("Xác nhận");
            },
        });
      }
    });
})