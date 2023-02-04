<h3>Beispiel 5/5: sichere Datenbankabfragen</h3>

<h4>Die Gefahr:</h4>
<p>
Nicht validierte Datenbankabfragen können dazu führen, dass ungewünschter Code in die Datenbank eingefügt werden kann 
oder ungewünschte Daten ausgelesen werden können.
</p>

<h4>Lösung</h4>
<ul>
    <li>WordPress built-in Funktionen für Datenbankabfragen nutzen</li>
</ul>


    
<div class="bold colred martop40">Code, der nicht empfohlen ist</div>
<div class="code_highlight" style="margin-bottom:40px;border: 1px solid var(--red);">
    <?php 
    highlight_file(__DIR__."/codes/falsch5.txt"); 
    ?>
</div>

    
<div class="bold colgreen martop40">Code laut WordPress Code Standard</div>
<div class="code_highlight" style="margin-bottom:40px;border: 1px solid var(--green);">
    <?php 
    highlight_file(__DIR__."/codes/korrekt5.txt"); 
    ?>
</div>


<h4>Fazit</h4>
<p>
Man sollte immer global $wpdb nutzen und die WordPress prepare Funktion befor man etwas ausliest oder hinzufügt.
</p>
