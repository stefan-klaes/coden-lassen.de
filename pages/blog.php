<?php
/**
 * 
 * @route: path="/blog" name="blog"
 * @headline: Blog
 * @seotitle: WordPress Blog
 * @seodesc: In meinem WordPress Blog lernst du wie du mit Code WordPress anpassen kannst.
 * @seokeywords: WordPress Blog
 * 
 * navigation data:
 * @navname: Blog
 * @navicon: label
 * @navdisplay: 6:main
 * @navmobile: popup
 * 
 */
 
 $all_blog_articles = get_all_blog_articles();
 
 $type = [];
 $file_name = [];
 $headlines = [];
 $desc = [];
 $link = [];
 
 $filter_words = [];
 
 foreach ( $all_blog_articles as $blog ) {
     $headlines[] = $blog["headline"];
     $desc[] = $blog["desc"];
     $file_name[] = $blog["file_name"] . ".php";
     $link[] = $blog["file_name"];
     $logo[] = $blog["logo"];
     $filter_words[] = $blog["filter"];
     if ( strpos($blog["file_name"],"anleitung-") > -1 ) {
         $type[] = "anleitung";
     }
     else {
         $type[] = "beitrag";
     }
     
 }
 
 $filter_words = array_unique($filter_words);
 
  
?>
<div class="member_cards">

    <div class="row home_bereich" style="margin-bottom:80px;overflow:hidden">
        <div class="col-2">
            <h1 class="heross">Mein WordPress Blog</h1>
            <p class="pheros marbo40">
                Ich programmiere individuelle WordPress Plugins und generell Funktionen, um WordPress auf 
                individuelle Bedürfnisse anzupassen. In diesem Blog teile ich nützliche Tipps und Anleitungen 
                wie man das beste mit Code aus WordPress rausholen kann.
            </p>
            <?php
            $skill_chips = ["Blog", "Code", "Anleitungen"];
            foreach ( $skill_chips as $chip ) {
                ?>
                <div class="chip chipprimopa" style="line-height: 24px;">
                    <?php get_icon("label",24,"inchip") ?>
                    <span><?php echo $chip ?></span>
                </div>
                <?php
            }
            ?>

            
        </div>
        <div class="col-2" style="position:relative;text-align: center;">
            <img style="position: absolute;right: 20px;bottom: -30px;" class="colimg darkmode_logo" alt="WordPress blog" src="<?php imgSrc('machenlassen_selfie_wordpress-blog.svg','darkmode') ?>"/>
        </div>
    </div>



            
    <!-- filter -->
    <div class="home_bereich martop40 filter_div home_bereich_none" style="text-align:center">

    <?php
    foreach ( $filter_words as $single_filter ) {
        ?>
        <div class="filter_tab">
            <div class="switch_min">
                <div id="switch_<?php echo strtolower($single_filter) ?>" title="<?php echo strtolower($single_filter) ?>" class="switch_bg switch_yes" onclick="switch_toggle(this);blog_filter()">
                    <div class="switch_circle"></div>
                </div>
            </div>
            <span class="filter_span"><?php echo $single_filter ?></span>
        </div>
        <?php
    }
    ?>
    

            
                <div class="all_referenzen martop40">
                    <div id="keine_erg" style="display:none"></div>
            <?php
            for ( $i=0; $i<sizeof($type); $i++ ) {
                $this_logo = $logo[$i];
                if ( $darkmode == "darkmode" ) {
                    $this_logo = str_replace(".", "darkmode.", $logo[$i]);
                }
                ?>
                <div class="referenz_wrap filter_<?php echo $type[$i] ?>">
                    <div class="referenz_wrap_inner">
                        <div class="referenz_file_name">
                            <img style="height:120px" class="darkmode_logo" src="<?php imgSrc($this_logo,'no') ?>" alt="WordPress Blogbeitrag"/>
                            <div class="ref_filename" style="display:none"><?php echo $file_name[$i] ?></div>
                        </div>
                        <div class="referenz_label">
                            <?php get_icon("label",24,"reflabel") ?>
                            <span style="color:var(--txt)"><?php echo $type[$i] ?></span>
                        </div>
                        <h3><?php echo $headlines[$i] ?></h3>
                        <p><?php echo $desc[$i] ?></p>
                    </div>
                    <a href="<?php echo sites("blog") ?>/<?php echo $link[$i] ?>" class="btn button_prim_txt">
                        lesen
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