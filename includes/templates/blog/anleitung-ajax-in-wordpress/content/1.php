<h3>Was ist AJAX?</h3>
<p>
    AJAX ist ein leistungsstarkes Werkzeug, das WordPress-Entwicklern ermöglicht, dynamische Inhalte auf 
    Websites <b>ohne das Neuladen</b> der gesamten Seite zu aktualisieren. AJAX kann verwendet werden, um 
    Daten aus einer Datenbank abzurufen, ohne die Seite neu zu laden, um <b>Formulare zu validieren</b> oder um den 
    Inhalt einer Seite mit einem einzigen Klick zu aktualisieren. WordPress bietet sehr gute Möglichkeiten wie man 
    AJAX einbinden kann. In diesem Beitrag gehe ich auf die Möglichkeiten ein.
</p>

<h4 class="martop20">Ajax kann z.B. für eine Beratersuche genutzt werden:</h4>

<div class="ajax_form">
    <div class="mein-form">
        <div onclick="focus_input(this)" class="md_input martop20" style="max-width: 200px">
        <label for="posteitzahlb">
            Postleitzahl
        </label>
        <input id="posteitzahlb" onchange="this_validated_md(this)" onkeyup="this_validated_md(this)" name="plz" type="number"/>
    </div>
        <div id="berater_btnb" onclick="berater_suchenb()" style="width:200px;text-align:center" class="martop20 btn button_prim">Berater suchen</div>
    </div>
    <div id="berater_antwortb"></div>
</div>

<script>
    function berater_suchenb() {

    document.getElementById("berater_antwortb").innerHTML = "";
    document.getElementById("berater_btnb").innerHTML = "Suche Berater...";
    var plz = document.getElementById("posteitzahlb").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            setTimeout(function(){ 
                document.getElementById("berater_antwortb").innerHTML = xhttp.responseText;
                document.getElementById("berater_btnb").innerHTML = "Berater suchen";
            }, 700);
        }
    };
    var ajax_url = "?type=plz&plz=" + plz;
    xhttp.open("GET", "/includes/ajax/ajax.php"+ajax_url, true);
    xhttp.send();
    }
</script>