<?php
$hostname = "localhost";
$dbusername = "it57160438";
$dbpassword = "4K5m8eHj";
$dbname = "it57160438";

$conn = mysqli_connect($hostname,$dbusername,$dbpassword,$dbname);

if(!$conn){
    die("Connect Database Error");
}