<?php

$productID = $_GET['productID'];
$userid = $_GET['userid'];

$m = new MongoClient();
$db = $m->selectDB('Tododb');
$collection = new MongoCollection($db, 'Tododb');
$mongoObject["productID"] = new MongoId($this->productID);
$mongoObject["userid"] = new MongoId($this->userid);

echo "connect tings";
$db -> $lookupprod = array('ProductID' => $productID, 'userid' => $userid);

echo $lookupprod;

?>
