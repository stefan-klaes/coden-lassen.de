<?php
/**
 * 
 * @route: path="/individuelle-wordpress-codeschnipsel" name="codeschnipsel"
 * @headline: Codeschnipsel
 * @seotitle: WordPress Codeschnipsel - individuellen Code in WordPress einbinden
 * @seodesc: WordPress Codeschnipsel - individuellen Code in WordPress einbinden
 * @seokeywords: wordpress codeschnipsel, wordpress programmierer
 * 
 * navigation data:
 * @navname: Codeschnipsel
 * @navprefix: WordPress
 * @navicon: code
 * @navdisplay: 3:main
 * @navmobile: popup
 * 
 */
?>
<div class="member_cards">



<div class="row home_bereich">
    <div class="col-2">
        <h1 class="hero">WordPress Codeschnipsel</h1>
        <div class="iconbox martop40" style="line-height: 32px;">
            <?php get_icon("check_circle",32,"iniconbox") ?>
            <h3>Anpassungen am Styling</h3>
        </div>
        <div class="iconbox martop20" style="line-height: 32px;">
            <?php get_icon("check_circle",32,"iniconbox") ?>
            <h3>Erweiterung von Funktionen</h3>
        </div>
        <div class="iconbox martop20" style="line-height: 32px;">
            <?php get_icon("check_circle",32,"iniconbox") ?>
            <h3>Shortcodes & Weiteres</h3>
        </div>

        <a href="<?php echo sites('kontakt') ?>" class="special_hover_btn martop40 btn button_prim">
            Anfragen
            <?php get_icon("arrow_right",26,"iconhell") ?>
        </a>
    </div>
    <div class="col-2" style="position:relative">
        <img style="position:absolute;bottom:-33px;right:0px" alt="WordPress Codeschnipsel" class="colimg" src="<?php echo imgSrc('individuelles-wordpress-codesnippet-php.svg','no') ?>"/>
    </div>
</div>

<!-- bubbles -->
<div class="home_bereich martop40 home_bereich_none" style="max-width: 850px;margin: auto;padding-top: 80px;padding-bottom: 40px;">

    <div class="bubble_wrap_prim">
        <div class="antwort_bubble">
            <div class="antwort_bubble_inner">
            <span id="antwort">Setzt du auch kleine Anpassungen um?</span>
            </div>
        </div>
    </div>

    <div class="bubble_wrap_white" align="right">
        <div class="antwort_bubble">
            <div class="antwort_bubble_inner">
            <span id="antwort">Ja, ich nehme gern kleine Aufträge an und setze diese um.</span>
            </div>
        </div>
    </div>
    

</div>
<!-- bubbles END -->


    <!-- wunsch -->
    <div class="home_bereich martop40" style="overflow:hidden;padding-top: 40px;padding-bottom: 40px;">

    

    <h2 class="heross martop40 marbo40">
        Meine Codeschnipsel für WordPress setzen deinen Wunsch um.
    </h2>

    <p class="pheros" style="margin-bottom:40px;">
        Hier zeige ich dir ein Beispiel für einen Codeschnipsel, welcher im Woocommerce Warenkorb anzeigt wie viel 
        Euro noch fehlen bis zum kostenlosen Versand. Dieser Code kann in die functions.php des Child Themes 
        eingefügt werden und funktioniert.
    </p>

    <img style="width: 100%;max-width: 800px;" class="" alt="WordPress kostenloser Versand Anzeige" src="<?php echo imgSrc('freeshipping-wordpress-code.png','no') ?>"/>


    <div class="code_highlight">
        <?php 
        $file_url = 'static/raw-code/kostenloser-versand-anzeige.txt';
        highlight_file($file_url); 
        ?>
    </div>
    <a target="_blank" href="/raw-code/kostenloser-versand-anzeige" class="martop20 button_link">
        puren Code anzeigen
    </a>
    

</div>
<!-- END wunsch -->





    <!-- kosten -->
    <div class="home_bereich martop40" style="overflow:hidden;padding-top: 40px;padding-bottom: 40px;">

        <h2 class="heross">
            Was kosten Codeschnipsel für WordPress?
        </h2>
        <p class="pheros">
            An den Beispiel oben sieht man wie ein Codesnippet umgesetzt werden kann. Wichtig zu beachten ist 
            folgendes: Der Preis ist neben der Komplexität der Anforderung auch davon abhängig, ob ich 
            etwas ähnliches schon einmal erledigt habe. Zudem geht es häufig nur um ganz ganz kleine 
            Codeanpassungen, die ich nebenbei erledige und eine Mindestpauschale von 80€ berechne. Bei 
            komplexeren Themen schätze ich den Arbeitsaufwand ab und gebe in jedem Fall einen Festpreis 
            an, damit du Planungssicherheit hast.<br><br>
            <b>Zusammengefasst:</b>
        </p>


        <div class="chip chipprimopa martop20" style="line-height: 24px;">
            <?php get_icon("bookmark",24,"inchip") ?>
            <span>80€ bis +500€</span>
        </div>

        <div class="chip chipprimopa martop20" style="line-height: 24px;">
            <?php get_icon("bookmark",24,"inchip") ?>
            <span>Nach Aufwand</span>
        </div>

        <div class="chip chipprimopa martop20" style="line-height: 24px;">
            <?php get_icon("bookmark",24,"inchip") ?>
            <span>schnelle Umsetzung</span>
        </div>


    </div>
    <!-- END kosten -->


    <?php anfragen_block() ?>

            





</div>
