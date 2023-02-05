<?php
$document_root = $_SERVER['DOCUMENT_ROOT'];
include $document_root . '/includes/functions/functions.php';
include $document_root . '/includes/functions/tracking.php';
include $document_root . '/includes/functions/core.php';

global $request_url;
$request_url_full = $request_url;


$type = isset($_GET["type"]) ? $_GET["type"] : "";

$coreInstance = new Core();
if ( $type == "plz" ) {
    $coreInstance->tracking($request_url_full,'event','plz test');
    $plz = isset($_GET["plz"]) ? $_GET["plz"] : "";
    ?>
    <a href="/kontakt" class="leistung_card" style="margin-left:0px;margin-top:20px;">
        <img class="darkmode_logo" src="/static/img/laptop_codenlassen_home.svg" alt="individuelles WordPress Programmierung">
        <h4>Stefan Klaes - WordPress Entwickler</h4>
        <?php
        if ( $plz == "" ) {
            ?>
            <p>
            Du hast zwar keine PLZ angegeben, aber das ist ja auch nur eine Demo. 
            </p>
            <?php
        }
        else if ( strlen($plz) !== 5 && strlen($plz) !== 4 ) {
            ?>
            <p>
            Die PLZ sieht nicht wirklich korrekt aus, aber das ist ja auch nur eine Demo.
            </p>
            <?php
        }
        else {
            ?>
            <p>
            Ich bin für ganz Deutschland zuständig, da ich remote arbeite. Dieses Feature ist natürlich nur eine Demo. 
            </p>
            <?php
        }
        ?>
        <span class="btn button_prim_txt martop20">
            jetzt anfragen
            <?php get_icon("arrow_right",26,"colprimhov") ?>
    </a>
    <?php
}
else {
    $coreInstance->tracking($request_url_full,'event','plugin description');
    $website = isset($_GET["website"]) ? $_GET["website"] : "[gib deine Autor URI an]";
    $plugin_name = isset($_GET["plugin_name"]) ? $_GET["plugin_name"] : "[Gib einen Plugin Namen an]";
    $author = isset($_GET["author"]) ? $_GET["author"] : "[Gib den Namen des Autors an]";
    $plugin_desc = isset($_GET["plugin_desc"]) ? $_GET["plugin_desc"] : "[Gib eine Plugin Beschreibung an]";

    if ( $website == "" ) {
        $website = "[gib deine Autor URI an]";
    }
    if ( $plugin_name == "" ) {
        $plugin_name = "[Gib einen Plugin Namen an]";
    }
    if ( $author == "" ) {
        $author = "[Gib den Namen des Autors an]";
    }
    if ( $plugin_desc == "" ) {
        $plugin_desc = "[Gib eine Plugin Beschreibung an]";
    }
    
    $code = '
        <?php
        /*
        Plugin Name: ' . $plugin_name . '
        Description: ' . $plugin_desc . '
        Version: 1.0.0
        Author: ' . $author . '
        Author URI: ' . $website . '
        */
    
        // wenn die datei direkt aufgerufen wird abbrechen
        if ( ! defined( "WPINC" ) ) {
            die;
        }
    
        // Ab hier beginnt der eigentliche Code
    ';
    
    return highlight_string($code);

}









