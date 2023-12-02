<main id="main" class="site-main"> <?php extract($sanpham); ?>

    <div class="breadcrumb breadcrumb-products">
        <div class="container">
            <ol class="breadcrumb__list br-none">
                <li class="breadcrumb__item"><a class="breadcrumb__link" title="Trang chủ" href="index.php">Trang chủ</a></li>
                <li class="breadcrumb__item"><a class="breadcrumb__link" title="Tất cả sản phẩm" href="../danh-muc/new-all.html">Tất cả sản phẩm</a></li>
                <li class="breadcrumb__item"><a class="breadcrumb__link" title="Áo sơ mi Khaki Regular fit" href="#"><?php echo $sanpham['name']; ?></a>
                </li>
            </ol>
        </div>
    </div>

    <div class="product-detail">
        <div class="container">
            <div class="product-detail__content d-flex">
                <div class="product-detail__content--left use-img-pc">
                    <div class="pro__detail--list-img d-flex">
                        <div class="item-cat-product">
                            <img src="../img/<?php echo $sanpham['image']; ?>" alt="<?php echo $sanpham['name']; ?>" class="lazy" data-index="1" />
                        </div>
                        <div class="item-cat-product">
                            <img src="../img/<?php echo $sanpham['img']; ?>" alt="fuck" class="lazy" data-index="2" />
                        </div>

                    </div>
                </div>

                <div class="product-detail__conttent--right">
                    <div class="product-detail__information">
                        <h1><?php echo $sanpham['name']; ?></h1>
                        <p style="margin-top: 10px;">Số lượng:
                            <span><?php echo $sanpham['soluong']; ?></span>
                        </p>
                        <div class="product-detail__price" style="margin-top: 0px">
                            <b><?php echo $sanpham['price']; ?></b>
                        </div>
                        <div class="product-detail-divider"></div>
                        <div class="product-detail__color">
                            <h4>Màu sắc: <span></span> </h4>
                            <div class="product-detail__color__input">
                                <label style="background: url(../img/<?php echo $sanpham['color'];  ?>)">
                                    <a href="#" onclick="window.location.href='#';">
                                        <input type="radio" name="color" value="048" checked="checked" /><span></span>
                                    </a>
                                </label>

                            </div>
                        </div>
                        <div class="product-detail__size">
                            <div class="product-detail__size__input">
                                <?php 
                                ?>
                                <label class="">
                                    <input type="radio" name="size" value="s" data-product-id="5582" data-product-sub-sku="1710E40580040022" data-product-sub-id="21127" />
                                    <span>s</span>
                                </label>
                                <label class="">
                                    <input type="radio" name="size" value="m" data-product-id="5582" data-product-sub-sku="1720E40580040022" data-product-sub-id="21129" />
                                    <span>m</span>
                                </label>
                                <label class="">
                                    <input type="radio" name="size" value="l" data-product-id="5582" data-product-sub-sku="1730E40580040022" data-product-sub-id="21131" />
                                    <span>l</span>
                                </label>
                                <label class="">
                                    <input type="radio" name="size" value="xl" data-product-id="5582" data-product-sub-sku="1740E40580040022" data-product-sub-id="21133" />
                                    <span>xl</span>
                                </label>
                                <label class="">
                                    <input type="radio" name="size" value="xxl" data-product-id="5582" data-product-sub-sku="1750E40580040022" data-product-sub-id="21135" />
                                    <span>xxl</span>
                                </label>
                            </div>
                            <a data-fancybox data-src="#table-size-product" href="javascript:void(0);">
                                <span class="icon-ic_rule-1"></span>
                                <span class="text">Kiểm tra size của bạn</span>
                            </a>
                            <div class="table-size-product" style="display: none" id="table-size-product">
                                <div class="title-table-size">BẢNG TƯ VẤN SIZE</div>
                                <div class="exclusive-tabs">
                                    <div class="exclusive-head">
                                        <ul>
                                            <li class="exclusive-tab active">Nam</li>
                                        </ul>
                                    </div>
                                </div>
                                <table class="table-pc">
                                    <thead>
                                        <tr>
                                            <td class="title-table" colspan="7">
                                                SIZE ÁO
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>STT</strong></td>
                                            <td><strong>TÊN GỌI/SIZE</strong></td>
                                            <td><strong>S</strong></td>
                                            <td><strong>M</strong></td>
                                            <td><strong>L</strong></td>
                                            <td><strong>XL</strong></td>
                                            <td><strong>XXL</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Cổ</td>
                                            <td>36</td>
                                            <td>38</td>
                                            <td>40</td>
                                            <td>42</td>
                                            <td>44</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Vai</td>
                                            <td>44</td>
                                            <td>45</td>
                                            <td>46</td>
                                            <td>47</td>
                                            <td>48</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Ngực</td>
                                            <td>90</td>
                                            <td>94</td>
                                            <td>98</td>
                                            <td>102</td>
                                            <td>106</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Eo</td>
                                            <td>88</td>
                                            <td>92</td>
                                            <td>96</td>
                                            <td>100</td>
                                            <td>104</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <td class="title-table" colspan="9">
                                                SIZE QUẦN
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>STT</strong></td>
                                            <td><strong>TÊN GỌI/SIZE</strong></td>
                                            <td><strong>S(29)</strong></td>
                                            <td><strong>M(30)</strong></td>
                                            <td><strong>M(2)</strong></td>
                                            <td><strong>L(31)</strong></td>
                                            <td><strong>L(2)</strong></td>
                                            <td><strong>XL(32)</strong></td>
                                            <td><strong>XXL(33)</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Vòng Eo</td>
                                            <td>76</td>
                                            <td>80</td>
                                            <td>84</td>
                                            <td>84</td>
                                            <td>88</td>
                                            <td>86</td>
                                            <td>90</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Vòng Mông</td>
                                            <td>91</td>
                                            <td>95</td>
                                            <td>95</td>
                                            <td>99</td>
                                            <td>99</td>
                                            <td>104</td>
                                            <td>109</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Cân nặng (kg)</td>
                                            <td>62 - 68</td>
                                            <td>68 - 70</td>
                                            <td>68 - 70</td>
                                            <td>70 - 74</td>
                                            <td>70 - 74</td>
                                            <td>74 - 78</td>
                                            <td>78 - 82</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Chiều Cao (cm)</td>
                                            <td>162 - 168</td>
                                            <td>168 - 172</td>
                                            <td>168 - 172</td>
                                            <td>172 - 176</td>
                                            <td>172 - 176</td>
                                            <td>176 - 180</td>
                                            <td>180 - 184</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="table-mobile">
                                    <thead>
                                        <tr>
                                            <td class="title-table" colspan="5">
                                                SIZE ÁO
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>SIZE</strong></td>
                                            <td><strong>Cổ</strong></td>
                                            <td><strong>Vai</strong></td>
                                            <td><strong>Ngực</strong></td>
                                            <td><strong>Eo</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>S</td>
                                            <td>36</td>
                                            <td>44</td>
                                            <td>90</td>
                                            <td>88</td>
                                        </tr>
                                        <tr>
                                            <td>M</td>
                                            <td>38</td>
                                            <td>45</td>
                                            <td>94</td>
                                            <td>92</td>
                                        </tr>
                                        <tr>
                                            <td>L</td>
                                            <td>40</td>
                                            <td>46</td>
                                            <td>98</td>
                                            <td>96</td>
                                        </tr>
                                        <tr>
                                            <td>XL</td>
                                            <td>42</td>
                                            <td>47</td>
                                            <td>102</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>XXL</td>
                                            <td>44</td>
                                            <td>48</td>
                                            <td>106</td>
                                            <td>104</td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <td class="title-table" colspan="5">
                                                SIZE QUẦN
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>SIZE</strong></td>
                                            <td><strong>Vòng Eo</strong></td>
                                            <td><strong>Vòng Mông</strong></td>
                                            <td><strong>Cân nặng(kg)</strong></td>
                                            <td>Chiều Cao (cm)</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>S(29)</td>
                                            <td>76</td>
                                            <td>91</td>
                                            <td>62-68</td>
                                            <td>162 - 168</td>
                                        </tr>
                                        <tr>
                                            <td>M(30)</td>
                                            <td>80</td>
                                            <td>95</td>
                                            <td>68-70</td>
                                            <td>168</td>
                                        </tr>
                                        <tr>
                                            <td>L(31)</td>
                                            <td>84</td>
                                            <td>99</td>
                                            <td>70-74</td>
                                            <td>172-176</td>
                                        </tr>
                                        <tr>
                                            <td>XL(32)</td>
                                            <td>86</td>
                                            <td>104</td>
                                            <td>74-78</td>
                                            <td>176-180</td>
                                        </tr>
                                        <tr>
                                            <td>XXL(33)</td>
                                            <td>90</td>
                                            <td>109</td>
                                            <td>78-82</td>
                                            <td>180-184</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table class="table-mobile">
                                    <thead>
                                        <tr>
                                            <td class="title-table" colspan="5">
                                                SIZE GIÀY
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>TÊN GỌI/SIZE</td>
                                            <td>Chiều dài bàn chân</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>39</td>
                                            <td>20,5</td>
                                        </tr>
                                        <tr>
                                            <td>40</td>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <td>41</td>
                                            <td>26,9</td>
                                        </tr>
                                        <tr>
                                            <td>42</td>
                                            <td>27,7</td>
                                        </tr>
                                        <tr>
                                            <td>43</td>
                                            <td>28,5</td>
                                        </tr>
                                        <tr>
                                            <td>44</td>
                                            <td>29,4</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="product-detail-divider"></div>
                        <div class="product-detail__quantity">
                            <h4>Số lượng:</h4>
                            <div class="product-detail__quantity-input">
                                <input type="number" value="1" name="product_sub_quantity" data-product-id="5582" />
                                <div class="product-detail__quantity--decrease">
                                    -
                                </div>
                                <div class="product-detail__quantity--increase">
                                    +
                                </div>
                            </div>
                        </div>
                        <div class="product-detail__actions">
                            <button class="btn btn--large btn-add-to-cart" data-product-id="5582">
                                Thêm vào giỏ hàng
                            </button>
                            <a href="javascript:void(0)">
                                <button class="btn btn--large btn--outline purchase" data-product-id="5582">
                                    Mua ngay
                                </button>
                            </a>
                            <button class="btn btn--large btn--outline btn--wishlist" data-product-id="5582" data-type="0">
                                <span class="icon-ic_heart"></span>
                            </button>

                        </div>

                        <div class="product-detail-divider"></div>
                        <div class="product-detail__tab">
                            <div class="product-detail__tab-header">
                                <div class="tab-item">
                                    <h3 class="title">Giới thiệu</h3>
                                    <div class="tab-content">
                                        <?php echo $sanpham['mota']; ?>


                                    </div>
                                </div>

                                <div class="tab-item">
                                    <h3 class="title">Hướng dẫn bảo quản</h3>
                                    <div class="tab-content">
                                        <p><img alt="" src="../pubcdn.ivymoda.com/files/news/2023/08/17/947010dddda6b609d81189037d1a22d3.jpg" style="width: 850px; height: 250px;" /></p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="pro__detail--list-img-popup">
                    <div class="pro-details-overlay"></div>
                    <div class="product-detail__gallery">
                        <div class="product-gallery__slide">
                            <div class="product-gallery__slide--big">
                                <div class="swiper-container swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="item-zoom" data-image="../img/<?php echo $sanpham['image']; ?>">
                                                <img src="../img/<?php echo $sanpham['image']; ?>" alt="Áo sơ mi Khaki Regular fit MS 17E4058" class="lazy" />
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="item-zoom" data-image="../img/<?php echo $sanpham['img']; ?>">
                                                <img src="../img/<?php echo $sanpham['img']; ?>" alt="Áo sơ mi Khaki Regular fit MS 17E4058" class="lazy" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="swiper-nav-prev">
                                    <span class="icon-ic_left-arrow"></span>
                                </div>
                                <div class="swiper-nav-next">
                                    <span class="icon-ic_right-arrow"></span>
                                </div>
                            </div>
                            <div class="product-gallery__slide--small">
                                <div class="swiper-container swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img src="../img/<?php echo $sanpham['image']; ?>" alt="Áo sơ mi Khaki Regular fit MS 17E4058" class="lazy" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="../img/<?php echo $sanpham['img']; ?>" alt="Áo sơ mi Khaki Regular fit MS 17E4058" class="lazy" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Banner Not Content -->
    <style>
        .container_comment {
            margin-left: 290px;
        }

        .comment-wrapper .panel-body {
            max-height: 650px;
            overflow: auto;

        }

        .form-control {
            border: 1px solid #8e8e8e;

        }

        .comment-wrapper .media-list .media img {
            width: 64px;
            height: 64px;
            border: 2px solid #dcdcdc;
        }

        .comment-wrapper .media-list .media {
            border-bottom: 1px dashed #d7d7d7;
            margin-bottom: 25px;
        }

        .pull-left {
            margin-right: 15px;
        }
    </style>
    <div class="container_comment">
        <div class="row bootstrap snippets bootdeys">
            <div class="col-md-8 col-sm-12">
                <div class="comment-wrapper">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            Bình luận
                        </div>
                        <form action="index.php?act=sanphamct&idsp=<?= $id ?>" class="panel-body" method="post">
                            <textarea class="form-control" placeholder="Viết bình luận..." rows="3" name="noidung" required></textarea>
                            <br>
                            <input type="hidden" name="idpro" value="<?= $id ?>">
                            <input type="submit" name="guibinhluan" class="btn btn-info pull-right" value="Post">
                            <div class="clearfix"></div>
                            <hr>
                            <ul class="media-list">
                                <?php
                                foreach ($binhluan as $value) {
                                    extract($value);
                                    $date = $ngaybinhluan;
                                    $new_date = date("d-m-Y", strtotime($date));
                                ?>
                                    <li class="media">
                                        <a href="#" class="pull-left">
                                            <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">
                                        </a>
                                        <div class="media-body">
                                            <span class="text-muted pull-right">
                                                <small class="text-muted"><?php echo $new_date; ?></small>
                                            </span>
                                            <strong class="text-success">@<?php echo $value['user']; ?></strong>
                                            <p>
                                                <?php echo $value['noidung']; ?>
                                            </p>
                                        </div>
                                    </li>
                                <?php } ?>

                            </ul>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Related Product -->

    <!-- RECENT WATCH  -->
    <!-- .home-sale-prod -->
    <section class="home-sale-prod product__ct--content mg-bt-64">
        <div class="container">
            <div class="top__content-prod">
                <h3 class="title-section">
                    <span class="title-gradient">Recent View</span>
                </h3>
                <!---->
            </div>
            <div class="exclusive-tabs">
                <div class="pro__general slider__pa_nav owl-carousel">
                    <?php foreach ($sanpham_cungloai as $sp) {
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


    <!-- BANNER GALLERY  -->

    <!-- BANNER SUBSCRIBE  -->

    <div class="list-showroom"></div>
</main>