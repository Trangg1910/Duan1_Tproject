<?php
function insert_taikhoan($email, $user, $pass, $address, $tel)
{
    $sql = "INSERT INTO `taikhoan` ( `email`, `user`, `pass`, `address`, `tel`) VALUES ( '$email', '$user','$pass' , '$address', '$tel'); ";
    pdo_execute($sql);
}
function checkuser($user, $pass)
{
    $sql = "select * from taikhoan where user='" . $user . "' AND pass='" . $pass . "'";
    $sp = pdo_query_one($sql);
    return $sp;
}
function checkemail($email)
{
    $sql = "select * from taikhoan where `email`={$email}";
    $sp = pdo_query_one($sql);
    return $sp;
}

function update_taikhoan($id, $user, $pass, $email, $address, $tel)
{

    //  $sql="update sanpham set iddm='".$iddm."',name='".$tensp."',price='".$giasp."',mota='".$mota."' where id=".$id;
    $sql =  "UPDATE `taikhoan` SET `user` = '{$user}', `pass` = '{$pass}', `email` = '{$email}', `address` = '{$address}',  `tel` = '{$tel}' WHERE `taikhoan`.`id` = $id";


    pdo_execute($sql);
}
function delete_taikhoan($id)
{
    $sql = "delete from taikhoan where id=" . $id;
    pdo_execute($sql);
}
function loadall_taikhoan()
{
    $sql = "select * from taikhoan order by id desc";
    $listtaikhoan = pdo_query($sql);
    return  $listtaikhoan;
}
