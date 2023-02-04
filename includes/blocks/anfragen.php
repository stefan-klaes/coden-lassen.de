<?php
global $darkmode;

$jetzt_anfragen = isset($jetzt_anfragen_headline) ? $jetzt_anfragen_headline : "Jetzt Anfragen!";
$jetzt_anfragen_txt = isset($jetzt_anfragen_body) ? $jetzt_anfragen_body : "Schreib mich an - egal ob mit einer konkreten Anfrage oder einer groben Machbarkeitsanfrage. 
Ich antworte innerhalb von maximal 48 Stunden (meist schneller).";

?>
<!-- anfragen -->
<div class="home_bereich martop40" style="overflow:hidden;padding-top: 40px;padding-bottom: 40px;">

<div class="row">
    <div class="col-2">
        <img style="margin-left:-20px" class="darkmode_logo" src="/static/img/anfragen-handy-links<?php echo $darkmode ?>.svg" alt="Jetzt Anfragen"/>
    </div>

    <div class="col-2">
        <p class="hero"><b><?php echo $jetzt_anfragen ?></b></p>
        <p class="pheros">
        <?php echo $jetzt_anfragen_txt ?>
        </p>

        <a href="/kontakt" class="martop20 special_hover_btn btn button_prim">
            Anfragen
            <?php get_icon("arrow_right",26,"iconhell") ?>
        </a>
    </div>
</div>


</div>
<!-- END anfragen -->