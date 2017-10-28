<?php

$userid = $_GET['userid'];
$productid = $_GET['productid'];
$basket = $_GET['basket'];

parse_str($basket, $basketARR);
echo $basketARR['basket'];
echo $basketARR[','][0];

$url = 'http://127.0.0.1:3000/items';

$products = array('tea' => 'coffee', 'milk' => 'sugar');

$compare = array_diff_assoc($basketARR,$products);

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