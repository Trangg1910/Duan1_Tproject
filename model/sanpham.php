<?php

function loadAll_sanpham_home()
{ // anh, ten, gia, mau sp
    $sql = "SELECT sanpham.name, sanpham.price, img_product.img, sanpham.image , sanpham.id FROM sanpham
    LEFT JOIN img_product ON sanpham.id = img_product.id_sp 
    WHERE 1 ORDER BY id";
    $listsanpham = pdo_query($sql);
    return $listsanpham;
}


function loadAll_sanpham_top10()
{
    $sql = "SELECT sanpham.name, sanpham.price, img_product.img, sanpham.image, sanpham.id FROM sanpham
    LEFT JOIN img_product ON sanpham.id = img_product.id_sp 
    WHERE 1 order by luotxem desc";
    $listsanpham = pdo_query($sql);
    return $listsanpham;
}

function loadOne_sanpham($idsp)
{
    $sql = "SELECT sanpham.name, sanpham.price, img_product.img, sanpham.image, sanpham.soluong, sanpham.color, sanpham.mota, size_product.size  
    FROM sanpham 
    LEFT JOIN img_product ON sanpham.id = img_product.id_sp 
    LEFT JOIN size_product ON sanpham.id = size_product.id_sp 
    WHERE sanpham.id = $idsp 
    ";
    $listsanpham = pdo_query_one($sql);
    return $listsanpham;
}


function load_sanpham_cungloai($iddm)
{
    $sql = "SELECT sanpham.name, sanpham.price, img_product.img, sanpham.image , sanpham.id FROM sanpham
    LEFT JOIN img_product ON sanpham.id = img_product.id_sp WHERE iddm = $iddm ";
    $listsanpham = pdo_query($sql);
    return $listsanpham;
}

function loadall_sanpham($keyw = "", $iddm = 0)
{
    $sql = "SELECT sanpham.name, sanpham.price, img_product.img, sanpham.image , sanpham.id FROM sanpham
    LEFT JOIN img_product ON sanpham.id = img_product.id_sp WHERE 1";
    if ($keyw != "") {
        $sql .= " and name like '%" . $keyw . "%'";
    }
    if ($iddm > 0) {
        $sql .= " and iddm ='" . $iddm . "'";
    }
    $sql .= " order by id desc";
    $listsanpham = pdo_query($sql);
    return  $listsanpham;
}

function load_ten_dm($iddm){
    if($iddm>0){
    $sql="select * from sanpham where id=".$iddm;
    $dm=pdo_query_one($sql);
    extract($dm);
    return $name;
    }else{
        return "";
    }
}
