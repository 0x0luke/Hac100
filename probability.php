<?php

$userid = $_GET['userid'];
$productid = $_GET['productid'];
$basket = $_GET['basket'];

$basketcomp = array($basket);
$url = 'http://127.0.0.1:3000/items';

$products = array('tea' => 'coffee', 'milk' => 'sugar');

$compare = array_diff($basketcomp,$products);

$data = array('productID' => $productid, 'userid' => $userid, 'suggested' => $compare, 'probability' => $probability);
$postdata = http_build_query($data);

$options = array(
            'http' => array(
                'header' => "Content-type: application/x-www-form-urlencoded",
                'content' => $postdata,
                'method' => "POST"
            )
    );

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
var_dump($result);
?>