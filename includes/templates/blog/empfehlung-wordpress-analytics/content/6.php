<h3>Zusätzlich eigene Events per PHP snippet tracken</h3>

<p>
    Ich habe das Plugin so programmiert, dass man zusätzlich per PHP Funktion eigene Events tracken kann, indem man z.B. 
    per Hook die Funktion aufruft. Beispielsweise, wenn ein Formular abgeschickt wird oder etwas in den Warenkorb gelegt 
    wird.
</p>


<div class="bold colprim martop40">Code geht in functions.php des Child Themes</div>
<div class="code_highlight" style="margin-bottom:40px;">
    <?php 
    highlight_file(__DIR__."/codes/code1.txt"); 
    ?>
</div>

<p>
Ein weiteres Beispiel: hier erstellen wir eine serverseitige Action, die das Abschicken des Formulars trackt.
</p>



<div class="bold colprim martop40">Code geht in functions.php des Child Themes</div>
<div class="code_highlight" style="margin-bottom:40px;">
    <?php 
    highlight_file(__DIR__."/codes/code2.txt"); 
    ?>
</div>

