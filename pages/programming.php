<?php
/**
 * 
 * @route: path="/individuelle-wordpress-programmierung" name="programmierung"
 * @headline: Programmierung
 * @seotitle: Individuelle WordPress Programmierung
 * @seodesc: Individuelle WordPress Programmierung beauftragen lassen. WordPress Entwickler für sämtliche Anpassungen.
 * @seokeywords: Individuelle WordPress Programmierung
 * 
 * navigation data:
 * @navname: Programmierung
 * @navicon: code
 * @navprefix: WordPress
 * @navdisplay: 2:main
 * @navmobile: popup
 * 
 */
?>
<div class="member_cards">

<div class="row home_bereich" style="overflow:hidden">
    <div class="col-2">
        <h1 class="hero">Individuelle WordPress Programmierung</h1>
        <div class="iconbox martop40" style="line-height: 32px;">
            <?php get_icon("check_circle",32,"iniconbox") ?>
            <h3>PHP, HTML, CSS, JAVASCRIPT, uvm.</h3>
        </div>
        <div class="iconbox martop20" style="line-height: 32px;">
            <?php get_icon("check_circle",32,"iniconbox") ?>
            <h3>Festpreis-Garantie</h3>
        </div>
        <div class="iconbox martop20" style="line-height: 32px;">
            <?php get_icon("check_circle",32,"iniconbox") ?>
            <h3>schnell</h3>
        </div>

        <a href="<?php echo sites('kontakt') ?>" class="special_hover_btn martop40 btn button_prim">
            Anfragen
            <?php get_icon("arrow_right",26,"iconhell") ?>
        </a>
    </div>
    <div class="col-2" style="position:relative">
        <img style="position:absolute;bottom:-30px;right:0px" class="colimg darkmode_logo" alt="Individuelle WordPress Programmierung" src="<?php imgSrc('individuelle-wordpress-programmierung-design.svg','darkmode') ?>"/>
    </div>
</div>

<!-- bubbles -->
<div class="home_bereich martop40 home_bereich_none" style="max-width: 850px;margin: auto;padding-top: 80px;padding-bottom: 40px;">

    <div class="bubble_wrap_prim">
        <div class="antwort_bubble">
            <div class="antwort_bubble_inner">
            <span id="antwort">Du benötigst eine individuelle Programmierung für WordPress?</span>
            </div>
        </div>
    </div>

    <div class="bubble_wrap_white" align="right">
        <div class="antwort_bubble">
            <div class="antwort_bubble_inner">
            <span id="antwort">Ja, genau! Ich benötige einen Programmierer.</span>
            </div>
        </div>
    </div>
    

</div>
<!-- bubbles END -->


    <!-- panzer -->
    <div class="home_bereich martop40" style="overflow:hidden;padding-top: 40px;padding-bottom: 40px;">

    <p class="phero marbo40">Perfekt, denn ich erstelle Plugins, Anpassungen und generell Code für WordPress.</p>

    <div class="mobile_side_scroll">
    <?php
    $skill_chips = ["PHP", "MYSQL", "HTML", "CSS", "JAVASCRIPT", "uvm."];
    foreach ( $skill_chips as $chip ) {
        ?>
        <div class="chip chipprimopa" style="line-height: 24px;">
            <?php get_icon("bookmark",24,"inchip") ?>
            <span><?php echo $chip ?></span>
        </div>
        <?php
    }
    ?>
    </div>

    <h2 class="heross martop40 marbo40">
    Diese Möglichkeiten biete ich zur Umsetzung von individuellen WordPress Programmierungen.
    </h2>

    <p class="pheros" style="margin-bottom:40px;">
        Die Preise einer individuellen Programmierung sind nicht pauschal darzustellen, da der Preis 
        enorm von der Art der Anfrage und den Umsetzungswünschen abhängig ist. 
        Selbstverständlich empfehle ich dir welche Art der Umsetzung aus meiner Sicht die sinnvollste ist.
    </p>

    <div class="panzer_wrap_center">
        <?php panzer_cards() ?>
    </div>

    <div style="display:flex">
        <img alt="Controller linke Hand" style="margin-left:-20px;" class="mobilehidden darkmode_logo" src="<?php imgSrc('zocken-left.svg','darkmode') ?>"/>
        <img alt="Controller rechte Hand" style="position: absolute;right:-20px" class="darkmode_logo" src="<?php imgSrc('zocken-right.svg','darkmode') ?>"/>
    </div>

</div>
<!-- END panzer -->


<!-- ablauf -->
<div class="home_bereich martop40 ablauf_div" style="overflow:hidden;padding-top: 40px;padding-bottom: 40px;">

    <h2 class="heross">Erfahre mehr über den Ablauf, wenn ich Funktionen und Anpassungen für WordPress programmiere.</h2>
    <p class="pheros">
        Wir hangeln uns an ein paar groben Anhaltspunkten entlang, die sowohl für die 
        Preiskalkulation, als auch für die Bestimmung der Wünsche und Bedürfnisse wichtig sind.
    </p>

    <p class="heross martop40"><b>1. Deine Anfrage</b></p>
    <p class="pheros">
        Nutze mein <a href="<?php echo sites('kontakt') ?>" class="button_link">Anfrageformular</a> und beschreibe deine gewünschten Funktionen und Umsetzungen entweder 
        erst einmal relativ grob oder direkt ganz genau.
    </p>

    <p class="heross martop40"><b>2. Meine Rückmeldung</b></p>
    <p class="pheros">
    Ich antworte innerhalb von 48 Stunden, aber meist sogar schneller. Je nach Anfrage kann ich 
    direkt einen groben Kostenrahmen abschätzen oder stelle meine Rückfragen.
    </p>


    <p class="heross martop40"><b>3. Genaue Absprache</b></p>
    <p class="pheros">
    Wir besprechen gemeinsam, was exakt umgesetzt werden soll und legen einen Zeitrahmen fest. 
    Ich biete immer Fixpreise an, sodass du Planungssicherheit hast.
    </p>


    <p class="heross martop40"><b>4. Ich programmiere</b></p>
    <p class="pheros">
    Haben wir alles geklärt, programmiere ich deine WordPress Wünsche wie abgesprochen. Ich melde mich 
    zwischendrin und gebe Updates. Ich bin erreichbar für Rückfragen.
    </p>


    <p class="heross martop40"><b>5. Der Code geht live</b></p>
    <p class="pheros">
    Bei kleineren Programmierungen ist deine Anforderung direkt startklar. Bei größeren Umsetzungen 
    inkl. WordPress Backend Interface, führe ich dich in die neuen Funktionen ein.
    </p>


    </div>
    <!-- END ablauf -->


    <!-- kosten -->
    <div class="home_bereich martop40" style="overflow:hidden;padding-top: 40px;padding-bottom: 40px;">

        <h2 class="heross">
            Was kostet eine individuelle WordPress Programmierung?
        </h2>
        <p class="pheros">
        Eine WordPress Programmierung kann in 1-2 Stunden erledigt sein und kostet dementsprechend unter 
        300€ – es ist aber auch möglich, dass der gewünschte Funktionsumfang hoch ist und ein eigenes 
        Plugin hierfür entwickelt werden muss inkl. benutzerdefiniertem Interface im WordPress Backend. 
        Hierbei sind Preise über 5.000€ möglich. Bitte frag deine Wünsche an und ich gebe dir eine genaue 
        Preiseinschätzung.<br><br>
        <b>Zusammengefasst:</b>
        </p>


        <div class="chip chipprimopa martop20" style="line-height: 24px;">
            <?php get_icon("bookmark",24,"inchip") ?>
            <span>200€ bis +5.000€</span>
        </div>

        <div class="chip chipprimopa martop20" style="line-height: 24px;">
            <?php get_icon("bookmark",24,"inchip") ?>
            <span>Nach Aufwand</span>
        </div>

        <div class="chip chipprimopa martop20" style="line-height: 24px;">
            <?php get_icon("bookmark",24,"inchip") ?>
            <span>Nach Codeumfang</span>
        </div>


    </div>
    <!-- END kosten -->


    <?php anfragen_block() ?>

            





</div>