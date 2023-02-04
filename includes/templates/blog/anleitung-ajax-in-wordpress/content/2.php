<h3>Beispiel: Einfacher ajax request</h3>

<p>
    In diesem Beispiel erkläre ich die Einbindung anhand eines ganz einfachen Beispiels. Der Code fügt im Footer 
    javascript ein mit einer Funktion, die einen ajax request an den Server sendet. Diesen Request empfangen wir 
    in einer PHP Funktion und senden etwas zurück. 
</p>

<h4>
Schritt 1: Javascript in den Footer hinzufügen.
</h4>


<div class="bold colprim martop40">Code geht in functions.php des Child Themes</div>
<div class="code_highlight" style="margin-bottom:40px;">
    <?php 
    highlight_file(__DIR__."/codes/code1.txt"); 
    ?>
</div>

<p>
<b>Was tut der Code?</b><br>
Mit der <span class="colprim">wp_footer</span> hook wird code in den Footer der Website hinzugefügt. In diesem Beispiel der 
Code der Funktion <span class="colprim">codenlassen_ajax_in_footer</span> (Der Name kann frei gewählt werden, es ist zu 
empfehlen einen eindeutigen Namen mit Prefix wie "codenlassen" zu verwenden, damit die Funktion nicht noch einmal vorkommt). 
Der Javascript Code enthält die Funktion <span class="colprim">sag_hallo_javascript_function</span>, die den ajax request 
sendet. Die Funktion <span class="colprim">admin_url('admin-ajax.php')</span> gibt die URL an, die für den ajax request 
verwendet wird (ich habe sie nach WordPress Code standard mit esc_url() eingebunden). die Action in der Javascript Funktion 
mit dem Namen <span class="colprim">sag_hallo_ajax</span> erstellen wir im folgenden PHP Code.
</p>

<h4 class="martop20">
Schritt 2: PHP Funktion erstellen.
</h4>

<p>
    Der in Javascript erstellte ajax request wird an die Action <span class="colprim">sag_hallo_ajax</span> gesendet. Diese 
    erstellen wir laut WordPress Code Standard wie folgt:
</p>

<div class="bold colprim martop40">Code geht in functions.php des Child Themes</div>
<div class="code_highlight" style="margin-bottom:40px;">
    <?php 
    highlight_file(__DIR__."/codes/code2.txt"); 
    ?>
</div>

<p>
<b>Was tut der Code?</b><br>
Kurz vorweg: bitte beachte die Benennung der Funktionen. Der Part <span class="colprim">sag_hallo_ajax</span> muss 
übereinstimmen, damit alles funktioniert. Der Code empfängt den ajax request und sendet ein "Hallo" zurück. 
das <span class="colprim">wp_die()</span> beendet die Funktion. Vergisst man es wird immer eine "0" ("Hallo0") mit zurückgegeben.
</p>

<p>
Die Grundtechnik der Anfrage über eine Javascript Funktion als ajax request an die serverseitige PHP Funktion ist 
erklärt. Gehen wir nun ein sinnvolleres Beispiel an für die Nutzung von ajax in WordPress.
</p>