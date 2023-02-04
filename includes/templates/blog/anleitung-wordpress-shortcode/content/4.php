<h3>Beispiel: WordPress Shortcode mit Platzhalter für das Alter</h3>

<p>
    Angenommen, du möchtest das Alter nicht nur als Zahl ausgeben, sondern innerhalb eines Textes, dann kannst 
    du einen umschließenden Shortcode erstellen. Dieser sieht wie folgt aus:<br>
    <span class="colprim bold">[mein_alter bday="13/01/1993"]Ich bin {alter} Jahre alt.[/mein_alter]</span>
</p>


<div class="bold colprim martop40">Code geht in functions.php des Child Themes</div>
<div class="code_highlight" style="margin-bottom:40px;">
    <?php 
    highlight_file(__DIR__."/codes/bday3.txt"); 
    ?>
</div>



<p class="martop20">
    Nutze den Shortcode wie folgt:<br>
    <span class="bold colprim">[mein_alter bday="13/01/1993"]Ich bin {alter} Jahre alt.[/mein_alter]</span>
</p>
