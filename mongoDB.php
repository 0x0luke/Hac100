<?php

$m = new MongoClient();
$db = $m->selectDB('test');
$collection = new MongoCollection($db, 'Tododb');


?>