<main id="main" class="site-main">
    <style>
        .ui-state-default,
        .ui-widget-content .ui-state-default {
            display: block;
            padding: 0.2em;
            text-align: right;
            text-decoration: none;
            border: 1px solid #c5c5c5;
            background: #f6f6f6;
            font-weight: normal;
            color: #454545;
            border-radius: 0;
            width: auto;
            height: auto;
        }

        .ui-state-highlight,
        .ui-widget-content .ui-state-highlight {
            border: 1px solid #dad55e;
            background: #fffa90;
            color: #777620;
        }
    </style>
    <div class="breadcrumb breadcrumb-products">
        <div class="container">
            <ol class="breadcrumb__list br-none mr-center">
                <li class="breadcrumb__item"><a class="breadcrumb__link" title="Trang chủ" href="../view_tproject/index.php">Trang chủ</a></li>
                <li class="breadcrumb__item"><a class="breadcrumb__link" title="Đăng ký" href="index.php?act=dangky">Đăng ký</a></li>
            </ol>
        </div>
    </div>

    <section class="section-list-products mg-bottom-32 mg-bottom-40 fix-mb-sign-up">
        <div class="container">
            <div>
                <h1 class="rs-search txt-center"><span class="title-gradient">SIGN UP</span></h1>
            </div>
        </div>
    </section>
    <form enctype="application/x-www-form-urlencoded" name="frm_register" method="post" action="index.php?act=dangky">
        <section class="sign-in-sec">
            <div class="container">
                <div class="tbl-fr fix-mb">
                    <div class="fr-sign-in fr-sign-up">
                        <div class="form-register">
                            <h3 class="title-sign-in">Tạo tài khoản mới</h3>
                            <p class="text-justify">Tạo tài khoản để theo dõi đơn đặt hàng, quản lý danh sách
                                yêu thích và lưu thông tin thanh toán của bạn để thanh toán nhanh hơn. Nếu bạn
                                đã có tài khoản <a class="click-here" href="index.php?act=dangnhap">Bấm vào đây</a> để
                                đăng nhập.</p>
                            <input class="w-input-100" type="text" value="" name="customer_display_name" placeholder="Tên" name="user" required />
                            <input class="w-input-100" type="email" name="email" value="" placeholder="Email" required autocomplete="off" />
                            <input class="w-input-100" type="text" value="" name="tel" placeholder="Điện thoại" required />
                            <!-- ten , email, so dien thoai, dia chi, matkhau -->
                        </div>
                    </div>
                    <div class="fr-sign-in fr-sign-up">
                        <div class="form-register">
                            <textarea class="w-input-100" name="address" placeholder="Nhập địa chỉ" style="resize:none"></textarea>
                            <input class="w-input-100" type="password" value="" name="pass" placeholder="Mật khẩu" required autocomplete="off" />

                            <div class="fix-check-box">
                                <input type="checkbox" id="checkboxRegister_1" name="customer_agree" value="1">
                                <label>Đồng ý với các <a href="../thong-tin/chinh-sach-dieu-khoan.html" target="_blank">điều khoản</a> của T-Project</label>
                            </div>
                            <div class="fix-check-box">
                                <input type="checkbox" id="checkboxRegister_2" value="1" name="customer_subscribe">
                                <label>Đăng ký nhận bản tin</label>
                            </div>
                            <div class="btn-sub-sign">
                                <!-- <button class="btn btn-sign-in fix-btn-sign-up" type="submit">ĐĂNG KÝ</button> -->
                                <input type="submit" class="btn btn-sign-in fix-btn-sign-up" value="ĐĂNG KÝ" name="dangky">

                            </div>
                            <br>
                            <?php
                            if (isset($thongbao) && ($thongbao != "")) {
                                echo $thongbao;
                            }
                            ?>
                        </div>
                    </div>
                    <div class="fr-new-acc sign-up">
                        <img src="../img/384077600_858296095718233_8365477193856211933_n.jpg" alt="Đăng ký" />
                    </div>
                </div>
            </div>
        </section>
    </form>

    <!-- WIDGET GALLERY -->

</main>