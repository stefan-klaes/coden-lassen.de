
<?php
$blog_details = get_blog_details($this_blog);

$route = [];
$route['seotitle'] = $blog_details["title"];
$route['seodesc'] = $blog_details["meta_desc"];
$route['seokeywords'] = $blog_details["keywords"];

ob_start();
echo get_icon("arrow_back", 36, "marri10");
$back_icon = ob_get_contents();
ob_end_clean();

$headline = '<a href="' . sites("blog") . '">' . $back_icon . '</a> ' . $blog_details["header_word"];
$route['headline'] = $headline;

$lines_of_code = lines_of_code($blog_details["code"]);

if ( $lines_of_code < 3 ) {
    $zeilen_code_txt = "Der Code:";
}
else {
    $blog_details["tags"][] = $lines_of_code . " Zeilen Code:";
    $zeilen_code_txt = $lines_of_code . " Zeilen Code:";
}

ob_start();

?>
<div class="member_cards">

    <div class="breadcrumps marbo20">
        <a href="<?php echo sites("blog") ?>" class="button_link">Blog</a>
        / <?php echo $blog_details["headline"] ?> 
    </div>

    <div class="row home_bereich" style="margin-bottom:80px;">
        <div class="col-2">
            <h1 class="heross"><?php echo $blog_details["headline"] ?></h1>
            <p class="pheros marbo40">
                <?php echo $blog_details["desc"] ?>
            </p>
            <?php
            foreach ( $blog_details["tags"] as $chip ) {
                ?>
                <div class="chip chipprimopa" style="line-height: 24px;">
                    <?php get_icon("bookmark",24,"inchip") ?>
                    <span><?php echo $chip ?></span>
                </div>
                <?php
            }

            $this_logo = $blog_details["logo"];
                

            $img_alt = str_replace("-", " ", $this_logo);
            $img_alt = explode(".",$img_alt)[0];
            $img_alt = str_replace("darkmode", "", $img_alt);
            
            ?>

            
        </div>
        <div class="col-2" style="position:relative;text-align:center">
            <img class="colimg darkmode_logo" alt="<?php echo $img_alt ?>" src="<?php imgSrc($this_logo,'darkmode') ?>"/>
        </div>
    </div>


    <?php
    $content_path = $blog_details["path"] . "/content";
    $content_htmls = [];
    if ( file_exists($content_path) ) {
        $scan = scandir($content_path);
        foreach ($scan as $content_file) {
            if ( $content_file == "code.txt" ) {
                continue;
            }
            if ( strpos($content_file,".php") > 0 || strpos($content_file,".html") > 0 ) {
                $good = "yes";
            }
            else {
                continue;
            }
            if ( !file_exists($content_file) ) {
                $this_file = $content_path = $blog_details["path"] . '/content/' . $content_file;
                $content_htmls[] = file_get_contents($this_file);

                    foreach ( $content_htmls as $html ) {

                        if ( in_array($this_file,$content_htmls) ) {
                            continue;
                        }
                        ?>
                        <!-- content -->
                        <div class="home_bereich martop40" style="overflow:hidden">
                            <div class="marbo20">
                                <?php
                            include $this_file;
                            $content_htmls[] = $this_file;
                            ?>
                            </div>
                        </div>
                        <!-- END content -->
                        <?php
                    }

            }
        }
    }

    ?>


<?php

            
    $code_path = $blog_details["path"] . "/code.txt";
    if ( file_exists($code_path) ) {
        ?>
    <!-- code -->
    <div class="home_bereich martop40" style="overflow:hidden">

    

        <h2 class="heross marbo40">
            <?php echo $zeilen_code_txt ?>
        </h2>

        
        <div class="code_highlight">
            <?php 
            highlight_file($blog_details["code"]); 
            ?>
        </div>
        <?php
        if ( $lines_of_code > 2 ) {
            ?>
            <a target="_blank" href="/snippet-libary/<?php echo $blog_details["file_name"] ?>" class="martop20 btn button_prim_txt">
                puren Code anzeigen
                <?php get_icon("arrow_right",26,"") ?>
            </a>
            <?php
        }
        ?>
        <?php
        if ( isset($blog_details["github"]) ) {
            ?>
            <a target="_blank" href="<?php echo $blog_details["github"] ?>" class="martop20 btn button_prim_txt">
                Code auf Github ansehen
                <?php get_icon("arrow_right",26,"") ?>
            </a>
            <?php
        }
        ?>


    </div>
    <!-- END code -->
    <?php
    }
    ?>



    <?php
    if ( isset($blog_details["jetzt_anfragen_headline"]) ) {
        $jetzt_anfragen_headline = $blog_details["jetzt_anfragen_headline"];
    }
    if ( isset($blog_details["jetzt_anfragen_body"]) ) {
        $jetzt_anfragen_body = $blog_details["jetzt_anfragen_body"];
    }

        
    //include 'includes/blocks/anfragen.php';
    anfragen_block();
    ?>



</div>



<?php
$other_content = ob_get_contents();
ob_end_clean();
