<main id="main" class="site-main">
    <!-- SLIDE  -->
    <section class="home-banner bg-before bg-before_02 mg-bt-64">
        <div class="slider-banner owl-carousel">
            <div class="item-banner">
                <a href="lookbook/urban-refined-collection-metagent-f-w-2023-9.html">
                    <img src="../pubcdn.ivymoda.com/files/news/2023/10/30/8880403ebb26743e2c4f9bb76b922766.jpg" alt="slider" class="banner-pc" />
                    <div class="info-banner-home-ct">
                        <h2 class="title-banner-home"></h2>
                    </div>
                </a>
            </div>
            <div class="item-banner">
                <a href="danh-muc/new-all.html">
                    <img src="../pubcdn.ivymoda.com/files/news/2023/10/30/2858bdf11fcbb7be9687a8bc7e8d3536.jpg" alt="slider" class="banner-pc" />
                    <div class="info-banner-home-ct">
                        <h2 class="title-banner-home"></h2>
                    </div>
                </a>
            </div>
            <div class="item-banner">
                <a href="danh-muc/sale-thang-10-0310.html">
                    <img src="../pubcdn.ivymoda.com/files/news/2023/10/03/6ec1f0523de6ac27cba6eff1b574f1ec.jpg" alt="slider" class="banner-pc" />
                    <div class="info-banner-home-ct">
                        <h2 class="title-banner-home"></h2>
                    </div>
                </a>
            </div>
        </div>
        <div class="banner__number-nav">
            <span class="banner__number"></span>
            <span class="banner__hori">/</span>
            <span class="banner__count"></span>
        </div>
    </section>


    <!-- NEW ARRIVAL  -->
    <!-- .home-sale-prod -->
    <section class="home-sale-prod product__ct--content mg-bt-64">
        <div class="container">
            <div class="top__content-prod">
                <h3 class="title-section">
                    <span class="title-gradient">New Arrival</span>
                </h3>
                <!-- <a href=""></a> -->
            </div>
            <div class="exclusive-tabs">
                <div class="pro__general slider__pa_nav owl-carousel">
                    <?php foreach ($spnew as $sp) {
                        extract($sp);
                        echo '
                        <div class="item">
                        <div class="item-cat-product">
                            <div class="product">
                                <div class="info-attr--pro">
                                    <div class="info-ticket">NEW</div>
                                    <div class="info-size d-none">
                                        <img src="https://pubcdn.ivymoda.com/metagent/assets/images/icon-svg/TShirt.svg" alt="size">S
                                    </div>
                                </div>

                                <div class="thumb-product">
                                    <a href="?act=chitietsanpham&idsp=' . $id . '">
                                        <img src="../img/' . $image . '" alt="Quần Jeans dáng Slim MS 25E3842" class="lazy" />
                                        <img src="../img/' . $img . '" alt="Quần Jeans dáng Slim MS 25E3842" class="hover-img lazy" />
                                    </a>
                                    <button class="btn btn-quick-shop quick-shop-pc" data-product-id="5650">Mua
                                        Ngay</button>
                                    <button class="btn btn-quick-shop quick-shop-mb" data-product-id="5650">
                                        <i class="icon-bag-meta"></i>
                                    </button>
                                </div>
                                <div class="info-product">
                                    <h3 class="title-product">
                                        <a href="?act=chitietsanpham&idsp=' . $id . '">' . $name . '</a>
                                    </h3>
                                    <div class="price-product">
                                         <ins>' . $price . ' đ</ins>
                                    </div>
                                    <div class="list-color">
                                        <ul>
                                            <li data-img-front="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/ce120c66910e1f2da6cb01506d90b6a9.jpg" data-img-back="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/0e3dc950fd152ee73827c5c9361afac2.jpg" data-product-id="5650" data-product-url="san-pham/quan-jeans-dang-slim-ms-25e3842-5650.html" class="checked">
                                                <img src="../pubcdn.ivymoda.com/metagent/assets/images/color/041.png" alt="041" class="lazy" />
                                            </li>
                                            <span class="collapse">thu gọn</span>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>';
                    } ?>


                </div>
            </div>
            <!-- exclusive-tabs -->
        </div>
        <!-- .container-->
    </section>
    <!-- .End home-sale-prod -->


    <!-- BANNER SHOES  -->

    <!-- TOP TRENDING  -->

    <!-- BANNER HAT  -->

    <!-- SALE UP TO  -->

    <!-- BANNER BEACH  -->

    <!-- BRILLIANT SUMMER  -->
    <section class="about-prod-block about-prod-block__bg mg-bt-64">
        <div class="about-prod-block__content d-flex">
            <div class="about-prod-block--left" style="background-image: url(../img/banner_01.webp);">
                <div class="about-prod-block--left__content">
                    <span class="img-block-text__name">
                    </span>
                    <h3 class="about-prod--title">
                        Urban Refined Collection
                    </h3>
                    <a href="lookbook/urban-refined-collection-9.html" class="btn btn-buy-now ">Khám phá
                        ngay</a>
                </div>
            </div>
            <div class="about-prod-block--right">
                <div class="pro__general about-prod-block-slider owl-carousel">
                    <?php foreach ($spbest as $value) {
                        extract($value);
                        echo '
                        <div class="item">
                        <div class="item-cat-product">
                            <div class="product">
                                <div class="info-attr--pro">
                                    <div class="info-ticket">NEW</div>
                                    <div class="info-size d-none">
                                        <img src="https://pubcdn.ivymoda.com/metagent/assets/images/icon-svg/TShirt.svg" alt="size">S
                                    </div>
                                </div>

                                <div class="thumb-product">
                                    <a href="?act=chitietsanpham&idsp=' . $id . '">
                                        <img src="../img/' . $image . '" alt="Quần Jeans dáng Slim MS 25E3842" class="lazy" />
                                        <img src="../img/' . $img . '" alt="Quần Jeans dáng Slim MS 25E3842" class="hover-img lazy" />
                                    </a>
                                    <button class="btn btn-quick-shop quick-shop-pc" data-product-id="5650">Mua
                                        Ngay</button>
                                    <button class="btn btn-quick-shop quick-shop-mb" data-product-id="5650">
                                        <i class="icon-bag-meta"></i>
                                    </button>
                                </div>
                                <div class="info-product">
                                    <h3 class="title-product">
                                        <a href="?act=chitietsanpham&idsp=' . $id . '">' . $name . '</a>
                                    </h3>
                                    <div class="price-product">
                                         <ins>' . $price . ' đ</ins>
                                    </div>
                                    <div class="list-color">
                                        <ul>
                                            <li data-img-front="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/ce120c66910e1f2da6cb01506d90b6a9.jpg" data-img-back="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/0e3dc950fd152ee73827c5c9361afac2.jpg" data-product-id="5650" data-product-url="san-pham/quan-jeans-dang-slim-ms-25e3842-5650.html" class="checked">
                                                <img src="../pubcdn.ivymoda.com/metagent/assets/images/color/041.png" alt="041" class="lazy" />
                                            </li>
                                            <span class="collapse">thu gọn</span>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ';
                    }

                    ?>
                    <!-- <div class="item">
                        <div class="item-cat-product">
                            <div class="product">
                                <div class="info-attr--pro">
                                    <div class="info-ticket info-ticket--sale">Sale -30%</div>
                                    <div class="info-size d-none">
                                        <img src="https://pubcdn.ivymoda.com/metagent/assets/images/icon-svg/TShirt.svg" alt="size">S
                                    </div>
                                </div>

                                <div class="thumb-product">
                                    <a href="san-pham/quan-sooc-thun-cap-chun-ms-20e3546-1145.html">
                                        <img src="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/b44fcb71411e75021fa503d4fa783dd5.jpg" alt="Quần sooc thun cạp chun MS 20E3546" class="lazy" />
                                        <img src="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/8bec68f72430092649d9ac1fd10433fc.jpg" alt="Quần sooc thun cạp chun MS 20E3546" class="hover-img lazy" />
                                    </a>
                                    <button class="btn btn-quick-shop quick-shop-pc" data-product-id="1145">Mua
                                        Ngay</button>
                                    <button class="btn btn-quick-shop quick-shop-mb" data-product-id="1145">
                                        <i class="icon-bag-meta"></i>
                                    </button>
                                </div>
                                <div class="info-product">
                                    <h3 class="title-product">
                                        <a href="san-pham/quan-sooc-thun-cap-chun-ms-20e3546-1145.html">Quần
                                            sooc thun cạp chun MS 20E3546</a>
                                    </h3>
                                    <div class="price-product">
                                        <ins>455.000đ</ins>
                                        <del>650.000đ</del>
                                    </div>
                                    <div class="list-color">
                                        <ul>
                                            <li data-img-front="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/01/10/0ba98439e5f60517e38b1b17892c066e.jpg" data-img-back="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/01/10/248058470afa14400a0c3c954841cfbc.jpg" data-product-id="1144" data-product-url="https://metagent.vn/san-pham/quan-sooc-thun-cap-chun-ms-20e3546-1144">
                                                <img src="../pubcdn.ivymoda.com/metagent/assets/images/color/003.png" alt="003" class="lazy" />
                                            </li>
                                            <li data-img-front="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/b44fcb71411e75021fa503d4fa783dd5.JPG" data-img-back="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/8bec68f72430092649d9ac1fd10433fc.JPG" data-product-id="1145" data-product-url="https://metagent.vn/san-pham/quan-sooc-thun-cap-chun-ms-20e3546-1145" class="checked">
                                                <img src="../pubcdn.ivymoda.com/metagent/assets/images/color/049.png" alt="049" class="lazy" />
                                            </li>
                                            <li data-img-front="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/01/10/d931bac6dd61edc275d3497d36703f48.jpg" data-img-back="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/01/10/f6ba0fe61fe85d12822b6315c62c31d9.jpg" data-product-id="1146" data-product-url="https://metagent.vn/san-pham/quan-sooc-thun-cap-chun-ms-20e3546-1146">
                                                <img src="../pubcdn.ivymoda.com/metagent/assets/images/color/h03.png" alt="h03" class="lazy" />
                                            </li>
                                            <span class="collapse">thu gọn</span>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-cat-product">
                            <div class="product">
                                <div class="info-attr--pro">
                                    <div class="info-ticket">NEW</div>
                                    <div class="info-size d-none">
                                        <img src="https://pubcdn.ivymoda.com/metagent/assets/images/icon-svg/TShirt.svg" alt="size">S
                                    </div>
                                </div>

                                <div class="thumb-product">
                                    <a href="san-pham/hoodie-chu-m-ms-59e3727-5338.html">
                                        <img src="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/8b693d9d843286e318095b65641693f1.jpg" alt="Hoodie chữ M MS 59E3727" class="lazy" />
                                        <img src="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/2053f9cedba4fa71000ddae25a9a1db7.jpg" alt="Hoodie chữ M MS 59E3727" class="hover-img lazy" />
                                    </a>
                                    <button class="btn btn-quick-shop quick-shop-pc" data-product-id="5338">Mua
                                        Ngay</button>
                                    <button class="btn btn-quick-shop quick-shop-mb" data-product-id="5338">
                                        <i class="icon-bag-meta"></i>
                                    </button>
                                </div>
                                <div class="info-product">
                                    <h3 class="title-product">
                                        <a href="san-pham/hoodie-chu-m-ms-59e3727-5338.html">Hoodie chữ M MS
                                            59E3727</a>
                                    </h3>
                                    <div class="price-product">
                                        <ins>950.000đ</ins>
                                    </div>
                                    <div class="list-color">
                                        <ul>
                                            <li data-img-front="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/8b693d9d843286e318095b65641693f1.JPG" data-img-back="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/2053f9cedba4fa71000ddae25a9a1db7.JPG" data-product-id="5338" data-product-url="https://metagent.vn/san-pham/hoodie-chu-m-ms-59e3727-5338" class="checked">
                                                <img src="../pubcdn.ivymoda.com/metagent/assets/images/color/001.png" alt="001" class="lazy" />
                                            </li>
                                            <span class="collapse">thu gọn</span>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-cat-product">
                            <div class="product">
                                <div class="info-attr--pro">
                                    <div class="info-ticket">NEW</div>
                                    <div class="info-size d-none">
                                        <img src="https://pubcdn.ivymoda.com/metagent/assets/images/icon-svg/TShirt.svg" alt="size">S
                                    </div>
                                </div>

                                <div class="thumb-product">
                                    <a href="san-pham/ao-len-det-jacquad-ms-58e4100-5585.html">
                                        <img src="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/ef8f94616fb1e411e05e9f1ddc8cf172.jpg" alt="Áo len dệt Jacquad MS 58E4100" class="lazy" />
                                        <img src="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/da447da94f59ea1cdbe07a207302a77d.jpg" alt="Áo len dệt Jacquad MS 58E4100" class="hover-img lazy" />
                                    </a>
                                    <button class="btn btn-quick-shop quick-shop-pc" data-product-id="5585">Mua
                                        Ngay</button>
                                    <button class="btn btn-quick-shop quick-shop-mb" data-product-id="5585">
                                        <i class="icon-bag-meta"></i>
                                    </button>
                                </div>
                                <div class="info-product">
                                    <h3 class="title-product">
                                        <a href="san-pham/ao-len-det-jacquad-ms-58e4100-5585.html">Áo len dệt
                                            Jacquad MS 58E4100</a>
                                    </h3>
                                    <div class="price-product">
                                        <ins>1.390.000đ</ins>
                                    </div>
                                    <div class="list-color">
                                        <ul>
                                            <li data-img-front="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/ef8f94616fb1e411e05e9f1ddc8cf172.JPG" data-img-back="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/da447da94f59ea1cdbe07a207302a77d.JPG" data-product-id="5585" data-product-url="https://metagent.vn/san-pham/ao-len-det-jacquad-ms-58e4100-5585" class="checked">
                                                <img src="../pubcdn.ivymoda.com/metagent/assets/images/color/041.png" alt="041" class="lazy" />
                                            </li>
                                            <span class="collapse">thu gọn</span>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-cat-product">
                            <div class="product">
                                <div class="info-attr--pro">
                                    <div class="info-ticket">NEW</div>
                                    <div class="info-size d-none">
                                        <img src="https://pubcdn.ivymoda.com/metagent/assets/images/icon-svg/TShirt.svg" alt="size">S
                                    </div>
                                </div>

                                <div class="thumb-product">
                                    <a href="san-pham/set-ao-hoodie-ni-va-quan-ms-78e3626-5125.html">
                                        <img src="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/288726945c56c140074c40628255b16d.jpg" alt="Set áo hoodie nỉ và quần MS 78E3626" class="lazy" />
                                        <img src="../pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/0419cd404f004dab4f5288a41845a2f9.jpg" alt="Set áo hoodie nỉ và quần MS 78E3626" class="hover-img lazy" />
                                    </a>
                                    <button class="btn btn-quick-shop quick-shop-pc" data-product-id="5125">Mua
                                        Ngay</button>
                                    <button class="btn btn-quick-shop quick-shop-mb" data-product-id="5125">
                                        <i class="icon-bag-meta"></i>
                                    </button>
                                </div>
                                <div class="info-product">
                                    <h3 class="title-product">
                                        <a href="san-pham/set-ao-hoodie-ni-va-quan-ms-78e3626-5125.html">Set áo
                                            hoodie nỉ và quần MS 78E3626</a>
                                    </h3>
                                    <div class="price-product">
                                        <ins>2.680.000đ</ins>
                                    </div>
                                    <div class="list-color">
                                        <ul>
                                            <li data-img-front="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/12/15/02bd5a8383a243395fb02882c6b8bfb1.jpg" data-img-back="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/12/15/9f8b8a5704abe98138b294aa31554179.jpg" data-product-id="5124" data-product-url="https://metagent.vn/san-pham/set-ao-hoodie-ni-va-quan-ms-78e3626-5124">
                                                <img src="../pubcdn.ivymoda.com/metagent/assets/images/color/002.png" alt="002" class="lazy" />
                                            </li>
                                            <li data-img-front="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/288726945c56c140074c40628255b16d.JPG" data-img-back="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/10/30/0419cd404f004dab4f5288a41845a2f9.JPG" data-product-id="5125" data-product-url="https://metagent.vn/san-pham/set-ao-hoodie-ni-va-quan-ms-78e3626-5125" class="checked">
                                                <img src="../pubcdn.ivymoda.com/metagent/assets/images/color/024.png" alt="024" class="lazy" />
                                            </li>
                                            <li data-img-front="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/12/07/e823771b6e56c6870572ca8fb13bca8d.jpg" data-img-back="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/12/07/3f36791fb21081e627962bf03b8fbf6e.jpg" data-product-id="5126" data-product-url="https://metagent.vn/san-pham/set-ao-hoodie-ni-va-quan-ms-78e3626-5126">
                                                <img src="../pubcdn.ivymoda.com/metagent/assets/images/color/049.png" alt="049" class="lazy" />
                                            </li>
                                            <span class="collapse">thu gọn</span>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>


    <!-- BEST SELLER  -->

    <!-- BANNER NIGGA  -->

    <!-- VIDEO PROMOTION  -->

    <!-- BANNER SHOES  -->

    <!-- BANNER BAG  -->

    <!-- CATEGORIES  -->

    <!-- FESTIVAL  -->

    <!-- BANNER JACKET  -->

    <!-- BANNER GALLERY  -->

    <!-- BANNER SUBSCRIBE  -->

    <!-- CONTENT -->

</main>