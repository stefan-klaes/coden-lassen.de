<h3>Beispiel: Zeige mein Alter per WordPress Shortcode an.</h3>

<p>
    Du möchtest einen Shortcode erstellen, der dein Alter angibt? Die dynamische Bereitstellung von Zahlen bietet offensichtlich 
    den Vorteil, dass man die Zahlen nicht anpassen muss, da sie es von alleine tun. Schauen wir uns den Code an.
</p>


<div class="bold colprim martop40">Code geht in functions.php des Child Themes</div>
<div class="code_highlight" style="margin-bottom:40px;">
    <?php 
    highlight_file(__DIR__."/codes/bday.txt"); 
    ?>
</div>

<p class="desc">
    Die Function "esc_html()" ist übrigens eine WordPress Funktion, die laut offiziellen Leitfaden genutzt werden 
    solte, wenn man etwas ausgibt.
</p>

<p class="martop20">
    Nutze den Shortcode wie folgt:<br>
    <span class="bold colprim">[mein_alter]</span>
</p>

<p class="martop20">Backend Editor (Theme Flatsome)</p>
<img style="max-width:800px;width:100%;" class="box-shadow-1" src="/static/img/wordpress_shortcode_html.png" alt="WordPress Shortcode einfügen"/>

<p class="martop20">Frontend (Website Ansicht)</p>
<img style="max-width:800px;width:100%;" class="box-shadow-1" src="/static/img/wordpress-shortcode-alter.png" alt="WordPress Shortcode Alter"/>


