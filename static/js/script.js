function popup_toggle(ele_id) {
    var bg = document.getElementById("bg");
    var popup = document.getElementById(ele_id);
    if ( popup.className.indexOf("account_popup_active") > -1 ) {
        popup.classList.remove("account_popup_active");
        bg.style.display = "none";
    }
    else {
        popup.classList.add("account_popup_active");
        bg.style.display = "";
    }
}

function close_all_popups() {
    document.getElementById("bg").style.display = "none";

    var all_ele = document.getElementsByClassName("closepopup");
    for ( var i=0; i<all_ele.length; i++ ) {
        all_ele[i].classList.add("popup_closed");
    }
    close_select_team();
    close_alert();
}
function close_alert() {
    document.getElementById("bg").style.display = "none";
    document.getElementById("alert").classList.add("alert_hidden");
    document.getElementById("alert").classList.remove("alert_big");
}

function redirect_to(wohin) {
    
        if ( wohin == "reg" ) {
            try {
                var email = document.getElementById("sign_email").value;
                var email_para = "?email=" + email;
            }
            catch(e) {
                var email_para = "";
            }
            var url = "/registrieren" + email_para;
            window.location.href = url;
        }

    
}

function member_toggle_nav() {
    var der_body = document.getElementById("body");
    if ( der_body.className.indexOf("sidenav_close") > - 1) {
        der_body.classList.remove("sidenav_close");
        deletecookie('sidenav');
    }
    else {
        der_body.classList.add("sidenav_close");
        setcookie('sidenav','sidenav_close',1000);
    }
}


function setcookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getcookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function deletecookie( cname ) {
        document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
        if ( cname == "PHPSESSID" || cname == " PHPSESSID" ) {
            location.reload();
        }
        else {
            try {
                generate_cookie_table();
            }
            catch(e) {
    
            }
        }
  }

  function select_team() {
    var team_sel_i = document.getElementById("team_sel_i");
    var team_popup = document.getElementById("team_popup");
    var bg = document.getElementById("bg");
    if ( team_sel_i.className.indexOf("team_ausgeklappt") > - 1) {
        team_sel_i.classList.remove("team_ausgeklappt");
        team_popup.classList.add("popup_closed");
        bg.style.display = "none";
    }
    else {
        team_sel_i.classList.add("team_ausgeklappt");
        team_popup.classList.remove("popup_closed");
        bg.style.display = "";
    }
  }

  function close_select_team() {
    var team_sel_i = document.getElementById("team_sel_i");
    var team_popup = document.getElementById("team_popup");
    var bg = document.getElementById("bg");
        team_sel_i.classList.remove("team_ausgeklappt");
        team_popup.classList.add("popup_closed");
        bg.style.display = "none";
    
  }


function show_alert(headline,body,sec,prim,func,big) {
    document.getElementById("bg").style.display = "";
    document.getElementById("alert").classList.remove("alert_hidden");
    document.getElementById("alert_head").innerHTML = headline;
    document.getElementById("alert_body").innerHTML = body;
    var loader = '<div class="progress_absolute_no"><div class="progress"><div class="indeterminate"></div></div></div>';
    if ( big == "big" ) {
        document.getElementById("alert").classList.add("alert_big");
    }
    else {
        document.getElementById("alert").classList.remove("alert_big");
    }
    if ( sec == "hide" ) {
        document.getElementById("alert_botton_sec").style.display = "none";
    }
    else {
        document.getElementById("alert_botton_sec").style.display = "";
        document.getElementById("alert_botton_sec").innerHTML = sec;
    }
    document.getElementById("alert_botton_prim").innerHTML = prim;

    document.getElementById("alert_action").value = func;
    document.getElementById("alert_loader").innerHTML = "";
    

    if ( body == "load" ) {
        document.getElementById("alert_footer").style.display = "none";
        document.getElementById("alert_body").innerHTML = loader;
    }
    else {
        document.getElementById("alert_footer").style.visibility = "";
        document.getElementById("alert_footer").style.display = "";
    }
}

function alert_by_key(key) {

    if ( key == "team_tooltip") {
        var headline = "Team Name";
        var body = "Gib den Namen deines Teams an. Dieser erscheint auf dem Spielberichtsbogen. Nutze also bitte den korrekten und vollständigen Namen.";
        var sec = "hide";
        var prim = "okay";
        var func = "close";
        var big = "";
        show_alert(headline,body,sec,prim,func,big);
    }
    else if ( key == "team_short_tooltip") {
        var headline = "Abkürzung für das Team";
        var body = "Gib eine Abkürzung/Kurzform für dein Team ein. Dieser Name wird in diesem Tool beispielsweise oben rechts angezeigt. Beispiele können sein: BATS, FCA, 1SG, usw.";
        var sec = "hide";
        var prim = "okay";
        var func = "close";
        var big = "";
        show_alert(headline,body,sec,prim,func,big);
    }
    else if ( key == "team_klasse_tooltip") {
        var headline = "Spielklasse des Teams";
        var body = "Diese Angabe ist auf dem Spielberichtsbogen vorausgewählt.<br><br>Z.B.: Bezirksliga, Standliga, Kreisliga, Bundesliga, uws.";
        var sec = "hide";
        var prim = "okay";
        var func = "close";
        var big = "";
        show_alert(headline,body,sec,prim,func,big);
    }
    else if ( key == "team_halle_tooltip") {
        var headline = "Halle des Teams";
        var body = "Diese Angabe ist auf dem Spielberichtsbogen vorausgewählt.<br><br>Gib den Namen der Spielhalle gemäß Spielplan an.";
        var sec = "hide";
        var prim = "okay";
        var func = "close";
        var big = "";
        show_alert(headline,body,sec,prim,func,big);
    }
    else if ( key == "team_ort_tooltip") {
        var headline = "Ort der Heimspiele";
        var body = "Diese Angabe ist auf dem Spielberichtsbogen vorausgewählt.<br><br>Z.B.: Hamburg, Duisburg, Henstedt-Ulzburg, usw.";
        var sec = "hide";
        var prim = "okay";
        var func = "close";
        var big = "";
        show_alert(headline,body,sec,prim,func,big);
    }
    else if ( key == "team_teilen_tooltip") {
        var headline = "Verteile Zugriff an andere";
        var body = "Gib E-Mail Adressen an, die ebenfalls dieses Team angezeigt bekommen. Je nach Vergabe der Rolle können die Nutzer das Team verwalten oder lediglich aufschreiben.";
        var sec = "hide";
        var prim = "okay";
        var func = "close";
        var big = "";
        show_alert(headline,body,sec,prim,func,big);
    }
    else if ( key == "spieler_tooltip") {
        var headline = "Spieler hinzufügen";
        var body = "Füge Spieler zu deinem Team hinzu. Diese werden dir beim Aufschreiben direkt angezeigt.";
        var sec = "hide";
        var prim = "okay";
        var func = "close";
        var big = "";
        show_alert(headline,body,sec,prim,func,big);
    }

}


function popup_action() {
    var action = document.getElementById("alert_action").value;

    if ( action == "close" ) {
        close_alert();
    }
    else if ( action == "reload" ) {
        location.reload();
    }
    else if ( action.indexOf("delete_spieler_form_") > -1 ) {
        document.getElementById(action).submit();
    }
    else if ( action.indexOf("delete_nutzer_form_") > -1 ) {
        document.getElementById(action).submit();
    }
    else if ( action.indexOf("sendform") > -1 ) {
        var form_id = action.split(":")[1];
        document.getElementById(form_id).submit();
    }
    else if ( action.indexOf("redirect") > -1 ) {
        var url = action.split(":")[1];
        window.location.href = url;
    }
    

}


function only_letter_no(thiss) {
    var val = thiss.value.replace(/[^a-z0-9]/gi,'');
    thiss.value = val.toUpperCase();
}

function enablesubmit() {
    try {
        var disables = document.getElementsByClassName("btn_disabled");
        for ( i=0; i<disables.length; i++ ) {
            disables[i].classList.remove("btn_disabled");
        }
    }
    catch(e) {

    }
}

        

$(document).ready(function() {
    $("form").submit(function() {
        var save_btn_class = $(this).find("input[type=submit]").attr('class');
        if ( save_btn_class.indexOf("disabled") > -1 ) {
            event.preventDefault();
        }
    });

});
	

function activate_tab(tab,thiss) {

    var all_tabs = document.getElementsByClassName("all_tabs");
    for ( i=0; i<all_tabs.length; i++ ) {
        all_tabs[i].style.display = "none";
    }

    var tab_clicker = document.getElementsByClassName("tab_clicker");
    for ( i=0; i<tab_clicker.length; i++ ) {
        tab_clicker[i].classList.remove("tab_active");
    }

    thiss.classList.add("tab_active");
    document.getElementById(tab).style.display = "";

}


function submit_this_form(thiss) {
    thiss.parentElement.getElementsByClassName("submit_btn")[0].click();
}

function delete_spieler_alert(spieler_name,form_id) {

    var headline = spieler_name + " löschen?";
    var body = "Bitte bestätige, dass du den Spieler <b>" + spieler_name + "</b> löschen möchtest. Damit verbunden wird seine Punkte Historie ebenso gelöscht.";
    var sec = "abbrechen";
    var prim = "löschen";
    var func = form_id;
    var big = "";
    show_alert(headline,body,sec,prim,func,big);

}

function delete_nutzer_alert(spieler_name,form_id) {

    var headline = "Nutzer wirklich löschen?";
    var body = "Bitte bestätige, dass du dem Nutzer <b>" + spieler_name + "</b> den Zugriff zu diesem Team entfernen möchtest.";
    var sec = "abbrechen";
    var prim = "löschen";
    var func = form_id;
    var big = "";
    show_alert(headline,body,sec,prim,func,big);

}

function aufklapp(die_id) {

    var das_ele = document.getElementById(die_id);
    if ( das_ele.className.indexOf("zeroh") > - 1 ) {
        das_ele.classList.remove("zeroh");
    }
    else {
        das_ele.classList.add("zeroh");
    }

} 


function copy_this(thiss) {
       
    var copyText = thiss.getElementsByTagName("Input")[0];
      
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    
    thiss.getElementsByClassName("copy_is")[0].innerHTML = "done";

    setTimeout(copy_weg,2000);

}



function copy_weg() {
    var copy_is = document.getElementsByClassName("copy_is");
    for ( i= 0; i<copy_is.length; i++ ) {
        copy_is[i].innerHTML = "content_copy";
    }
}


function this_el_selected(thiss,key) {
    if ( thiss.className.indexOf("selected_active") > -1 ) {
        thiss.classList.remove("selected_active");
    }
    else {
        thiss.classList.add("selected_active");
    }
    if ( key == "heimteam" ) {
        heimteam_count();
    }
}


function send_form(form_id) {
    document.getElementById(form_id).submit();
    document.getElementById("bg").style.display = "";
}

function confirm_and_link(url) {

    try {
        ajax_save_spielbericht_vorbereitung();
    }
    catch(e) {
        console.log(e);
    }
    

    var headline = "Spielbericht wirklich verlassen?";
    var body = 'Möchtest du den aktuellen Spielbericht wirklich verlassen? Du kannst ihn später fortsetzen.';
    var sec = "bleiben";
    var prim = "verlassen";
    var func = "redirect:" + url;
    var big = "";
    show_alert(headline,body,sec,prim,func,big);

}

function focus_input(thiss) {
    try {
        thiss.getElementsByTagName("input")[0].focus();
    }
    catch(e) {
        thiss.getElementsByTagName("textarea")[0].focus();
    }
    
}

function this_validated(thiss) {

        if ( thiss.value == "" ) {
            thiss.classList.remove("text_validated");
        }
        else {
            thiss.classList.add("text_validated");
        }
    
}

function this_validated_md(thiss) {
        if ( thiss.value == "" ) {
            thiss.parentElement.classList.remove("md_input_valid");
        }
        else {
            thiss.parentElement.classList.add("md_input_valid");
        }
   
}


function bubbles_answer(ask) {

    var ans = "...";

    if ( ask == "kapas" ) {
        var ans = "Ja! Es kommt keine Langeweile bei mir auf, aber ich habe noch Platz für Projekte.";
    }
    else if ( ask == "preise" ) {
        var ans = 'Das kommt komplett auf die Anfrage an. Von 100€ bis +10.000€ ist alles möglich. Zuletzt habe ich i.d.R. zwischen 800€-2.500€ Aufträge abgearbeitet. <a class="button_link" href="/kontakt">Anfragen</a>';
    }
    else if ( ask == "kontakt" ) {
        var ans = 'Nutz am besten mein <a href="/kontakt" class="button_link">Kontaktformular</a>. Ich antworte schnell und zuverlässig.';
    }
    else if ( ask == "agenturen" ) {
        var ans = 'Ja, ich arbeite häufig mit Agenturen zusammen und übernehme die Umsetzung von Sonderfunktionen.';
    }
    else if ( ask == "ich" ) {
        var today = new Date();
        var date = new Date(1993,01,13,0,0,0);
        var difference = (today-date)/(1000*60*60*24*365);
        var alter = Math.floor(difference).toFixed(0);
        var ans = 'Ich bin Stefan, ' + alter + ' Jahre alt, komme aus der Nähe von Hamburg und programmiere gern individuelle Lösungen für WordPress. <a href="/wordpress-freelancer" class="button_link">Erfahre mehr über mich</a>';
    }
    else if ( ask == "kapas" ) {
        var ans = '';
    }
    else if ( ask == "kapas" ) {
        var ans = '';
    }
    else if ( ask == "kapas" ) {
        var ans = '';
    }

    document.getElementById("antwort").innerHTML = ".";
    setTimeout(function(){ document.getElementById("antwort").innerHTML = "."; }, 200);
    setTimeout(function(){ document.getElementById("antwort").innerHTML = ".."; }, 300);
    setTimeout(function(){ document.getElementById("antwort").innerHTML = "..."; }, 400);
    setTimeout(function(){ document.getElementById("antwort").innerHTML = "..." + ans; }, 600);
}


function switch_toggle(thiss) {
 
    if ( thiss.className.indexOf("switch_yes") > - 1 ) {
        thiss.classList.remove("switch_yes");
        var switch_active = "no";
    }
    else {
        thiss.classList.add("switch_yes");
        var switch_active = "yes";
    }
 
    var title = thiss.title;
 
    if ( title.indexOf("datenschutz") > -1 ) {
        if ( switch_active == "yes" ) {
            document.getElementById("hidden_datenschutz").value = "yes";
        }
        else {
            document.getElementById("hidden_datenschutz").value = "no";
        }
        
 
    }
 
}

function darkmode() {
    var element = document.body;
    if ( element.className.indexOf("darkmode") > -1 ) {
        element.classList.remove("darkmode");
        deletecookie('darkmode');
        document.getElementById("span_darkmode").style.display = "";
        document.getElementById("span_lightmode").style.display = "none";
        var img_src = document.getElementsByClassName("darkmode_logo");
        for ( i=0; i<img_src.length; i++ ) {
            var old_src = img_src[i].src;
            var new_src = old_src.replace("darkmode.svg",".svg");
            img_src[i].src = new_src;
        }
    }
    else {
        element.classList.add("darkmode");
        setcookie('darkmode','darkmode',1000);
        document.getElementById("span_darkmode").style.display = "none";
        document.getElementById("span_lightmode").style.display = "";
        var img_src = document.getElementsByClassName("darkmode_logo");
        for ( i=0; i<img_src.length; i++ ) {
            var old_src = img_src[i].src;
            var new_src = old_src.replace(".svg","darkmode.svg");
            img_src[i].src = new_src;
        }
        
    }
    close_all_popups();
    
 }

 function open_mobile_menu() {

    var mobile_menu_popup = document.getElementById("mobile_menu_popup");
    if ( mobile_menu_popup.className.indexOf("popup_closed") > -1 ) {
        mobile_menu_popup.classList.remove("popup_closed");
        document.getElementById("bg").style.display = "";
    }
    else {
        mobile_menu_popup.classList.add("popup_closed");
        document.getElementById("bg").style.display = "none";
    }
    

 }

 function referenz_filter() {

    var filter = ["snippet","plugin","offizielles_plugin"];

    for ( k=0; k<filter.length; k++ ) {

        try {
            var switch_id = "switch_" + filter[k];
            var switch_ele = document.getElementById(switch_id);
            var cat_class = "filter_" + filter[k];
            var category = document.getElementsByClassName(cat_class);
            if ( switch_ele.className.indexOf("switch_yes") > - 1 ) {
                for ( i= 0; i<category.length; i++ ) {
                    category[i].style.display = "";
                }
            }
            else {
                for ( i= 0; i<category.length; i++ ) {
                    category[i].style.display = "none";
                }
            }
        }
        catch(e) {

        }

    }

    var hidden_anz = 0;
    var referenz_wrap = document.getElementsByClassName("referenz_wrap");
    var total_anz = referenz_wrap.length;
    for ( i= 0; i<referenz_wrap.length; i++ ) {
        if ( referenz_wrap[i].style.display == "none" ) {
            var hidden_anz = hidden_anz + 1;
        }
    }

    var visible_anz = total_anz - hidden_anz;
    if ( visible_anz == 0 ) {
        document.getElementById("keine_erg").style.display = "";
        document.getElementById("keine_erg").innerHTML = 'Keine Ergebnisse. <span class="button_link_prim_ul" onclick="all_switches_yes();referenz_filter()">Entferne die Filter</span> und lasse dir mindestens eine der ' + total_anz + ' Referenzen anzeigen.';
    }
    else {
        document.getElementById("keine_erg").style.display = "none";
    }

 }


 function blog_filter() {

    var filter = ["anleitung","beitrag"];

    for ( k=0; k<filter.length; k++ ) {

        try {
            var switch_id = "switch_" + filter[k];
            var switch_ele = document.getElementById(switch_id);
            var cat_class = "filter_" + filter[k];
            var category = document.getElementsByClassName(cat_class);
            if ( switch_ele.className.indexOf("switch_yes") > - 1 ) {
                for ( i= 0; i<category.length; i++ ) {
                    category[i].style.display = "";
                }
            }
            else {
                for ( i= 0; i<category.length; i++ ) {
                    category[i].style.display = "none";
                }
            }
        }
        catch(e) {

        }

    }

    var hidden_anz = 0;
    var referenz_wrap = document.getElementsByClassName("referenz_wrap");
    var total_anz = referenz_wrap.length;
    for ( i= 0; i<referenz_wrap.length; i++ ) {
        if ( referenz_wrap[i].style.display == "none" ) {
            var hidden_anz = hidden_anz + 1;
        }
    }

    var visible_anz = total_anz - hidden_anz;
    if ( visible_anz == 0 ) {
        document.getElementById("keine_erg").style.display = "";
        document.getElementById("keine_erg").innerHTML = 'Keine Ergebnisse. <span class="button_link_prim_ul" onclick="all_switches_yes();blog_filter()">Entferne die Filter</span> und lasse dir mindestens einen der ' + total_anz + ' Blogbeiträge anzeigen.';
    }
    else {
        document.getElementById("keine_erg").style.display = "none";
    }

 }

 function all_switches_yes() {

    var switch_bg = document.getElementsByClassName("switch_bg");
    for ( i= 0; i<switch_bg.length; i++ ) {
        if ( switch_bg[i].className.indexOf("switch_yes") == -1 ) {
            switch_bg[i].classList.add("switch_yes");
        }
    }

 }