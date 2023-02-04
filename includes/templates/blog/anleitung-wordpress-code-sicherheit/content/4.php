<h3>Beispiel 3/5: Codeausgabe absichern</h3>

<h4>Die Gefahr:</h4>
<ul>
    <li>Website kann gehackt werden</li>
    <li>Fehler im Frontend</li>
    <li>Nicht erreichbarkeit der Seite</li>
</ul>

<h4>Lösung</h4>
<ul>
    <li>WordPress built-in Funktionen zum Absichern nutzen</li>
</ul>


    
<div class="bold colred martop40">Code, der nicht empfohlen ist</div>
<div class="code_highlight" style="margin-bottom:40px;border: 1px solid var(--red);">
    <?php 
    highlight_file(__DIR__."/codes/falsch3.txt"); 
    ?>
</div>

    
<div class="bold colgreen martop40">Code laut WordPress Code Standard</div>
<div class="code_highlight" style="margin-bottom:40px;border: 1px solid var(--green);">
    <?php 
    highlight_file(__DIR__."/codes/korrekt3.txt"); 
    ?>
</div>


<h4>Fazit</h4>
<p>
WordPress bietet hervorragende Funktionen zum Absichern der Ausgabe. Selbstverständlich wird nicht jede Website 
gehackt bzw. kann gehackt werden, die die Ausgabe nicht absichert. Dennoch ist es eine Verbesserung der 
Sicherheit, wenn man escape Funktionen nutzt. Somit sollte man es bei seiner Programmierung beachten und nutzen 
aus meiner Sicht.
</p>
