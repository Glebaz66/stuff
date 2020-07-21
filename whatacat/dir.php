<?php
    $a = array();

    foreach ($img as $key => $value) {
        $a = array(
            'item' => dirname($value)
        );
        print_r($a);
    }
?>