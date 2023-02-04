<?php
global $darkmode;

?>
<div class="leistungen_wrap">
    
    <!-- card WordPress Programmierung -->
    <a href="<?php echo sites("programmierung") ?>" class="leistung_card">
        <img class="darkmode_logo" src="/static/img/php-icon<?php echo $darkmode ?>.svg" alt="individuelles WordPress Programmierung"/>
        <h4>WordPress Programmierung</h4>
        <p>
        Erfahre mehr über meine Leistungen als WordPress Entwickler. Ich entwickle 
        Zusatzfunktionen für Agenturen, Untenehmen und Einzelpersonen. Dabei halte 
        ich WordPress Standards ein und arbeite schnell und genau.
        </p>
        <span class="btn button_prim_txt martop20">
            mehr
            <?php get_icon("arrow_right",26,"colprimhov") ?>
        </span>
    </a>
    <!-- END card wordpress plugin -->

    <!-- card wordpress plugin -->
    <a href="<?php echo sites("plugins") ?>" class="leistung_card">
        <img class="darkmode_logo" src="/static/img/zip-icon<?php echo $darkmode ?>.svg" alt="individuelles WordPress Plugin"/>
        <h4>WordPress Plugin Entwicklung</h4>
        <p>
            Dir fehlen Funktionen in deiner WordPress Website oder deinem Woocommerce Shop? 
            Ich setze Ideen in Form von WordPress Plugins um, damit du deine Prozesse optimieren 
            kannst und Zeit für wichtigere Themen hast.
        </p>
        <span class="btn button_prim_txt martop20">
            mehr
            <?php get_icon("arrow_right",26,"colprimhov") ?>
        </span>
    </a>
    <!-- END card wordpress plugin -->


    <!-- card wordpress codeschnipsel -->
    <a href="<?php echo sites("codeschnipsel") ?>" class="leistung_card">
        <img class="darkmode_logo" src="/static/img/txt-icon<?php echo $darkmode ?>.svg" alt="WordPress Codeschnipsel"/>
        <h4>WordPress Codeschnipsel</h4>
        <p>
        Kleine Anpassungen in WordPress lassen sich häufig mit wenigen Zeilen Code umsetzen. 
        Hierfür wäre ein Plugin zu "groß". Ich stelle Codeschnipsel bereit und beschreibe den eigenständigen Einbau.
        </p>
        <span class="btn button_prim_txt martop20">
            mehr
            <?php get_icon("arrow_right",26,"colprimhov") ?>
        </span>
    </a>
    <!-- END card wordpress codeschnipsel -->


</div>