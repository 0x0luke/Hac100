<?php

$userid = $_GET['userid'];
$productid = $_GET['productid'];
$probability = $_GET['probability'];

$url = 'http://127.0.0.1:3000/items';

$data = array('productID' => $productid, 'userid' => $userid, 'probability' => $probability);
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