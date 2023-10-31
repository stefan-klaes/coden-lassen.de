<?php
/**
 * display raw code from text file
 */

$full_path = 'static' . $request_url . '.txt';


if ( !file_exists($full_path) ) {
    //header("Location: /404");
}

highlight_file($full_path); 
