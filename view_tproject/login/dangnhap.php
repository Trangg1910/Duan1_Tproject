<main id="main" class="site-main">
    <div class="breadcrumb breadcrumb-products">
        <div class="container">
            <ol class="breadcrumb__list br-none">
                <li class="breadcrumb__item"><a class="breadcrumb__link" title="Trang chủ" href="../view_tproject/index.php">Trang chủ</a></li>
                <li class="breadcrumb__item"><a class="breadcrumb__link" title="Đăng nhập" href="index.php?act=dangnhap">Đăng nhập</a></li>
            </ol>
        </div>
    </div>

    <section class="section-list-products mg-bottom-32">
        <div class="container">
            <div>
                <h1 class="rs-search"><span class="title-gradient">Tài khoản của tôi</span></h1>
            </div>
        </div>
    </section>
    <section class="sign-in-sec">
        <div class="container">
            <div class="tbl-fr">
                <div class="fr-sign-in fix-mg">
                    <?php
                    if (isset($_SESSION['user'])) {
                        extract($_SESSION['user']);
                    ?>
                        Xin Chào
                        <?= $user ?>
                        <li class="form_li">
                            <a href="index.php?act=quenmk">Quên mật khẩu</a>
                        </li>
                        <li class="form_li">
                            <a href="index.php?act=edit_taikhoan">Cập nhật tài khoản</a>
                        </li>
                        <?php
                        if ($role == 1) {
                        ?>
                            <li class="form_li">
                                <a href="admin/index.php">Đăng nhập admin</a>
                            </li>
                        <?php } ?>
                        <li class="form_li">
                            <a href="index.php?act=thoat">Thoát </a>
                        </li>
                    <?php
                    } else {
                    ?>
                        <form name="frm_customer_account_email" enctype="application/x-www-form-urlencoded" method="post" action="index.php?act=dangnhap" class="form-login" autocomplete="off">
                            <h3 class="title-sign-in">Bạn đã có tài khoản METAGENT ?</h3>
                            <p class="text-justify">Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành
                                viên và nhận được những ưu đãi tốt hơn!</p>
                            <input class="w-input-100" type="text" name="user" id="" placeholder="Tên đăng nhập OR Email">
                            <input class="w-input-100" type="password" name="pass" id="" placeholder="Mật khẩu">
                            <div class="fix-check-box">
                                <input type="checkbox" id="customer_remember" name="checkbox" value="1">
                                <label for="customer_remember">Ghi nhớ đăng nhập</label>
                            </div>
                            <div class="btn-sub-sign">
                                <a class="fix-hover" href="=#">Quên mật khẩu?</a>

                                <input type="submit" value="ĐĂNG NHẬP" class="btn btn-sign-in" name="dangnhap">
                            </div>
                        </form>
                    <?php } ?>
                </div>



                <div class="fr-new-acc fix-mg">
                    <h3>Tạo tài khoản mới</h3>
                    <p>Trở thành thành viên METAGENT để nhận được</p>
                    <div class="list-color">
                        <ul>
                            <div class="item-color">
                                <li class="checked"></li><span>Tích điểm tự động</span>
                            </div>
                            <div class="item-color">
                                <li class="checked"></li><span>Nhiều ưu đãi đặc biệt</span>
                            </div>
                            <div class="item-color">
                                <li class="checked"></li><span>Thông tin mới nhất</span>
                            </div>
                        </ul>
                    </div>
                    <div class="btn-sub-sign btn-reg">
                        <a href="index.php?act=dangky" class="btn btn-sign-in" type="submit">ĐĂNG KÝ</a>
                    </div>
                </div>
            </div>
            <div class="tbl-fr">
                <p style="max-width: 886px">Thông tin cá nhân thu thập được sẽ chỉ được sử dụng với mục đích đã
                    công bố tại <a href="../thong-tin/chinh-sach-bao-ve-thong-tin-nguoi-tieu-dung.html" style="text-decoration: underline">Chính sách bảo vệ thông tin cá nhân của người tiêu
                        dùng</a>. METAGENT cam kết không bán, chia sẻ hay trao đổi thông tin cá nhân của khách
                    hàng thu thập trên trang web cho một bên thứ ba nào khác trái quy định pháp luật.</p>
            </div>
        </div>
    </section>

    <!-- WIDGET GALLERY -->

</main>