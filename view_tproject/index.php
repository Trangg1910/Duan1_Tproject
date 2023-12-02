<?php
include "../model/binhluan.php";
include "../model/pdo.php";
include "../model/sanpham.php";
include "../model/taikhoan.php";
include "global.php";

$spnew = loadAll_sanpham_home();
$spbest = loadAll_sanpham_top10();
// $dsdm = loadAll_danhmuc();
include "header.php";
if (isset($_GET['act']) && ($_GET['act'] != "")) {
    $act = $_GET['act'];
    switch ($act) {
        case "chitietsanpham": {
                if (isset($_POST['guibinhluan'])) {
                    insert_binhluan($_POST['idpro'], $_POST['noidung']);
                }
                if (isset($_GET['idsp']) && $_GET['idsp'] > 0) {
                    $sanpham = loadOne_sanpham($_GET['idsp']);
                    $sanpham_cungloai = load_sanpham_cungloai($_GET['idsp'], $sanpham['iddm']);
                    $binhluan = loadAll_binhluan($_GET['idsp']);
                    include "chi_tiet_san_pham.php";
                } else {
                    include "home.php";
                }
                break;
            }

        case "sanpham":
            if ((isset($_POST['keyw']) && ($_POST['keyw'] != ""))) {
                $keyw = $_POST['keyw'];
            } else {
                $keyw = "";
            }
            if (isset($_GET['iddm']) && ($_GET['iddm'] > 0)) {
                $iddm = $_GET['iddm'];
            } else {
                $iddm = 0;
            }
            
            $dssp = loadall_sanpham($keyw, $iddm);
            $tendm = load_ten_dm($iddm);
            include "danhsachsanpham.php";
            break;


        case "dangnhap":
            if (isset($_POST['dangnhap']) && ($_POST['dangnhap'])) {
                $user = $_POST['user'];
                $pass = $_POST['pass'];
                $checkuser = checkuser($user, $pass);
                if (is_array($checkuser)) {
                    $_SESSION['user'] = $checkuser;
                    $_SESSION['pass'] = $checkuser;
                    header('Location: index.php');
                    $thongbao = "bạn đã đăng nhập thành công ";
                } else {
                    $thongbao = "Tài khoản không tồn tại. Vui lòng đăng ký tài khoản";
                }
            }
            include "login/dangnhap.php";
            break;

        case "dangky":
            if (isset($_POST['dangky']) && ($_POST['dangky'])) {
                $email = $_POST['email'];
                $user = $_POST['user'];
                $pass = $_POST['pass'];
                $address = $_POST['address'];
                $pass = $_POST['pass'];
                insert_taikhoan($email, $user, $pass, $address, $tel);
                $thongbao = "Đã đăng ký thành công.Vui lòng đăng nhập để thực hiện chức năng bình luận hoặc đặt hàng ";
            }
            include "login/dangky.php";
            break;


        case "thoat":
            session_unset();
            header('Location: index.php');
            include "home.php";
            break;

        
    }
} else {
    include "home.php";
}
// include "danhsachsanpham.php";

include "footer.php";
