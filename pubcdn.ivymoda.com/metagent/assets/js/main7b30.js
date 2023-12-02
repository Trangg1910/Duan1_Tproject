(function($) {
    "use strict";
    $(document).ready(function() {
        $(".system-head li").click(function() {
            var tab_id = $(this).attr("data-tab");

            $(".system-head li").removeClass("active");
            $(".system-inner").removeClass("active");

            $(this).addClass("active");
            $(this)
                .parents(".system-tabs")
                .find("#loading-bar-spinner")
                .css("display", "block");

            $("#" + tab_id).addClass("active active-hidden");
            setTimeout(function() {
                $("#loading-bar-spinner").css("display", "none");
                $("#" + tab_id).removeClass("active-hidden");
            }, 1000);
        });


        // Header menu show number banner home
        $('.main-menu>.menu>li').hover(function() {
            // console.log('trua')
            if ($(this).find('ul').hasClass("sub-menu")) {
                $('.home-banner').toggleClass('active-nb')
            }
        });

        // Header right
        $(".item.wallet:not(.item-account-ct) > a").click(function(e) {
            e.preventDefault();
            $(this).parent().find(".sub-action").toggleClass('sub-active');
            $(this).parents('body').toggleClass('over-hidden-tran');
            $('.home-banner').toggleClass('active-nb');
            // $(this).parents('body').toggleClass('over-hidden-tran');
            // $("#wrapper").bind("wheel", function () {
            //     return false;
            // });
            $(".item.wallet:not(.item-account-ct) > a").not(this).parent().find(".sub-action").removeClass('sub-active');
        });

        $(".item.wallet:not(.item-account-ct) > a").click(function(e) {
            e.preventDefault();
            if (!($(this).parents('.right-header').find('.sub-action').hasClass("sub-active"))) {
                $("body").removeClass('over-hidden-tran');
                $('.home-banner').removeClass('active-nb')
            } else {
                $("body").addClass('over-hidden-tran');
                $('.home-banner').addClass('active-nb')
            }
        });

        // item-account
        $('.item-account-ct > a').click(function(e) {
            e.preventDefault();
            $(this).parent().find('.sub-action').slideToggle();
            $('.home-banner').toggleClass('active-nb');
        });

        $(document).on('click', '.item.wallet .sub-action--overlay,.item.wallet .action-close', function(e) {
            e.preventDefault();
            $(this).parents('.sub-action').removeClass('sub-active');
            $("body").removeClass('over-hidden-tran');
            $('.home-banner').removeClass('active-nb');
        })

        // $('.item.wallet .action-close').on('click', function () {
        //     $(this).parents('.wallet').find(".sub-action").slideToggle();
        //     $(".item.wallet > a").not('.wallet').parent().find(".sub-action").slideUp();
        // })

        // End Header-right

        $(".item-nav").click(function(e) {
            e.preventDefault();
            if ($(this).parent().find(".sub-item-nav").children().length > 0) {
                $(this).parent().find(".sub-item-nav").toggleClass("open");
                $(this).parents('body').toggleClass('over-hidden-tran');
                $(".item-nav")
                    .not(this)
                    .parent()
                    .find(".sub-item-nav")
                    .removeClass("open");
            }
        });

        // $(".item-cart > a").click(function (e) {
        //   e.preventDefault();
        //   $(this).parent().find(".sub-action").addClass("open");
        // });
        $(".action-close").click(function() {
            $(this).parent().removeClass("open");
            $(this).parents('body').removeClass('over-hidden-tran')
        });

        $(".page-number").click(function(e) {
            e.preventDefault();
            $(this).addClass("current");
            $(".page-number").not(this).removeClass("current");
        });
        $(".pagination a").click(function(e) {
            $(this).addClass("current");
            $(".pagination a").not(this).removeClass("current");
        });
        $(".about-thumbnail").on("click", function(ev) {
            $(this).addClass("open");
            $(this).parent().find("iframe")[0].src += "&autoplay=1";
            ev.preventDefault();
        });
        $(".sub-menu-mb").each(function() {
            $(this)
                .parent()
                .addClass("has-child ")
                .find("> a")
                .append(
                    '<span class="arrow"><i class="icon-ic_plus"></i><i class="icon-ic_minus"></i></span>'
                );
        });
        $(".child-sub ").each(function() {
            $(this)
                .parent()
                .addClass("has-sub-child")
                .find("> a")
                .append(
                    '<span class="arrows"><i class="icon-ic_plus"></i><i class="icon-ic_minus"></i></span>'
                );
        });
        $(".has-child .arrow").on("click", function(e) {
            e.preventDefault();
            $(this).toggleClass("open");
            $(this).parents(".has-child").find("> .sub-menu-mb").slideToggle("fast");
        });
        $(".has-sub-child .arrows").on("click", function(e) {
            e.preventDefault();
            $(this).toggleClass("open");
            $(this)
                .parents(".has-sub-child")
                .find("> .child-sub")
                .slideToggle("fast");
        });
        $(".mobile-menu").on("click", function() {
            $(this).parents(".main-menu").toggleClass("open");
        });
        $(".close-menu").on("click", function() {
            $(this).parents(".main-menu").removeClass("open");
        });
        $(".list-size button").click(function() {
            // e.preventDefault();
            $(this).parents(".list-size").removeClass("open");
        });
        /*  [ Main Slider ]
                    - - - - - - - - - - - - - - - - - - - - */
        // The js

        // search tìm kiếm
        $('.site-header .external-directory h4').on("click", function() {
            var search_header = $(this).text().trim();
            $(this).parents('.search-form-hd-content').find('.search-block-input input').val(search_header);
        });
        $('.site-header .external-directory .inline-directory li a').on("click", function() {
            var search_header = $(this).text();
            $(this).parents('.search-form-hd-content').find('.search-block-input input').val(search_header);
        });
        // site-list--img
        var site_list__img_w = $('.site-list--img img').width();
        $('.site-list--img .site-list--img-text').css('max-width', site_list__img_w * 2)

        // Slider banner
        $('.slider-banner').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace) {
                return;
            }
            var carousel = e.relatedTarget;
            // $('.banner__number-nav').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
            $('.banner__number-nav .banner__number').text(carousel.relative(carousel.current()) + 1);
            $('.banner__number-nav .banner__count').text(carousel.items().length);
        }).owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            items: 1,
        });


        $(".list-products.slider-pro__ct.owl-carousel").owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            autoplay: false,
            autoplayHoverPause: true,
            autoplayTimeout: 7000,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false,
                    // margin: 15,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            },
        });

        $(".template-result .list-products.slider-pro__ct.owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            autoplay: false,
            autoplayHoverPause: true,
            autoplayTimeout: 7000,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false,
                    // margin: 15,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            },
        });

        $(".slider__pa_nav.owl-carousel").owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            dots: true,
            autoplay: false,
            autoplayHoverPause: true,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false,
                    // margin: 15,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            },
        });

        $(".about-prod-block-slider.owl-carousel").owlCarousel({
            loop: false,
            margin: 28,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 1,
                },
                801: {
                    items: 2,
                },
            },
        });

        $(".slider-category__ct.owl-carousel").owlCarousel({
            loop: true,
            margin: 60,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,

            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false,
                    margin: 60,
                },
                541: {
                    items: 2,
                },
                991: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },

            },
        });

        // lookbook

        $(".look-book-product__slider .owl-carousel").owlCarousel({
            loop: true,
            margin: 28,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayHoverPause: false,
            mouseDrag: false,
            autoplayTimeout: 7000,
            items: 4,
            responsive: {
                0: {
                    nav: true,
                    navText: [
                        '<i class="icon-ic_left-arrow"></i>',
                        '<i class="icon-ic_right-arrow"></i>',
                    ],
                    items: 1,
                },
                768: {
                    nav: false,
                    items: 3,
                },
                991: {
                    nav: false,
                    items: 4,
                },

            },
        });

        // $(".combo__content--ct-slider .owl-carousel").owlCarousel({
        //     loop: true,
        //     margin: 68,
        //     items: 2,
        //     dots: false,
        //     nav: false,
        // });

        $('.qa-page--ask').on('click', function() {
            if ($(this).parent().hasClass('qa-rv-active')) {
                $(this).parent().find('.qa-page--answer').slideToggle(500);
                $(this).parent().toggleClass('qa-rv-active');
            } else {
                let listItem = $(this).parents('.qa-page__list').find('.qa-page__item');
                listItem.each(function() {
                    $(this).removeClass('qa-rv-active');
                    $(this).find('.qa-page--answer').slideUp(500);
                })
                $(this).parent().find('.qa-page--answer').slideToggle(500);
                $(this).parent().toggleClass('qa-rv-active');
            }
        })

        // size size-prod--ct__measure
        $('.size-prod--ct').on('click', function() {
            $(this).parents('body').find('.size-prod--ct__measure').addClass('size-active');
            $("#wrapper").bind("wheel", function() {
                return false;
            });
        });

        $('.size-prod--ct__overlay').on('click', function() {
            $(this).parent().removeClass('size-active');
            $(this).parent().find('.size-prod--ct--details').removeClass('details-active');
            $("body").bind('scroll');
            $("#wrapper").unbind('wheel');
        })

        $('.size-prod--ct__measure .action-close').on('click', function() {
            $(this).parents('.size-prod--ct__measure').removeClass('size-active');
            $(this).parents('.size-prod--ct__measure').find('.size-prod--ct--details').removeClass('details-active');
            $("body").bind('scroll');
            $("#wrapper").unbind('wheel');
        })

        $('.size-prod--ct__measure--body .btn-buy-now').on('click', function() {
            $(this).parents('.size-prod--ct__measure').find('.size-prod--ct--details').addClass('details-active');
        });
        // box address
        $('.btn-address').on('click', function() {
            $(this).parents('body').find('.size-prod--ct__measure').addClass('size-active');
            $("#wrapper").bind("wheel", function() {
                return false;
            });
        });

        $('.size-prod--ct__overlay').on('click', function() {
            $(this).parent().removeClass('size-active');
            $(this).parent().find('.size-prod--ct--details').removeClass('details-active');
            $("body").bind('scroll');
            $("#wrapper").unbind('wheel');
        })

        $('.size-prod--ct__measure .action-close').on('click', function() {
            $(this).parents('.size-prod--ct__measure').removeClass('size-active');
            $(this).parents('.size-prod--ct__measure').find('.size-prod--ct--details').removeClass('details-active');
            $("body").bind('scroll');
            $("#wrapper").unbind('wheel');
        })

        $('.size-prod--ct__measure--body .btn-buy-now').on('click', function() {
            $(this).parents('.size-prod--ct__measure').find('.size-prod--ct--details').addClass('details-active');
        });


        // product detail
        $('.product-detail__color__input input[type=radio][name=color]').change(function() {
            var pro_dt_color = $(this).filter(':checked').val();
            // console.log(pro_dt_color);
            // $(this).parents('.product-detail__color').find('h4 span').text(pro_dt_color);
        });
        // End the js

        $(".list-related-products.owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            mouseDrag: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    dots: false,
                    margin: 15,
                },
                768: {
                    items: 3,
                    nav: false,
                    dots: false,
                },
                1200: {
                    items: 5,
                },
                1920: {
                    items: 5,
                },
            },
        });
        $(".sale-prod-slider.owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            mouseDrag: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    dots: false,
                    margin: 15,
                },
                768: {
                    items: 3,
                    nav: false,
                    dots: false,
                },
                1200: {
                    items: 5,
                },
                1920: {
                    items: 5,
                },
            },
        });
        $(".slider-ads.owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            dots: false,
            autoplay: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 2,
                    margin: 8,
                },
                600: {
                    items: 2,
                    margin: 8,
                },
                1000: {
                    items: 2,
                },
            },
        });
        $(".list-gallery.owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            mouseDrag: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 2,
                    margin: 8,
                },
                768: {
                    items: 3,
                    margin: 8,
                },
                1200: {
                    items: 5,
                },
                1920: {
                    items: 5,
                },
            },
        });
        $(".list-related-slide.owl-carousel").owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 1,
                    margin: 8,
                },
                768: {
                    items: 1,
                    margin: 8,
                },
            },
        });
        $(".e-magazine-new-wrapper.owl-carousel").owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            dots: false,
            autoplay: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    margin: 8,
                    dots: true,
                },
                768: {
                    items: 3,
                    nav: false,
                    dots: false,
                },
                1920: {
                    items: 4,
                },
            },
        });
        $(".e-magazine-list-products-new-prod-slider.owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            mouseDrag: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    dots: true,
                    margin: 15,
                },
                768: {
                    items: 3,
                    nav: false,
                    dots: false,
                },
                1200: {
                    items: 5,
                },
                1920: {
                    items: 5,
                },
            },
        });
        $(".news-detail-suggested-prod-slider.owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            autoplay: false,
            autoplayHoverPause: true,
            mouseDrag: false,
            autoplayTimeout: 7000,
            responsive: {
                1440: {
                    items: 4,
                    dots: false,
                },
                1024: {
                    items: 3,
                    dots: false,
                },
                0: {
                    items: 2,
                    nav: false,
                    dots: false,
                    margin: 8,
                },
            },
        });
        $(".product-maybe-liked__slider.owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            mouseDrag: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    margin: 15,
                },
                768: {
                    items: 2,
                    nav: false,
                    margin: 15,
                },
                1025: {
                    items: 3,
                },
                1200: {
                    items: 3,
                },
                1440: {
                    items: 5,
                },
            },
        });
        $(".nav-info-slider.owl-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="icon-ic_left-arrow"></i>',
                '<i class="icon-ic_right-arrow"></i>',
            ],
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            mouseDrag: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 1,
                    nav: false,
                },
            },
        });
        $(".add-to-cart a").click(function(e) {
            e.preventDefault();
            $(this).parents(".product").find(".list-size").toggleClass("open");
            $(".add-to-cart a")
                .not(this)
                .parents(".product")
                .find(".list-size")
                .removeClass("open");
        });
        /*  [ Tabs ]
                    - - - - - - - - - - - - - - - - - - - - */
        $(".exclusive-head li").click(function() {
            var tab_id = $(this).attr("data-tab");

            $(".exclusive-head li").removeClass("active");
            $(".exclusive-inner").removeClass("active");

            $(this).addClass("active");
            $(this)
                .parents(".exclusive-tabs")
                .find("#loading-bar-spinner")
                .css("display", "block");
            $("#" + tab_id).addClass("active active-hidden");
            setTimeout(function() {
                $("#loading-bar-spinner").css("display", "none");
                $("#" + tab_id).removeClass("active-hidden");
            }, 1000);
        });
        // $(".item-sub-pr").click(function () {
        //     $(this).toggleClass("active");
        //     $(this)
        //         .parents(".item-sub-list")
        //         .find(".item-sub-side")
        //         .slideToggle("fast");
        //     $(".item-sub-pr")
        //         .not(this)
        //         .parents(".item-sub-list")
        //         .find(".item-sub-side")
        //         .slideUp("fast");
        //     $(".item-sub-pr").not(this).removeClass("active");
        // });
        $(".item-side h4").click(function() {
            $(this).toggleClass("active");
            $(this).parents(".item-side").find(".sub-list-side").slideToggle("fast");
            // $(".item-side h4").parents(".item-side").not(this).removeClass("active");
        });

        $(".item-filter span").click(function() {
            $(this).parents(".item-filter").toggleClass("open");
            $(this)
                .parents(".item-filter")
                .find(".list-number-row")
                .toggleClass("open");
            // $('.item-filter span').not(this).parents('.item-filter').find('.list-number-row').removeClass('open');
        });

        $(".left-filter-recruit .search-filter").click(function() {
            $(this).parents(".left-filter-recruit").find("ul").toggleClass("open");
            $(".left-filter-recruit .search-filter")
                .not(this)
                .parents(".left-filter-recruit")
                .find("ul")
                .removeClass("open");
        });

        $("#big-image .item-zoom:eq(0)").nextAll().hide();
        $(".small-images img").click(function(e) {
            var index = $(this).index();
            $("#big-image .item-zoom").eq(index).show().siblings().hide();
        });

        // $( '#search-quick' ).blur( function() {
        //     $(this).parents('.search-form').removeClass( 'active' );
        // });
        $(document).mouseup(function(e) {
            var container = $(".right-header");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.find(".search-form").removeClass("active");
            }
        });

        $(".item-ft-mb h3").click(function() {
            $(this).parents(".item-ft-mb").toggleClass("active");
            $(this).parents(".item-ft-mb").find("ul").slideToggle("fast");
            $(".item-ft-mb h3")
                .not(this)
                .parents(".item-ft-mb")
                .find("ul")
                .slideUp("fast");
            $(".item-ft-mb h3")
                .not(this)
                .parents(".item-ft-mb")
                .removeClass("active");
        });

        $(".title-sidebar").click(function() {
            $(this).parents(".page-policy").find("ul").slideToggle("fast");
        });
        $(".sidebar-prod").click(function() {
            $(this)
                .parents(".box-products")
                .find(".list-side-mb")
                .toggleClass("open");
        });

        $(".list-color ul li").click(function(e) {
            e.preventDefault();
            $(this).parent().find('li').removeClass('checked');
            $(this).toggleClass('checked');
            if ($(this).parent().find('li').hasClass('checked')) {
                let img_front = $(this).attr('data-img-front');
                let img_back = $(this).attr('data-img-back');
                let product_url = $(this).attr('data-product-url');
                $(this).parents('.product').find('.thumb-product img').attr("src", img_front);
                $(this).parents('.product').find('.thumb-product img.hover-img').attr("src", img_back);
                $(this).parents('.product').find('.thumb-product a, .title-product a').attr('href', product_url);
                $(this).parents('.product').find('.btn-quick-shop').attr('data-product-id', $(this).attr('data-product-id'));
            }
        });

        // Check height slider product
        $('.pro__general .item').each(function(index, e) {
            $(this).find('.item-cat-product').each(function(index, e) {
                $(this).find('ul').attr('data-index', 'item-cat-' + index);
                $(this).find('ul').addClass('item-cat-' + index);
                // $(this).addClass('item-cat-' + index);
            });
        })

        $('.list-color span.widen').click(function() {
            $(this).parent().addClass('ul-check');
            // $(this).parent().append("<li class='color-check'></li> <li class='color-check'></li> <li class='color-check'></li> <li class='color-check'></li> <li class='color-check'></li> <li class='color-check'></li>");
            $(this).css("display", "none");
            $(this).parent().find('li:nth-of-type(n+6)').css('display', 'inherit');
            $(this).parent().find('span.collapse').css('display', 'block');

            // Tinh chieu cao list color
            var list_color_height = $(this).parent().height();
            if (list_color_height > 32) {
                $(this).parent().css({
                    'justify-content': 'flex-start'
                });
                var data_index = $(this).parents('.item-cat-product').find('.list-color ul').attr('data-index');
                $('.' + data_index).css({
                    'height': list_color_height,
                    'align-items': 'flex-start'
                });

            }
            // $(".list-color ul li").click(function () {
            //     $(this).toggleClass('checked')

            // });
        })

        $('.list-color span.collapse').click(function() {
            $(this).parent().removeClass('ul-check');
            $(this).css("display", "none");
            $(this).parent().find('li:nth-of-type(n+6)').css('display', 'none');
            $(this).parent().find('span.widen').css('display', 'block');
            $(this).parent().css({
                'justify-content': 'center'
            });

            console.log($('.ul-check').length);
            if ($('.ul-check').length == 0) {
                var data_index = $(this).parents('.item-cat-product').find('.list-color ul').attr('data-index');
                $('.' + data_index).css({
                    'height': 'auto'
                });
            }
        });
        // end

        $(".contact-form-wrapper button").click(function(e) {
            e.preventDefault();
            if ($("input.form-control").val() == "") {
                $(".list-success").hide();
                $(".list-error").show();
                $(".list-error").addClass("active");
                $(".list-error").html(
                    "<p><strong>Lỗi! </strong>Chưa nhập tên</p><p><strong>Lỗi! </strong>Chưa nhập tên</p>"
                );
                setTimeout(() => {
                    $(".list-error").hide();
                }, 3000);
            } else {
                $(".list-error").hide();
                $(".list-success").show();
                $(".list-success").addClass("active");
                $(".list-success").html(
                    '<p><i class="icon-ic_close"></i>Cảm ơn bạn đã liên hệ, chúng tôi sẽ trả lời bạn trong thời gian sớm nhất có thể</p>'
                );
            }
        });
        $(".list-success").click(function() {
            $(this).hide();
        });

        // The-js
        // search header
        $(".right-header .search-form .icon-search").click(function() {
            $(this).parent().toggleClass("active-ip");
            $(this).parents('body').toggleClass('over-hidden-tran');
            $('.overlay-quick-search').addClass('active');
        });
        $(".right-header .search-form-close, .overlay-quick-search").click(function() {
            $(this).parents(".search-form").removeClass("active-ip");
            $(this).parents('body').removeClass('over-hidden-tran');
            $('.suggest-search').css('display', 'none');
            $('.overlay-quick-search').removeClass('active');
        });


        // Tuấn 08/07/2022
        /*-----------------------
          [nav-bottom mobile close ]
        */

        $('.nav-bottom .action-close i').on('click', function(e) {
            $(this).parents('.sub-item-nav').removeClass('open');
        })

        var width = $(window).width();
        if (width < 992) {
            $('.list-recent > ul > li:not(:first-child)').wrapAll("<ul class='list-open' />");
            $('.list-recent > ul > li:first-child').click(function() {
                var parent = $(this).parent();
                parent.toggleClass('active');
                $(".list-open").slideToggle();
                // let list = $(this).parent().find('.add-strong');
                // list.each(function () {
                //     $(this).removeClass('add-strong');
                // })
            })
        }


        var width_my_order = $(window).width();
        if (990 < width_my_order && width_my_order < 1200) {
            $('.my-orders .list-recent > ul > li:not(:first-child)').wrapAll("<ul class='list-open' />");
            $('.my-orders .list-recent > ul > li:first-child').click(function() {
                var parent = $(this).parent();
                parent.toggleClass('active');
                $(".my-orders .list-open").slideToggle("fast");
            })
        }

        $('.btn-filter-news-remove').on('click', function () {
            $('.list-side .item-sub-list .field-cat').prop('checked', false);
            $('.list-side .item-sub-list .item-sub-title').removeClass('active');
            $(this).parents('form').submit();
        });

        $('.blog-table-of-content .scroll-to-step').on('click', function () {
            let tag = $(this).attr('data-tag');
            let name = $(this).attr('data-name');

            $([document.documentElement, document.body]).animate({
                scrollTop: $(tag + '[data-name='+ name +']').offset().top - 85
            }, 200);
        });

        $('.toggle-table-of-content').on('click', function () {
            let show = $(this).attr('data-show');

            if (show == 0) {
                $(this).text('[Ẩn]').attr('data-show', 1);
            } else {
                $(this).text('[Hiện]').attr('data-show', 0);
            }

            $(this).parents('.blog-table-of-content__inner').find('ul').slideToggle();
        });
    });
})(jQuery);

$(document).ready(function() {
    function $$(selector, context) {
        context = context || document;
        var elements = context.querySelectorAll(selector);
        return Array.prototype.slice.call(elements);
    }

    $(".external-directory>li").click(function() {
        $(this).find(".inline-directory").slideToggle(500);
        $(this).toggleClass('active-ct');
    });
    $(".search__content--ct-slider .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        items: 4,
        dots: true,
        responsive: {
            0: {
                dots: false,
                items: 2,
                margin: 16
            },
            651: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
    $(".content-recent-watch .owl-carousel").owlCarousel({
        loop: true,
        margin: 28,
        items: 3,
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 16,
                dots: false
            },
            541: {
                items: 3
            }
        }

    });
    $(".list-products.slider-pro__th.owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        navText: [
            '<i class="icon-ic_left-arrow"></i>',
            '<i class="icon-ic_right-arrow"></i>',
        ],
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        mouseDrag: false,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: false,
                margin: 15,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1920: {
                items: 4,
            },
        },
    });

    $(".slider-news .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        dots: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            },
            // breakpoint from 768 up
            768: {
                items: 2
            }
        }

    });

    // combo
    $(".slider-combo-trening .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        dots: false,
        autoplay: true,
    });

    $(".item-filter.filter-row").click(function() {

        $('body').addClass('over-hidden-tran');
        $(".box-overlay").addClass('show-box');
        setTimeout(function() {
            $('.modal-over').addClass('opa');
            $('.sidebar-prod.sidebar-prod-pc').addClass('right-to-left')

        }, 10);
    });

    $(".modal-over").click(function() {
        setTimeout(function() {
            $(".box-overlay").removeClass('show-box');
            // $("body").bind('scroll');
            // $("#wrapper").unbind('wheel');
            $('body').removeClass('over-hidden-tran');
        }, 400);
        setTimeout(function() {
            $('.sidebar-prod.sidebar-prod-pc').removeClass('right-to-left');
            $('.modal-over').removeClass('opa');
        }, 100);

    });

    $(".icofont-close-line").click(function() {
        setTimeout(function() {
            $(".box-overlay").removeClass('show-box');
            // $("body").bind('scroll');
            // $("#wrapper").unbind('wheel');
            $('body').removeClass('over-hidden-tran');
        }, 400);

        setTimeout(function() {
            $('.sidebar-prod.sidebar-prod-pc').removeClass('right-to-left');
            $('.modal-over').removeClass('opa');
        }, 100);


    });

    if ($(".fr-new-acc.fix-mg .list-color .item-color li")[0]) {
        $('.fr-new-acc.fix-mg .list-color .item-color li').unbind();
    }

    $('.over-visa .block-border').click(function() {
            $('.over-visa .block-border').removeClass('add-border');
            $(this).addClass('add-border');
        })
        // fix giới hạn input SĐT trang contact-us
    $('.fix-js-number').unbind('keyup change input paste').bind('keyup change input paste', function(e) {
        var $this = $(this);
        var val = $this.val();
        var valLength = val.length;
        var maxCount = $this.attr('maxlength');
        if (valLength > maxCount) {
            $this.val($this.val().substring(0, maxCount));
        }
    });

    // The collapse custom
    $('.page-combo .see-more-combo').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.combo__content--ct-slider').find('.item:nth-child(n+5)').css('display', 'block');
        $(this).parent().find('.collapse-combo').css('display', 'inline-block');
        $(this).css('display', 'none');
    });

    $('.page-combo .collapse-combo').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.combo__content--ct-slider').find('.item:nth-child(n+5)').css('display', 'none');
        $(this).parent().find('.see-more-combo').css('display', 'inline-block');
        $(this).css('display', 'none');
    });

    // [---------------fix filter product---------------]

    $('.item-sub-side label .item-sub-title').on('click', function() {
        // if($(this).hasClass('active')){
        //     $(this).toggleClass('active')
        // }else{        
        //     let item = $(this).parents('.item-sub-side').find('.item-sub-title');
        //     item.each(function(){
        //         $(this).removeClass('active');
        //     })

        //     $(this).toggleClass('active')
        // }
        $(this).toggleClass('active');
    });

    $(".item-sub-pr").click(function() {
        $(this).toggleClass('active');
        $(this).parent().find('.item-sub-side').slideToggle("fast");
    })

    $(document).on('click', '.quickshop-overlay', function() {
        hideQuickShopOverlay();
    });

    $(document).on('click', '.modal-quickshop .action-close', function() {
        $('.modal-quickshop.quickshop-active').removeClass('quickshop-active');
        $('body').removeClass('over-hidden-tran');
    });

    //account slider
    $(".account__info--list .owl-carousel").owlCarousel({

        margin: 24,
        dots: false,
        nav: false,
        autoplay: false,
        autoplayHoverPause: false,
        mouseDrag: false,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,
                margin: 8,
                loop: true,
            },
            768: {
                items: 2,
                margin: 24,
                loop: false,
            },
        },
    });

    // ------------------ show coupon input header cart

    $(document).on('click', '.voucher-ct-right', function() {
        $(this).parent().find('form').slideToggle();
        $(this).parent().toggleClass('active');
        $(this).parents('.sub-action--right').toggleClass('active-coupon');
    });

    $(".search-form-hd-content input").focusin(function() {
        $(".search-block-input").addClass('search-befor')
    });

    $(".search-form-hd-content input").focusout(function() {
        $(".search-block-input").removeClass('search-befor')
    });
    // $(".search-form-hd-content input").focus(function() {

    //     $(".search-block-input").toggleClass('search-befor')
    // });

    // seach khi nhập input

    $(".sub-action-map-search input").keyup(function() {
        _this = $(this);
        _this.parents('.sub-action--right').addClass('sub-map-act-n');
        search_val = _this.val().toUpperCase();
        search_ft_text = _this.parents('.sub-action--right').find('.sub-action--list .title-item-menu');
        search_ft_text.filter(function() {
            if ($(this).text().toUpperCase().indexOf(search_val) > -1) {
                $(this).parent().css('display', 'block')
            } else {
                $(this).parent().css('display', 'none')
            }
        })
    });

    $('#purchase_month').addClass('default_color').addClass('fw-400');
    $('#purchase_year').addClass('default_color').addClass('fw-400');
    $('#purchase_month').on('change', function() {
        var d = $('#purchase_month option').val();
        if (d) $('#purchase_month').addClass('main_color').removeClass('default_color').removeClass('fw-400');
        else $('#purchase_month').addClass('default_color').addClass('fw-400').removeClass('main_color');
    });

    $('#purchase_year').on('change', function() {
        var d = $('#purchase_year option').val();
        if (d) $('#purchase_year').addClass('main_color').removeClass('default_color').removeClass('fw-400');
        else $('#purchase_year').addClass('default_color').addClass('fw-400').removeClass('main_color');
    });
});