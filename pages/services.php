<?php
/**
 * 
 * @route: path="/leistungen" name="leistungen"
 * @headline: Leistungen
 * @seotitle: eistungen als WordPress Entwickler
 * @seodesc: Leistungen als WordPress Entwickler - WordPress plugins, code und individuelle Entwicklungen
 * @seokeywords: wordpress Entwickler
 * 
 * navigation data:
 * @navname: Leistungen
 * @navicon: code
 * @navmobile: 2:main
 * 
 */
?>
<div class="member_cards">

    <!-- panzer -->
    <div class="home_bereich martop40" style="overflow:hidden;padding-top: 40px;padding-bottom: 40px;">

    <span>Entwickler != Webdesigner</span>
    <h1 class="heross">Meine Leistungen als WordPress Entwickler.</h1>
    <p class="pheros">
        Ich programmiere individuelle Umsetzungen für WordPress und Woocommerce. 
        Ich konzentriere mich ausschließlich auf die Programmierung neuer Funktionen und biete nicht die 
        Erstellung von kompletten Websites an.
    </p>
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

    <div class="martop40">
    <?php leistungen_cards() ?>
    </div>



</div>
<!-- END panzer -->


    <!-- panzer -->
    <div class="home_bereich martop40" style="overflow:hidden;padding-top: 40px;padding-bottom: 40px;">

    <h2 class="heross">
    Diese Möglichkeiten biete ich zur Umsetzung von individuellen WordPress Programmierungen.
    </h2>
    <p class="pheros" style="margin-bottom:40px;">
        Die Preise einer individuellen Programmierung sind nicht pauschal darzustellen, da der Preis 
        enorm von der Art der Anfrage und den Umsetzungwünschen abhängig ist. 
        Selbstverständlich empfehle ich dir, welche Art der Umsetzung aus meiner Sicht die sinnvollste ist.
    </p>
    

    

    <div class="panzer_wrap_center martop40">
        <?php panzer_cards() ?>
    </div>

    <div style="display:flex">
        <img style="margin-left:-20px;" class="darkmode_logo mobilehidden midhidden" alt="Contreoller linke Hand" src="<?php imgSrc('zocken-left.svg','darkmode') ?>"/>
        <img style="position: absolute;right:-20px" class="darkmode_logo" alt="Controller rechte Hand" src="<?php imgSrc('zocken-right.svg','darkmode') ?>"/>
    </div>

</div>
<!-- END panzer -->

            
</div>
