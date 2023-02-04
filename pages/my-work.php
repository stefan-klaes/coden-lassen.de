<?php
/**
 * 
 * @route: path="/referenzen" name="referenzen"
 * @headline: Referenzen
 * @seotitle: WordPress Referenzen
 * @seodesc: WordPress Referenzen - individuelle WordPress Programmierungen. WordPress Entwickler für sämtliche Anpassungen.
 * @seokeywords: WordPress Referenzen
 * 
 * navigation data:
 * @navname: Referenzen
 * @navicon: apps
 * @navdisplay: 4:main
 * @navmobile: popup
 * 
 */

$all_codesnippets = get_all_codesnippets();


?>
<div class="member_cards">

    <div class="row home_bereich" style="margin-bottom:80px;">
        <div class="col-2">
            <h1 class="heross">Meine Referenzen</h1>
            <p class="pheros marbo40">
                Ich programmiere individuelle Lösungen für WordPress und Woocommerce. Dabei handelt es sich um Programmierungen 
                für das WordPress Backend, um Prozesse zu vereinfachen, aber auch um sichtbare Funktionen im Frontend. Ich zeige 
                hier einige meiner Referenzen aus den Bereichen Codesnippets und Plugins.
            </p>
            <?php
            $skill_chips = ["Codesnippets", "individuelle Plugins"];
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
        <div class="col-2" style="position:relative;text-align: center;">
            <img style=";margin-bottom:-78px;" class="colimg darkmode_logo" alt="Individuelle WordPress Programmierung" src="<?php echo imgSrc('wordpress-programmierung-referenzen.svg','darkmode') ?>"/>
        </div>
    </div>



            
    <!-- filter -->
    <div class="home_bereich martop40 filter_div home_bereich_none" style="text-align:center">

            <div class="filter_tab">
                <div class="switch_min">
                    <div id="switch_snippet" title="snippet" class="switch_bg switch_yes" onclick="switch_toggle(this);referenz_filter()">
                        <div class="switch_circle"></div>
                    </div>
                </div>
                <span class="filter_span">Snippets</span>
            </div>

            <div class="filter_tab">
                <div class="switch_min">
                    <div id="switch_plugin" title="plugin" class="switch_bg switch_yes" onclick="switch_toggle(this);referenz_filter()">
                        <div class="switch_circle"></div>
                    </div>
                </div>
                <span class="filter_span">Plugins</span>
            </div>


            <?php
            $type = [];
            $file_name = [];
            $headlines = [];
            $desc = [];
            $link = [];

            foreach ( $all_codesnippets as $cosesnippet ) {
                $headlines[] = $cosesnippet["headline"];
                $desc[] = $cosesnippet["desc"];
                $file_name[] = $cosesnippet["file_name"] . ".php";
                $link[] = $cosesnippet["file_name"];
                if ( strpos($cosesnippet["file_name"],"plugin-") > -1 ) {
                    $type[] = "plugin";
                }
                else {
                    $type[] = "snippet";
                }
                
            }


            $icon_match = [];
            $icon_match["snippet"] = "php-icon";
            $icon_match["plugin"] = "zip-icon";
            $icon_match["offizielles plugin"] = "wp-icon";

            ?>
            <div class="all_referenzen martop40">
                <div id="keine_erg" style="display:none"></div>
            <?php
            for ( $i=0; $i<sizeof($type); $i++ ) {
                $this_img = $icon_match[$type[$i]] . '.svg';
                ?>
                <div class="referenz_wrap filter_<?php echo $type[$i] ?>">
                    <div class="referenz_wrap_inner">
                        <div class="referenz_file_name">
                            <img class="darkmode_logo" src="<?php imgSrc($this_img,'darkmode') ?>" alt="WordPress Referenz"/>
                            <div class="ref_filename" style="display:none"><?php echo $file_name[$i] ?></div>
                        </div>
                        <div class="referenz_label">
                            <?php get_icon("label",24,"reflabel") ?>
                            <span style="color:var(--txt)"><?php echo $type[$i] ?></span>
                        </div>
                        <h3><?php echo $headlines[$i] ?></h3>
                        <p><?php echo $desc[$i] ?></p>
                    </div>
                    <a href="<?php echo sites("referenzen") ?>/<?php echo $link[$i] ?>" class="btn button_prim_txt">
                        mehr
                        <?php get_icon("arrow_right",26,"colprimhov") ?>
                    </a>
                </div>
                <?php
            }
            ?>
            </div>


    </div>
    <!-- END filter -->



</div>

