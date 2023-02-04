<h3>Beispiel: Dynamisches Alter per WordPress Shortcode anzeigen.</h3>

<p>
    Wenn du nicht nur ein Alter angeben möchtest, sondern evtl. mehrere Alter von verschiedenen Geburstagen 
    ausgehend, macht es auf jeden Fall Sinn einen dynamischen Shortcode zu erstellen und nicht 5-100 einzelne. 
    Dafür passen wir den Shortcode oben nur leicht an, sodass man den Geburstag als Attribut eingeben kann.
</p>


<div class="bold colprim martop40">Code geht in functions.php des Child Themes</div>
<div class="code_highlight" style="margin-bottom:40px;">
    <?php 
    highlight_file(__DIR__."/codes/bday2.txt"); 
    ?>
</div>

<p class="desc">
    Die Function "sanitize_text_field()" ist übrigens eine WordPress Funktion, die laut offiziellen Leitfaden genutzt werden 
    solte, wenn man Nutzer Angaben weiter verarbeitet.
</p>

<p class="martop20">
    Nutze den Shortcode wie folgt:<br>
    <span class="bold colprim">[mein_alter bday="13/01/1993"]</span>
</p>
