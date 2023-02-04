<h3>Schritt 1: WordPress Plugin Name</h3>
<p>
    Ein WordPress Plugin besteht mindestens aus einem Ordner und einer Datei. Diese müssen gleich benannt sein. 
    Dein WordPress Plugin sollte einen aussagekräftigen, aber nicht zu langen Namen haben. Für den Ordner und die 
    Datei ist dieser kleingeschrieben und darf Bindestriche enthalten.
</p>
<p>
    Gib einen Namen an:
</p>
<div class="ivorinput">
    <div onclick="focus_input(this)" class="md_input martop20">
        <label for="name">
            Plugin Name
        </label>
        <input id="name" onchange="plugin_name_vali(this);this_validated_md(this)" onkeyup="plugin_name_vali(this);this_validated_md(this)" name="name" type="text"/>
    </div>
</div>
<span class="desc">Bitte keine Zahlen oder Sonderzeichen nutzen</span>

<script>
    function hide_dateicode() {
        document.getElementById("generierte_datei").style.display = "none";
    }
    function text_val(thiss) {
        var new_val = thiss.value; //.toLowerCase();
        var new_val = new_val.replace("-"," ");
        var new_val = new_val.replace("  "," ");
        var new_val = new_val.replace(/[^a-zA-z\s]/g,'');
        thiss.value = new_val;
        document.getElementById("generierte_datei").style.display = "none";
    }
    function plugin_name_vali(thiss) {
        var new_val = thiss.value; //.toLowerCase();
        var new_val = new_val.replace("-"," ");
        var new_val = new_val.replace("  "," ");
        var new_val = new_val.replace(/[^a-zA-z\s]/g,'');
        thiss.value = new_val;
        plugin_name_set('plugin_name',new_val);
        plugin_slug_vali(new_val);
    }
    function plugin_slug_vali(name) {
        var new_val = name.toLowerCase();
        var new_val = new_val.replace(" ","-");
        var new_val = new_val.replace("--","-");
        var new_val = new_val.replace(/[^a-z\s-]/g,'');
        var file_name = new_val + ".php";
        plugin_name_set('plugin_slug',new_val);
        plugin_name_set('plugin_file_name',file_name);
    }
    function plugin_name_set(name,val) {

        var ele = document.getElementsByClassName(name);
        for ( k=0; k<ele.length; k++ ) {
            ele[k].innerHTML = val;
        }
        document.getElementById("generierte_datei").style.display = "none";

    }
</script>