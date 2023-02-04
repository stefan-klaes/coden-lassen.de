<h3>Du kannst "Simplest Analytics" kostenfrei herunterladen</h3>

<ul>
    <li>im WordPress Backend herunterladen</li>
    <li>Kostenlos</li>
    <li>Keine Premium Version - alles free</li>
    <li>Simplest Analytics</li>
</ul>

<img style="width:100%;max-width:500px;" src="/includes/templates/blog/empfehlung-wordpress-analytics/imgs/install-simplest-analytics.png"/>


<p>
Den Code findest du im offiziellen WordPress Verzeichnis und auf Github.
</p>


<?php
$referenz_details = get_referenz_details('plugin-simplest-analytics');

if ( isset($referenz_details["github"]) ) {
    ?>
    <a target="_blank" href="<?php echo $referenz_details["github"] ?>" class="martop20 btn button_prim_txt">
        Code auf Github ansehen
        <?php get_icon("arrow_right",26,"") ?>
    </a>
    <?php
}
if ( isset($referenz_details["wordpress"]) ) {
    ?>
    <a target="_blank" style="display:block" href="<?php echo $referenz_details["wordpress"] ?>" class="martop20 btn button_prim_txt">
        Code auf WordPress.org ansehen
        <?php get_icon("arrow_right",26,"") ?>
    </a>
    <?php
}