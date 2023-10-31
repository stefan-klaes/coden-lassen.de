<?php
/**
 * 
 * @route: path="/" name="home"
 * @headline: Home
 * @seotitle: WordPress Entwickler und Freelancer
 * @seodesc: Individuelle WordPress Programmierungen für Agenturen und Webdesigner
 * @seokeywords: wordpress entwickler, wordpress programmierer
 * 
 * navigation data:
 * @navname: Home
 * @navicon: home
 * @navdisplay: 1:main
 * @navmobile: 1:main
 * 
 */

 ?>

 <div class="member_cards">

 <div class="row home_bereich">
     <div class="col-2">
         <span>Stefan coden lassen.</span>
         <h1 class="hero">WordPress Entwickler</h1>
         <div class="iconbox martop40" style="line-height: 32px;">
             <?php get_icon("check_circle",32,"iniconbox") ?>
             <h3>Individuelle Programmierungen</h3>
         </div>
         <div class="iconbox martop20" style="line-height: 32px;">
             <?php get_icon("check_circle",32,"iniconbox") ?>
             <h3>Entwicklung von Plugins</h3>
         </div>
         <div class="iconbox martop20" style="line-height: 32px;">
             <?php get_icon("check_circle",32,"iniconbox") ?>
             <h3>Kleinere WordPress Codeschnipsel</h3>
         </div>

         <a href="<?php echo sites('kontakt') ?>" class="special_hover_btn martop40 btn button_prim">
             Anfragen
             <?php get_icon("arrow_right",26,"iconhell") ?>
         </a>
     </div>
     <div class="col-2" style="text-align:center">
         <img class="colimg darkmode_logo" alt="WordPress Entwickler Darstellung" src="<?php imgSrc('laptop_codenlassen_home.svg','darkmode') ?>"/>
     </div>
 </div>

 <!-- typing stat -->
 <div class="home_bereich martop40" style="padding-top: 40px;padding-bottom: 40px;">

     <div class="antwort_bubble">
         <div class="antwort_bubble_inner">
         <span id="antwort">...Stelle mir eine Frage.</span>
         </div>
     </div>

     <div class="fragen_wrap">

         <div class="chip chiphov cursor" style="line-height: 24px;" onclick="bubbles_answer('kapas')">
             <?php get_icon("typing",24,"inchip") ?>
             <span>Kapazitäten?</span>
         </div>

         <div class="chip chiphov cursor" style="line-height: 24px;" onclick="bubbles_answer('preise')">
             <?php get_icon("typing",24,"inchip") ?>
             <span>Preise?</span>
         </div>

         <div class="chip chiphov cursor" style="line-height: 24px;" onclick="bubbles_answer('kontakt')">
             <?php get_icon("typing",24,"inchip") ?>
             <span>Kontaktieren?</span>
         </div>

         <div class="chip chiphov cursor" style="line-height: 24px;" onclick="bubbles_answer('agenturen')">
             <?php get_icon("typing",24,"inchip") ?>
             <span>Agenturen?</span>
         </div>

         <div class="chip chiphov cursor" style="line-height: 24px;" onclick="bubbles_answer('ich')">
             <?php get_icon("typing",24,"inchip") ?>
             <span>Über mich?</span>
         </div>

     </div>

 </div>
 <!-- typing END -->


  <!-- leistungen -->
  <div class="home_bereich martop40" style="padding-top: 40px;padding-bottom: 40px;">

     <h2 class="heros">Die folgenden Leistungen biete ich als WordPress Entwickler an.</h2>

     <p>
         Selbstverständlich gehe ich auf individuelle Bedürfnisse ein. Individuelle Umsetzungen 
         lassen sich auf verschiedene Art und Weise umsetzen.
     </p>

     <?php leistungen_cards() ?>

 </div>
 <!-- END leistungen -->

 

 <?php anfragen_block() ?>



 </div>
