<?php
/**
 * 
 * @route: path="/wordpress-freelancer" name="ueber-mich"
 * @headline: Freelancer
 * @seotitle: WordPress Referenzen
 * @seodesc: WordPress Freelancer - Entwicklung indidueller Plugins, Anpassungen am Code, Styling und vieles mehr.
 * @seokeywords: WordPress Freelancer
 * 
 * navigation data:
 * @navname: Über mich
 * @navicon: person
 * @navdisplay: 5:main
 * @navmobile: popup
 * 
 */

$birthDate = "01/13/1993";
$birthDate = explode("/", $birthDate);
$age = (date("md", date("U", mktime(0, 0, 0, $birthDate[0], $birthDate[1], $birthDate[2]))) > date("md")
    ? ((date("Y") - $birthDate[2]) - 1)
    : (date("Y") - $birthDate[2]));



?>
<div class="member_cards">

<div class="row home_bereich chipsgrey">
    <div class="col-2">
        <span>Ich bin Stefan, <?php echo $age ?> Jahre alt, aus der Nähe von Hamburg und ich bin</span>
        <h1 class="hero" style="margin-bottom:40px;">WordPress Freelancer</h1>
        
        <?php
        $skill_chips = ["WordPress", "Code", "Woocommerce", "Dogs", "PHP", "Entwicklung"];
        foreach ( $skill_chips as $chip ) {
            ?>
            <div class="chip" style="line-height: 24px;">
                <?php get_icon("herz",24,"inchip") ?>
                <span><?php echo $chip ?></span>
            </div>
            <?php
        }
        ?>

        <div class="martop">
            <a href="<?php echo sites('kontakt') ?>" class="special_hover_btn martop40 btn button_prim">
                Anfragen
                <?php get_icon("arrow_right",26,"iconhell") ?>
            </a>
        </div>


    </div>
    <div class="col-2" style="position:relative;text-align:center">
        <img class="colimg darkmode_logo" src="<?php echo imgSrc('stefan-codenlassen-ich.svg','darkmode') ?>" alt="WordPress Freelancer Stefan"/>
    </div>
</div>

<!-- bubbles -->
<div class="home_bereich martop40 home_bereich_none" style="max-width: 850px;margin: auto;padding-top: 80px;padding-bottom: 40px;">

    <div class="bubble_wrap_prim">
        <div class="antwort_bubble">
            <div class="antwort_bubble_inner">
            <span id="antwort">Arbeitest du mit Agenturen und Webdesignern zusammen?</span>
            </div>
        </div>
    </div>

    <div class="bubble_wrap_white" align="right">
        <div class="antwort_bubble">
            <div class="antwort_bubble_inner">
            <span id="antwort">
                Ja, meine meisten Aufträge sind für Agenturen oder Webdesigner, für die ich Features 
                programmiere.
            </span>
            </div>
        </div>
    </div>
    

</div>
<!-- bubbles END -->



<!-- 3 Dinge -->
<div class="home_bereich martop40" style="overflow:hidden;padding-top: 40px;padding-bottom: 40px;">

    <h2 class="heross" style="margin-bottom:80px;">
    Mit diesen 3 Erfahrungen bin ich WordPress Freelancer geworden.
    </h2>


    <div class="col-finger">
        <img alt="ein Finger zeigen" class="darkmode_logo" src="<?php imgSrc('finger-1.svg','darkmode') ?>"/>
        <div class="dinge">
            <h3>Eigenes E-Commerce Unternehmen</h3>

            <p class="pheros">
            In meinem eigenen E-Commerce Unternehmen habe ich unsere Website eigenständig aufgebaut. Wir haben individuelles Hundefutter produziert und verschickt. Dabei lag mein Hauptfokus auf der Automatisierung der Shopdaten für die Produktion. So habe ich mit unzähligen Eigenentwicklungen die Abläufe verbessert. Beispielsweise arbeiten unsere Mitarbeiter mit Tablets, auf denen sie Schritt für Schritt durch die Zubereitungen geführt wurden. Die Daten wurden automatisch aus dem Shop bereitgestellt. Des Weiteren habe ich den „Packprozess“ beim Versand optimiert und ein Abo in Eigenentwicklung umgesetzt.
            </p>
        </div>
    </div>


    <div class="col-finger">
        <img alt="zwei Finger zeigen" class="darkmode_logo" src="<?php imgSrc('finger-2.svg','darkmode') ?>"/>
        <div class="dinge">
            <h3>Digital Marketing Manager</h3>

            <p class="pheros">
            Als gelernter Kaufmann für Marketingkommunikation habe ich in einer der größten Mediaagenturen gearbeitet und war dort für die Aussteuerung programmatischer Kampagnen zuständig.
            </p>
        </div>
    </div>


    <div class="col-finger">
        <img alt="drei Finger zeigen" class="darkmode_logo" src="<?php imgSrc('finger-3.svg','darkmode') ?>"/>
        <div class="dinge">
            <h3>Advertising Technlogie Manager</h3>

            <p class="pheros">
            Hauptberuflich arbeite ich als AdTech Manager für ein international agierendes deutsches Unternehmen und entwickle 
            Tools, die die Prozesse optimieren. Technologie und Innovation interessieren mich extrem. 
            Nebenberuflich entwickle Plugins oder stelle Codes für Feature Erweiterungen in WordPress und Woocommerce bereit.
            </p>
            <a class="btn button_prim martop20" target="_blank" href="https://de.linkedin.com/in/stefan-klaes-51b022b5">Finde mich bei LinkedIn</a>

        </div>
    </div>




</div>
<!-- END 3 Dinge -->


    <!-- sprachen -->
    <div class="home_bereich martop40" style="overflow:hidden;padding-top: 40px;padding-bottom: 40px;">

        <h2 class="heross">
        Programmiersprachen, die ich für die Entwicklung und Gestaltung in WordPress nutze.
        </h2>
        <p class="pheros">
        Die Erstellung von Plugins oder Codeschnipseln erfordert das Beherrschen gewisser Programmiersprachen. 
        WordPress basiert auf PHP, somit sind PHP und mysql enorm wichtig um Änderungen an der Struktur der 
        Website, sowie grundlegenden Funktionen durchführen zu können. Frontendsprachen beherrsche ich 
        selbstverständlich auch.
        </p>

        <p class="pheros martop40"><b>Meine für WordPress relevanten Kenntnisse:</b></p>

        <?php
        $skill_chips = ["PHP", "MYSQL", "HTML", "CSS", "JAVASCRIPT", "JQEURY"];
        foreach ( $skill_chips as $chip ) {
            ?>
            <div class="chip chipprimopa" style="line-height: 24px;">
                <?php get_icon("bookmark",24,"inchip") ?>
                <span><?php echo $chip ?></span>
            </div>
            <?php
        }
        ?>

        <p class="pheros martop40"><b>Weitere Sprachen & Kenntnisse, die ich mitbringe:</b></p>

        <?php
        $skill_chips = ["PYTHON", "DJANGO", "SOLIDITY", "BLOCKCHAIN", "APIs"];
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
    <!-- END sprachen -->


    <?php anfragen_block() ?>

            





</div>
