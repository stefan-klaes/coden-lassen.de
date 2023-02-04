<h3>Beispiel: Daten aus der Datenbank per Ajax anzeigen.</h3>

<p>
    In diesem Beispiel zeige ich wie man per ajax auf die Datenbank in WordPress zugreifen kann und eine Information 
    im Frontend anzeigen kann. Selbstverständlich ohne das Neuladen der Website.
</p>

<h4>
Schritt 1: Forumlar und Javascript per Shortcode bereitstellen
</h4>

<p>
Dieses Mal stellen wir den Javascript Part, sowie das Formular für die Eingabe der Postleitzahl per WordPress Shortcode bereit. Das hat den 
Vorteil, dass es auch wirklich nur ausgeführt wird, wenn der Shortcode auf der Seite eingebaut wurde und nicht wie bei 
"wp_footer" immer im Footer der Website.
</p>


<div class="bold colprim martop40">Code geht in functions.php des Child Themes</div>
<div class="code_highlight" style="margin-bottom:40px;">
    <?php 
    highlight_file(__DIR__."/codes/code3.txt"); 
    ?>
</div>

<p>
<b>Was tut der Code?</b><br>
Wir erstellen einen Shortcode, wie ich es in meinem <a class="button_link" href="<?php echo sites("blog") ?>/anleitung-wordpress-shortcode">Shortcode-Beitrag</a>
 schon einmal beschrieben habe. Der Code verhindert das Absenden des Formulars mit der Klasse "mein-form". Ich habe 
 in dem Beispiel selbst das Formular per html erstellt. Es kann auch ein Formular sein, das durch ein Formular Plugin 
 erstellt wurde. Wichtig ist, dass es die entsprechende Klasse "mein-form" hat. Nach dem Verhindern des Absendens, wodurch 
 das Neuladen der Website verhindert wird. schicken wir unseren ajax request an die action 
 <span class="colprim">berater_anzeigen_ajax</span>, die wir nun in Schritt 2 erstellen werden.
</p>

<h4 class="martop20">
Schritt 2: Per PHP den Berater anzeigen.
</h4>

<p>
    Wir werden nun zuerst die Postleitzahl empfangen und auf Sinnhaftigkeit prüfen. Anschließend werden wir eine Abfrage 
    an die Datenbank durchführen und den entsprechenden Berater finden und zurück an das Frontend geben.
</p>

<div class="bold colprim martop40">Code geht in functions.php des Child Themes</div>
<div class="code_highlight" style="margin-bottom:40px;">
    <?php 
    highlight_file(__DIR__."/codes/code4.txt"); 
    ?>
</div>

<p>
<b>Was tut der Code?</b><br>
Da der Code etwas umfangreicher ist, habe ich es direkt im Code entsprechend kommentiert. Wichtig ist, dass man in der 
WordPress Datenbank auch wirklich eine Tabelle anlegt, damit man auf die Daten zugreifen kann.
</p>


<h3>So kann es mit etwas css gestylt aussehen:</h3>

<div class="ajax_form">
    <div class="mein-form">
        <div onclick="focus_input(this)" class="md_input martop20" style="max-width: 200px">
        <label for="posteitzahl">
            Postleitzahl
        </label>
        <input id="posteitzahl" onchange="this_validated_md(this)" onkeyup="this_validated_md(this)" name="plz" type="number"/>
    </div>
        <div id="berater_btn" onclick="berater_suchen()" style="width:200px;text-align:center" class="martop20 btn button_prim">Berater suchen</div>
    </div>
    <div id="berater_antwort"></div>
</div>

<script>
    function berater_suchen() {

document.getElementById("berater_antwort").innerHTML = "";
document.getElementById("berater_btn").innerHTML = "Suche Berater...";
var plz = document.getElementById("posteitzahl").value;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        setTimeout(function(){ 
            document.getElementById("berater_antwort").innerHTML = xhttp.responseText;
            document.getElementById("berater_btn").innerHTML = "Berater suchen";
        }, 700);
    }
};
var ajax_url = "?type=plz&plz=" + plz;
xhttp.open("GET", "/includes/ajax/ajax.php"+ajax_url, true);
xhttp.send();
}
</script>
