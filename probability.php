<?php

$item = $_GET['itemID'];
$userid = $_GET['userid'];
$productid = $_GET['productid'];

$url = 'http://127.0.0.1/items';

$itemid = array();

$probability = rand(0,10);

$data = array($productid, $percent, $userid, $itemid, $probability);

$options = array(
            'http' => array(
                'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                'method' => "POST",
                'content' => http_build_query($data),

            )
    );

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
var_dump($result);
?>