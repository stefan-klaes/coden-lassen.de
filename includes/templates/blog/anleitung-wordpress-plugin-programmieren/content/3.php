<h3>Schritt 3: Inhalte der index.php</h3>
<p>
Fangen wir mit dem leichtesten an. kopiere den folgenden Inhalt in die Datei <b>index.php</b>
</p>
<div class="bold colprim martop40">> index.php</div>
<div class="code_highlight" style="margin-bottom:40px;">
    <?php 
    highlight_string("<?php // Silence is golden"); 
    ?>
</div>
<p>
    Das mag unwichtig aussehen, ist aber sehr wichtig, denn so wird der direkte Aufruf des Ordners verhindert. In einem Ordner 
    wird zuerst die index Datei aufgerufen. Fehlt diese wird eine andere genutzt. Durch diese Datei sichern wir das Plugin 
    vor direkten Aufrufen ab. Selbstverständlich kann hinter dem Doppel-Slash auch ein anderer Kommentar stehen.
</p>