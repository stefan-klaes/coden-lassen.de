<h3>Beispiel 4/5: Javascript sicher einbinden</h3>

<h4>Die Gefahr:</h4>
<p>
Wenn man Javascript nicht nach WordPress standard einbindet ist es in der Regel wenig risikoreich, jedoch profitiert 
man auch nicht vom Schutz der WordPress Funktionen.
</p>

<h4>Lösung</h4>
<ul>
    <li>WordPress built-in Funktionen wp_enque_scripts nutzen</li>
</ul>


    
<div class="bold colred martop40">Code, der nicht empfohlen ist</div>
<div class="code_highlight" style="margin-bottom:40px;border: 1px solid var(--red);">
    <?php 
    highlight_file(__DIR__."/codes/falsch4.txt"); 
    ?>
</div>

    
<div class="bold colgreen martop40">Code laut WordPress Code Standard</div>
<div class="code_highlight" style="margin-bottom:40px;border: 1px solid var(--green);">
    <?php 
    highlight_file(__DIR__."/codes/korrekt4.txt"); 
    ?>
</div>


<h4>Fazit</h4>
<p>
WordPress bietet hervorragende Funktionen zum Absichern der Ausgabe. Selbstverständlich wird nicht jede Website 
gehackt bzw. kann gehackt werden, die die Ausgabe nicht absichert. Dennoch ist es eine Verbesserung der 
Sicherheit, wenn man escape Funktionen nutzt. Somit sollte man es bei seiner Programmierung beachten und nutzen 
aus meiner Sicht.
</p>
