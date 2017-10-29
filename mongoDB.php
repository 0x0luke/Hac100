<?php

$productID = $_GET['productID'];
$userid = $_GET['userid'];

$m = new MongoClient();
$db = $m->selectDB('Tododb');
$collection = new MongoCollection($db, 'Tododb');


$lookupprod = array('ProductID' => $productID, 'userid' => $userid);

$mathmedaddy = $lookupprod/rand(0, 3);

echo $mathmedaddy;

?>