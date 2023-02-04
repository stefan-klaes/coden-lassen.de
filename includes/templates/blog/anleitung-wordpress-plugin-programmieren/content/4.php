<h3>Schritt 4: Inhalt der Plugin Hauptdatei</h4>
<p>
Diese Datei sollte deutlich mehr Inhalt bieten als die index.php, denn diese Datei wird aufgerufen, wenn dein Plugin aufgerufen 
wird. Also bei jedem Laden der Seite. Fangen wir mit allgemeinen Angaben an:
</p>

<div class="ivorinput">
    <div onclick="focus_input(this)" class="md_input martop20" style="max-width:800px">
        <label for="plugin_desc">
            Plugin Beschreibung
        </label>
        <textarea class="kontakt_textarea" style="width:100%;height:60px" id="plugin_desc" onchange="text_val(this);this_validated_md(this)" onkeyup="text_val(this);this_validated_md(this)"></textarea>
    </div>
</div>
<span class="desc">Beschreibe in 1-2 Sätzen die Funktion des Plugins</span>

<div class="ivorinput">
    <div onclick="focus_input(this)" class="md_input martop40" style="max-width:800px">
        <label for="author">
            Autor
        </label>
        <input id="author" onchange="text_val(this);this_validated_md(this)" onkeyup="text_val(this);this_validated_md(this)" name="name" type="text"/>
    </div>
</div>
<span class="desc">Dein Name</span>

<div class="ivorinput">
    <div onclick="focus_input(this)" class="md_input martop40" style="max-width:800px">
        <label for="website">
            Autor URI
        </label>
        <input id="website" onchange="hide_dateicode();this_validated_md(this)" onkeyup="hide_dateicode();this_validated_md(this)" name="name" type="text"/>
    </div>
</div>
<span class="desc">Deine Website</span>

<div onclick="generate_plugin_datei()" class="btn button_prim martop40">Datei generieren</div>

<div id="generierte_datei" style="display:none;margin-bottom:40px;">
    <div class="bold colprim martop40">> <span class="plugin_file_name">[gib einen Namen an]</span></div>
    <div class="code_highlight">
        <span id="answer_code"></span>
    </div>
</div>

<p style="margin-top:60px">
Mit diesen Angaben wird das Plugin im Backend unter einem vernünftigen Namen gefunden und man sieht eine 
Beschreibung, sowie die Herkunft des Plugins. Grundsätzlich kann man weitere Angaben hinterlegen. Hier 
ein Beispiel wie der Beginn meines Plugins <a href="/referenzen/plugin-simplest-analytics" target="_blank" class="button_link">Simplest Analytics</a> aussieht:
</p>

<?php
$code_sa = '
<?php
/**
 * Welcome to Simplest Analytics
 *
 *
 * @link              https://www.coden-lassen.de
 * @since             1.0.0
 * @package           Simplest_Analytics
 *
 * @wordpress-plugin
 * Plugin Name:       Simplest Analytics
 * Plugin URI:        https://www.coden-lassen.de
 * Description:       Serverside and cookieless webanalytics.
 * Version:           1.0.0
 * Author:            Stefan Klaes
 * Author URI:        https://www.coden-lassen.de/wordpress-freelancer
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       simplest-anlytics
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( "WPINC" ) ) {
	die;
}

// Ab hier beginnt der eigentliche Code
';

?>
<div class="bold colprim">> <span class="">simplest-analytics.php</span></div>
<div class="code_highlight">
    <?php
    highlight_string($code_sa);
    ?>
</div>


<script>
    function generate_plugin_datei() {
        document.getElementById("generierte_datei").style.display = "";

        var plugin_name = document.getElementsByClassName("plugin_name")[0].innerHTML;
        var plugin_desc = document.getElementById("plugin_desc").value;
        var author = document.getElementById("author").value;
        var website = document.getElementById("website").value;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("answer_code").innerHTML = xhttp.responseText;
            }
        };
        var ajax_url = "?type=plugin&website=" + website;
        var ajax_url = ajax_url + "&author=" + author;
        var ajax_url = ajax_url + "&plugin_desc=" + plugin_desc;
        var ajax_url = ajax_url + "&plugin_name=" + plugin_name;
        xhttp.open("GET", "/includes/ajax/ajax.php"+ajax_url, true);
        xhttp.send();
    }
</script>