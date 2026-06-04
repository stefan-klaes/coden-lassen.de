import { ProjectDetails } from "../project-details";

const CONFIG: ProjectDetails = {
  task: `Entwicklung einer benutzerfreundlichen WooCommerce-Erweiterung zur Anzeige des Fortschritts zum Erreichen eines versandkostenfreien Warenkorbs. Die Lösung sollte Kunden motivieren, mehr Produkte hinzuzufügen, um die Grenze für kostenlosen Versand zu erreichen.`,

  challenges: [
    "Nahtlose Integration in verschiedene Shop-Designs",
    "Echtzeit-Aktualisierung bei Änderungen am Warenkorb",
    "Berücksichtigung verschiedener Währungen und Versandregeln",
    "Optimierung für mobile Endgeräte",
  ],

  outcomes: [
    "Erhöhter durchschnittlicher Bestellwert durch gezielte Upselling-Anreize",
    "Verbesserte Kundeninteraktion und Kauferlebnis",
    "Reduzierung der Warenkorbabbrüche",
    "Transparenz bei Versandkosten als Faktor der Kundenzufriedenheit",
  ],

  solution: `Die implementierte WooCommerce-Lösung zeigt einen visuell ansprechenden Fortschrittsbalken an prominenten Stellen wie Warenkorb, Produktseiten und Header. Mit AJAX-getriebener Echtzeit-Aktualisierung ohne Seitenneuladen reagiert das System sofort auf Änderungen am Warenkorb. Ein intelligenter Algorithmus berücksichtigt komplexe Versandregeln und bietet personalisierte Produktempfehlungen, um die Versandkostenfreiheit zu erreichen. Das responsive Design passt sich allen Bildschirmgrößen an, während umfangreiche Konfigurationsmöglichkeiten die Anpassung von Design, Position und Messaging ermöglichen. Analytics-Funktionen bieten Einblick in das Kundenverhalten in Bezug auf die Versandkostenschwelle.`,

  technologies: [
    "PHP",
    "WordPress",
    "WooCommerce",
    "JavaScript",
    "AJAX",
    "CSS",
    "Responsive Design",
  ],

  client: "Online-Händler mit WooCommerce-Shop",

  screenshots: [
    {
      src: "/freeshipping-wordpress-code.png",
      type: "screenshot",
      url: "Shop-Frontend",
      alt: "Versandkostenfrei Fortschritt",
      description:
        "Anzeige des Fortschrittsbalkens zur Versandkostenfreiheit im Warenkorb.",
    },
  ],
  code: [
    {
      filename: "free-shipping-progress.php",
      language: "php",
      description: "Hauptklasse für die Versandkostenfrei-Fortschrittsanzeige",
      code: `/**
 * Autor:       www.coden-lassen.de
 * Code:        Anzeige für den kostenlosen Versand im Warenkorb
 * Einbindung:  copy paste in die functions.php des Child-Themes
**/

/* START copy from here for functions.php */

add_filter( 'woocommerce_package_rates', 'codenlassen_hide_if_free_shipping', 10, 2 );
 
function codenlassen_hide_if_free_shipping( $rates, $package ) {
 
    $free = array();
    foreach ( $rates as $rate_id => $rate ) {
        if ( 'free_shipping' === $rate->method_id ) {
            $free[ $rate_id ] = $rate;
            break;
        }
    }
    return ! empty( $free ) ? $free : $rates;
 
}
 
add_action( 'woocommerce_after_cart_totals', 'codenlassen_free_shipping' );
function codenlassen_free_shipping() {
 
    $free_shipping_ab = 99; // dein Wert

    $shipping_total = WC()->cart->get_shipping_total();

    if ( !isset($shipping_total) || !is_numeric($shipping_total)) {
        $shipping_total = 1;
      }
      
    
    if ( $free_shipping_ab > 0 && $shipping_total > 0 ) {
    
        $cart_total = WC()->cart->subtotal;
        $fehlt_betrag = $free_shipping_ab - $cart_total;
        
        $prozent = $cart_total / $free_shipping_ab * 100;
        $prozent = round($prozent);
        
        if ( $fehlt_betrag > 0 ) {
            ?>
            <style>
            .freeshipping_machenlassen_text {
                font-size: 12px;
                display: block;
                text-align: right;
            }
            .freeshipping_machenlassen_text .woocommerce-Price-amount {
                font-weight: normal !important;
                font-size: 12px;
            }
            .freeshipping_machenlassen_noch .woocommerce-Price-amount {
                font-weight: normal !important;
                font-size: 14px;
            }
            .freeshipping_machenlassen {
                margin-top: 20px;
                margin-bottom: 20px;
                display: block;
                font-size: 14px;
            }
            .freeshipping_machenlassen_progress {
                height: 20px;
                background: #eee;
                border: 1px solid #ccc;
                width: 100%;
                display: block;
                border-radius: 4px;
            }
            .freeshipping_machenlassen_progress_bar {
                background: var(--primary-color);
                height: 18px;
                display: block;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                vertical-align: middle;
                display: block;
                text-align: center;
                line-height: 18px;
                color: #fff !important;
                font-size: 12px;
                font-weight: normal;
            }
            </style>
            <div class="freeshipping_machenlassen">
                <span class="freeshipping_machenlassen_noch">Noch <?php echo wp_kses_post( wc_price($fehlt_betrag) ) ?> bis zum kostenfreien Versand.</span>
                <span class="freeshipping_machenlassen_progress">
                <span style="width:<?php echo esc_html( $prozent ) ?>%" class="freeshipping_machenlassen_progress_bar">
                <?php echo esc_html( $prozent ) ?>%
                </span>
                </span>
                <span class="freeshipping_machenlassen_text">kostenfreier Versand ab <?php echo wp_kses_post( wc_price($free_shipping_ab) ) ?></span>
            </div>
            <?php
        }
        else {
            ?>
            <style>
            .woocommerce-shipping-calculator {
                display: none !important;
            }
            </style>
            <?php
        }
        
    }
        
}
        
/* END copy from here for functions.php */`,
    },
  ],
};

export default CONFIG;
