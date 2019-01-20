<?php
$firstname = $_REQUEST['fname'];
$lastname = $_REQUEST['lname'];
$selected = $_REQUEST['selected'];

$host = "localhost";
$user = "root";
$password = "";
$dbname = "phptest";

$dsn = "mysql:host=". $host .";dbname=". $dbname ;

$connection = new PDO($dsn,$user="root",$password);

$connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);

$sql_insert = "INSERT INTO data(firstname,lastname,selected) VALUES (:firstname,:lastname,:selected)";
$stmt_insert = $connection->prepare($sql_insert);
$stmt_insert->execute(["firstname"=>$firstname,"lastname"=>$lastname,"selected"=>$selected]);
echo "inserted"
?>