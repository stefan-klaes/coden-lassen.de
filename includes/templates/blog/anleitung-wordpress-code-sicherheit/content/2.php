<h3>Beispiel 1/5: Prüfen & PHP Error vermeiden</h3>

<h4>Die Gefahr:</h4>
<ul>
    <li>Fehler im Frontend</li>
    <li>Nicht erreichbarkeit der Seite</li>
</ul>

<h4>Lösung</h4>
<ul>
    <li>Eingaben prüfen</li>
    <li>Code nur ausführen, wenn die Eingaben stimmen</li>
</ul>


    
<div class="bold colred martop40">Code, der nicht empfohlen ist</div>
<div class="code_highlight" style="margin-bottom:40px;border: 1px solid var(--red);">
    <?php 
    highlight_file(__DIR__."/codes/falsch1.txt"); 
    ?>
</div>

    
<div class="bold colgreen martop40">Code laut WordPress Code Standard</div>
<div class="code_highlight" style="margin-bottom:40px;border: 1px solid var(--green);">
    <?php 
    highlight_file(__DIR__."/codes/korrekt1.txt"); 
    ?>
</div>

<h4>Fazit</h4>
<p>
Code sollte nur ausgeführt werden, wenn alles damit zusammenhängende existiert und sinnvoll ist. Es sollte immer davon 
ausgegangen werden, dass falsche Eingaben vorkommen können, sobald User-Input nötig oder theoretisch möglich ist.
</p>
