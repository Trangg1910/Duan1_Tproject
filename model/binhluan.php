<?php

function loadAll_binhluan(){
    $sql = "SELECT binhluan.noidung, binhluan.ngaybinhluan, taikhoan.user FROM `binhluan`
    LEFT JOIN taikhoan ON binhluan.iduser = taikhoan.id
    LEFT JOIN sanpham ON binhluan.idpro = sanpham.id
    WHERE sanpham.id = 1;";
    $result = pdo_query($sql);
    return $result;
}

function insert_binhluan($idpro, $noidung){
    $date = date('Y-m-d');
    $sql = "
        INSERT INTO `binhluan`(`noidung`, `iduser`, `idpro`, `ngaybinhluan`) 
        VALUES ('$noidung','2','$idpro','$date');
    ";
    //echo $sql;
    //die;
    pdo_execute($sql);
}

?>