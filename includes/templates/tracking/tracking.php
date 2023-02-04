<?php
/*
if ( isset($_GET["track"]) ) {

    $referrer = isset($_GET["referrer"]) ? $_GET["referrer"] : "";
    $type = isset($_GET["type"]) ? $_GET["type"] : "pageview";
    $event = isset($_GET["event"]) ? $_GET["event"] : "";
    
    $request_url_full = "/" . $request_url_full;

    date_default_timezone_set('Europe/Berlin');
    $datum = date("Y-m-d H:i");

    $request_url_full = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
    $request_url_full = str_replace("http://localhost/codenlassen", "", $request_url_full);
    $request_url_full = str_replace("https://", "", $request_url_full);
    $request_url_full = str_replace("http://", "", $request_url_full);
    $request_url_full = str_replace("coden-lassen.de", "", $request_url_full);
    
    $url_para_string = "";
    if ( strpos($request_url_full,"?") > -1 ) {
        $url_para_string = explode("?",$request_url_full)[1];
        $request_url_full = explode("?",$request_url_full)[0];
    }

    $seite = $request_url_full;
    $session = session_id();
    $para = $url_para_string;

    $datum = strip_tags($datum);
    $type = strip_tags($type);
    $seite = strip_tags($seite);
    $referrer = strip_tags($referrer);
    $session = strip_tags($session);
    $event = strip_tags($event);
    $para = strip_tags($para);

    $sql = "INSERT INTO $table_name (datum, type, seite, referrer, session, event, para) 
        VALUES ('$datum', '$type', '$seite', '$referrer', '$session', '$event', '$para')";

    $save = $conn->query($sql);
    $conn->close();
}

header('Content-Type: image/gif');
echo base64_decode('R0lGODlhAQABAJAAAP8AAAAAACH5BAUQAAAALAAAAAABAAEAAAICBAEAOw==');
*/