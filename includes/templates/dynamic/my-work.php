<?php
$referenz_details = get_referenz_details($this_referenz);

$route = [];
$route['seotitle'] = $referenz_details["title"];
$route['seodesc'] = $referenz_details["meta_desc"];
$route['seokeywords'] = $referenz_details["keywords"];

ob_start();
echo get_icon("arrow_back", 36, "");
$back_icon = ob_get_contents();
ob_end_clean();

$headline = '<a href="' . sites("referenzen") . '">' . $back_icon . '</a> ' . $referenz_details["header_word"];
$route['headline'] = $headline;

$lines_of_code = lines_of_code($referenz_details["code"]);

if ( $lines_of_code < 3 ) {
    $zeilen_code_txt = "Der Code:";
}
else {
    $referenz_details["tags"][] = $lines_of_code . " Zeilen Code:";
    $zeilen_code_txt = $lines_of_code . " Zeilen Code:";
}

ob_start();
?>

<div class="member_cards">

<div class="breadcrumps marbo20">
    <a href="<?php echo sites("referenzen") ?>" class="button_link">Referenzen</a>
        / <?php echo $referenz_details["headline"] ?> 
</div>

    <div class="row home_bereich" style="margin-bottom:80px;">
        <div class="col-2">
            <h1 class="heross"><?php echo $referenz_details["headline"] ?></h1>
            <p class="pheros marbo40">
                <?php echo $referenz_details["desc"] ?>
            </p>
            <?php
            foreach ( $referenz_details["tags"] as $chip ) {
                ?>
                <div class="chip chipprimopa" style="line-height: 24px;">
                    <?php get_icon("bookmark",24,"inchip") ?>
                    <span><?php echo $chip ?></span>
                </div>
                <?php
            }
            ?>

            
        </div>
        <div class="col-2" style="position:relative;text-align:center">
            <img style="margin-bottom:-78px;" class="colimg darkmode_logo" alt="WordPress Referenzen" src="<?php imgSrc('wordpress-programmierung-referenzen.svg','darkmode') ?>"/>
        </div>
    </div>


    <?php
    $img_paths = $referenz_details["path"] . "/imgs";
    $referenz_bilder = [];
    if ( file_exists($img_paths) ) {
        $scan = scandir($img_paths);
        foreach ($scan as $img_file) {
            if ( !file_exists($img_file) ) {
                $referenz_bilder[] = '/includes/templates/my-work/' . $referenz_details["file_name"] . "/imgs/" . $img_file;
            }
        }
    }
    if ( sizeof($referenz_bilder) > 0 ) {
        ?>
        <!-- imgs -->
        <div class="home_bereich martop40" style="overflow:hidden">

        

            <h2 class="heross marbo40">
                Screenshots:
            </h2>

            <?php
            foreach ( $referenz_bilder as $img_path ) {
                $maxwidth = "800px";
                if ( strpos($img_path,"-mobile.") > 0 ) {
                    $maxwidth = "300px";
                }
                $img_alt = str_replace("-", " ", $img_path);
                $img_alt = explode("/imgs/",$img_alt);
                $img_alt = $img_alt[1];
                $img_alt = explode(".",$img_alt)[0];
                ?>
                <div class="referenz_screenshot marbo20">
                    <img style="max-width:<?php echo $maxwidth ?>" alt="<?php echo $img_alt ?>" class="box-shadow-1" src="<?php echo $img_path ?>"/>
                </div>
                <?php
            }
            ?>
        

        </div>
        <!-- END imgs -->
        <?php
    }
    ?>

            
    <!-- code -->
    <div class="home_bereich martop40" style="overflow:hidden">

    

        <h2 class="heross marbo40">
            <?php echo $zeilen_code_txt ?>
        </h2>

        
        <div class="code_highlight">
            <?php 
            highlight_file($referenz_details["code"]); 
            ?>
        </div>
        <?php
        if ( $lines_of_code > 2 ) {
            ?>
            <a target="_blank" href="/snippet-libary/<?php echo $referenz_details["file_name"] ?>" class="martop20 btn button_prim_txt">
                puren Code anzeigen
                <?php get_icon("arrow_right",26,"") ?>
            </a>
            <?php
        }
        ?>
        <?php
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
        ?>


    </div>
    <!-- END code -->


    <?php
    $content_html = $referenz_details["path"] . "/inhalt.html";
    if ( file_exists($content_html) ) {
        ?>
        <!-- content -->
        <div class="home_bereich martop40" style="overflow:hidden">

        <h2 class="heross marbo40">
            Weitere Informationen:
        </h2>

        
        <?php
        include $content_html;
        ?>


        </div>
        <!-- END content -->
        <?php
    }
    ?>


    
    <?php anfragen_block() ?>

</div>

<?php
$other_content = ob_get_contents();
ob_end_clean();
