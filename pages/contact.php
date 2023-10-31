<?php
/**
 * 
 * @route: path="/kontakt" name="kontakt"
 * @headline: Kontakt
 * @seotitle: WordPress Freelancer kontaktieren
 * @seodesc: WordPress Freelancer kontaktieren
 * @seokeywords: wordpress freelancer
 * 
 * navigation data:
 * @navname: Kontakt
 * @navicon: send
 * @navdisplay: main
 * @navmobile: 3:main
 * 
 */

$error = [];

$error_txt = "";
$is_error = "";

// Processing form data when form is submitted
if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {

    $name = isset($_POST["name"]) ? htmlspecialchars( $_POST["name"] ) : "";
    $mail = isset($_POST["mail"]) ? strip_tags( $_POST["mail"] ) : "";
    $betreff = isset($_POST["betreff"]) ? htmlspecialchars( $_POST["betreff"] ) : "";
    $message = isset($_POST["message"]) ? nl2br( strip_tags( $_POST["message"] ) ) : "";
    $datenschutz = isset($_POST["datenschutz"]) ? strip_tags( $_POST["datenschutz"] ) : "";
    

    $is_error = "no";

    if ( $name == "" ) {
        $error["name"] = "Bitte gib einen Namen an.";
        $is_error = "yes";
    }
    if ( $betreff == "" ) {
        $error["betreff"] = "Bitte gib einen Betreff an.";
        $is_error = "yes";
    }
    if ( $mail == "" ) {
        $error["mail"] = "Bitte gib eine E-Mail Adresse an.";
        $is_error = "yes";
    }
    else if ( !is_email($mail) ) {
        $error["mail"] = "Die E-Mail Adresse ist nicht korrekt.";
        $is_error = "yes";
    }
    if ( $message == "" ) {
        $error["message"] = "Bitte schreibe eine Nachricht.";
        $is_error = "yes";
    }
    if ( $datenschutz !== "yes" ) {
        $error["datenschutz"] = "Bitte lies diesen Absatz und stimme zu.";
        $is_error = "yes";
    }
    
    $coreInstance = new Core();

    if ( $is_error == "yes" ) {
        $error_txt = '<span class="sticky_hinweis sticky_error stickyleft">Formular nicht abgeschickt. Überprüfe die Angaben.</span>';
        echo $error_txt;
        ?>
        <script>
            const myTimeout = setTimeout(hide_hinweise, 4000);

            function hide_hinweise() {
                var sticky_hinweis = document.getElementsByClassName("sticky_hinweis");
                for ( i= 0; i<sticky_hinweis.length; i++ ) {
                    sticky_hinweis[i].style.display = "none";
                }
                clearTimeout(myTimeout);
            }
        
        </script>
        <?php
        
        //$coreInstance->tracking($request_url,'event','failed kontaktanfrage');
    }
    else {
        // formular erfolgreich abgeschickt
        
        $headline = "Danke";

        $to = 'stefan@coden-lassen.de';
        $subject = $betreff;
        $reply_to = $mail;
        $reply_to_name = $name;
        sendMail($to, $subject, $message, $reply_to, $reply_to_name);

        //$coreInstance->tracking($request_url,'event','kontaktanfrage');
        // END formular erfolgreich abgeschickt
    }

    


}
// END Form



?>
<script>
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
</script>


    <div class="member_cards">


        <?php
        /* Form nicht abgeschickt */
        if ( $is_error == "" || $is_error == "yes" ) {
        ?>

        <div class="row row1000 home_bereich" style="overflow:hidden">
            <div class="col-2">
                <h1 class="hero">Kontakt aufnehmen!</h1>

                <form action="" method="post" id="kontakt_form" class="flexform">
                    <div class="form_left">

                        <div class="ivorinput">
                            <?php get_icon("person",32,"iniconbox") ?>
                                <div onclick="focus_input(this)" class="md_input martop20 <?php echo !empty($_POST["name"]) ? "md_input_valid" : "" ?>">
                                <label for="name">
                                    Name
                                </label>
                                <input id="name" onchange="this_validated_md(this)" onkeyup="this_validated_md(this)" name="name" type="text" value="<?php echo isset($_POST["name"]) ? $_POST["name"] : "" ?>"/>
                            </div>
                    
                            <?php
                            if ( isset($error["name"]) ) {
                                ?><span class="form_error"><?php echo $error["name"] ?></span><?php
                            }
                            ?>
                        </div>
                        

                        <div class="ivorinput">
                            <?php get_icon("mail",32,"iniconbox") ?>
                            <div onclick="focus_input(this)" class="md_input martop20 <?php echo !empty($_POST["mail"]) ? "md_input_valid" : "" ?>">
                                <label for="mail">
                                    E-Mail Adresse
                                </label>
                                <input id="mail" onchange="this_validated_md(this)" onkeyup="this_validated_md(this)" name="mail" type="email" value="<?php echo isset($_POST["mail"]) ? $_POST["mail"] : "" ?>"/>
                            </div>
                    
                            <?php
                            if ( isset($error["mail"]) ) {
                                ?><span class="form_error"><?php echo $error["mail"] ?></span><?php
                            }
                            ?>
                        </div>

                    </div>

                    
                    <div class="form_right">


                        <div class="ivorinput">
                            <?php get_icon("label",32,"iniconbox") ?>
                            <div onclick="focus_input(this)" class="md_input martop20 <?php echo !empty($_POST["betreff"]) ? "md_input_valid" : "" ?>">
                                <label for="betreff">
                                    Betreff
                                </label>
                                <input id="betreff" onchange="this_validated_md(this)" onkeyup="this_validated_md(this)" name="betreff" type="text" value="<?php echo isset($_POST["betreff"]) ? $_POST["betreff"] : "" ?>"/>
                            </div>
                        
                            <?php
                            if ( isset($error["betreff"]) ) {
                                ?><span class="form_error"><?php echo $error["betreff"] ?></span><?php
                            }
                            ?>
                        </div>


                        <div class="ivorinput hiddensvgico">
                            <?php get_icon("write",32,"iniconbox") ?>
                            <div onclick="focus_input(this)" class="md_input martop20 <?php echo !empty($_POST["message"]) ? "md_input_valid" : "" ?>">
                                <label for="message">
                                    Nachricht
                                </label>
                                <textarea class="kontakt_textarea" id="message" onchange="this_validated_md(this)" onkeyup="this_validated_md(this)" name="message"><?php echo isset($_POST["message"]) ? $_POST["message"] : "" ?></textarea>
                            </div>
                            <?php
                            if ( isset($error["message"]) ) {
                                ?><span class="form_error"><?php echo $error["message"] ?></span><?php
                            }
                            ?>
                        </div>
                    
                

                        <?php
                        $switch_class = "";
                        $datenschutz_val = "no";
                        if ( isset($_POST["datenschutz"]) && $_POST["datenschutz"] == "yes" ) {
                            $switch_class = "switch_yes";
                            $datenschutz_val = "yes";
                        }
                        ?>

                        <div class="ivorinput dis_wrap martop30" style="display:flex;">
                            <div class="switch_datenschutz inline" style="padding-right:20px;">
                            
                                <div id="switch_datenschutz" title="switch_datenschutz" class="switch_bg <?php echo $switch_class ?>" onclick="switch_toggle(this)">
                                    <div class="switch_circle"></div>
                                </div>

                        </div>

                        <input type="hidden" id="hidden_datenschutz" name="datenschutz" value="<?php echo $datenschutz_val ?>"/>

                        <div class="disclaimer inline">
                            Ich habe die <a href="/datenschutz" class="button_link">Datenschutzerklärung</a> zur Kenntnis genommen und stimme zu, dass meine Angaben 
                            und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.
                            <?php
                            if ( isset($error["datenschutz"]) ) {
                                ?><span class="form_error"><?php echo $error["datenschutz"] ?></span><?php
                            }
                            ?>
                        </div>
                    
                </form>
                
            </div>
            </div>

                
           

            <div class="martop40" style="margin-bottom:20px;" onclick="send_form('kontakt_form')">
                <div class="special_hover_btn_big btn_big button_prim">
                    Anfrage senden
                    <?php get_icon("send",26,"iconhell") ?>
                </div>
            </div>

        </div>
                       


    
        <div class="col-2" style="position:relative;">
            <img style="position:absolute;right:-80px" class="rightabimg colimg" alt="WordPress Freelancer Kontakt" src="<?php echo imgSrc('kontakt-aufnehmen.svg','no') ?>"/>
        </div>

        </div>


      
        <!-- allgemein -->
        <div id="allgemein" class="home_bereich martop20" style="background:none;border:none;text-align:center">

                <div class="iconbox iconboxblock martop40" style="line-height: 32px;">
                    <?php get_icon("check_circle",32,"iniconbox") ?>
                    <h3 style="font-size:18px !important;">Antwort innerhalb von max. 48 Std</h3>
                </div>
                <div class="iconbox iconboxblock martop20" style="line-height: 32px;">
                    <?php get_icon("check_circle",32,"iniconbox") ?>
                    <h3 style="font-size:18px !important;">erreichbar unter stefan@coden-lassen.de</h3>
                </div>
                <div class="iconbox iconboxblock martop20" style="line-height: 32px;">
                    <?php get_icon("check_circle",32,"iniconbox") ?>
                    <h3 style="font-size:18px !important;">bitte per Du</h3>
                </div>
            
        </div>
        <!-- allgemein END -->

        <?php
        }
        /* END form nicht abgeschickt */
        


        /* Form werfolgreich abgeschickt */
        if ( $is_error == "no" ) {
        ?>
        <div class="row row1000 home_bereich" style="overflow:hidden">
            <div class="col-2">
                <h2 class="hero">Danke für deine Anfrage, <?php echo $name ?>!</h2>

                <p class="phero">
                    Ich melde mich innerhalb von 48 Stunden bei dir. Ich bin aber meist schneller. 
                    Sollte dir in der Zwischenzeit noch etwas eingefallen sein, kannst du dich natürlich bei mir 
                    melden unter stefan@coden-lassen.de. Vielen Dank und du hörst von mir, Stefan
                </p>

                <a href="<?php echo sites('kontakt') ?>" class="btn button_prim_ol martop20">
                    weitere Anfrage stellen
                    <?php get_icon("mail",26,"colprimhov") ?>
                </a>

            </div>
            <div class="col-2" style="position:relative;">
                <img style="max-height: 320px;position: absolute;bottom: -20px;right:-30px" class="colimg relative_onmobile" alt="Danke für die Anfrage" src="<?php echo imgSrc('codenlassen_dankesehr.svg','no') ?>"/>
            </div>
        </div>
        
        <!-- allgemein -->
        <div id="allgemein" class="home_bereich martop20" style="background:none;border:none;text-align:center">

                <div class="iconbox iconboxblock martop40" style="line-height: 32px;">
                    <?php get_icon("check_circle",32,"iniconbox") ?>
                    <h3 style="font-size:18px !important;">Antwort innerhalb von max. 48 Std</h3>
                </div>
                <div class="iconbox iconboxblock martop20" style="line-height: 32px;">
                    <?php get_icon("check_circle",32,"iniconbox") ?>
                    <h3 style="font-size:18px !important;">erreichbar unter stefan@coden-lassen.de</h3>
                </div>
                <div class="iconbox iconboxblock martop20" style="line-height: 32px;">
                    <?php get_icon("check_circle",32,"iniconbox") ?>
                    <h3 style="font-size:18px !important;">bitte per Du</h3>
                </div>
            

        </div>
        <!-- allgemein END -->
        <?php
        }
        /* END Form werfolgreich abgeschickt */
        ?>


    </div>
