<h3>Schritt 5: die eigentliche Programmierung</h3>
<p>
Man könnte den Ordner <span class="bold colprim plugin_slug">[Gib einen Namen an]</span> nun zippen und in WordPress unter 
"Plugins" > "installieren" > "Plugin hochladen" hochladen und hätte ein neues Plugin im WordPress Backend sichtbar. 
Nur hat unser Plugin aktuell noch keine Funktion außer, dass es existiert. Man könnte nun jegliche Funktionen integrieren, 
die sonst z.B. in der functions.php des Child Themes integriert wurden wären.
</p>

<p>
Angenommen wir möchten im Warenkorb eine Anzeige integrieren, die anzeigt wie viel Euro noch bis zum kostenlosen Versand fehlen. 
Hier ein Screenshot:
</p>
<img class="box-shadow-1" style="width: 100%;max-width: 800px;" alt="Woocommerce kostenloser Versand code" src="/static/img/freeshipping-wordpress-code.png"/>
<p>
Hierfür könnten wir in der Datei <span class="bold colprim plugin_file_name">[Gib einen Namen an]</span> folgenden Code unten unter den 
Kommentar "// Ab hier beginnt der eigentliche Code" einfügen:
</p>


<div class="bold colprim">> <span class="plugin_file_name">[Gib einen Namen an]</span></div>
<div class="code_highlight">
    <?php
    highlight_file('code.txt');
    ?>
</div>