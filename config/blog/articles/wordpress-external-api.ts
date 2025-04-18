export const ARTICLE = `
## WordPress mit externen APIs: Daten dynamisch integrieren

WordPress lässt sich hervorragend mit externen APIs verbinden, um Inhalte und Funktionen zu erweitern. So kannst du z.B. aktuelle Daten von Drittanbietern direkt auf deiner Website anzeigen.

### Warum externe APIs nutzen?

- **Datenaktualität:** Zeige immer aktuelle Informationen an (z.B. Wetter, Kurse, News).
- **Funktionserweiterung:** Nutze Dienste wie Zahlungsanbieter, Newsletter oder Social Media.
- **Benutzerfreundlichkeit:** Biete mehr Interaktionsmöglichkeiten ohne deine Seite zu verlassen.
- **Automatisierung:** Automatisiere Prozesse durch Verknüpfung mit externen Diensten.

### Kostenlose APIs für deine WordPress-Seite

Hier sind einige beliebte kostenfreie APIs, die du in WordPress integrieren kannst:

1. **OpenWeather API**: Aktuelle Wetterdaten und Vorhersagen
2. **JSONPlaceholder**: Test-API für Prototyping
3. **News API**: Aktuelle Nachrichten aus verschiedenen Quellen
4. **Currency Converter API**: Währungskurse in Echtzeit
5. **Unsplash API**: Hochwertige Stockfotos

### Beispiel: API-Anfrage im Backend

\`\`\`php
// Beispiel: Wetterdaten von OpenWeather abrufen
function get_weather_data($city = 'Berlin') {
    $api_key = 'dein_api_key'; // Bitte registriere dich für einen kostenlosen API-Key
    $api_url = 'https://api.openweathermap.org/data/2.5/weather?q=' . $city . '&units=metric&appid=' . $api_key;
    
    $response = wp_remote_get($api_url);
    
    if(is_array($response) && !is_wp_error($response)) {
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body);
        
        if(isset($data->main->temp)) {
            return $data;
        }
    }
    
    return false;
}

// Als Shortcode verwenden
function weather_shortcode($atts) {
    $atts = shortcode_atts(array(
        'city' => 'Berlin',
    ), $atts);
    
    $weather = get_weather_data($atts['city']);
    
    if($weather) {
        $output = '<div class="weather-widget">';
        $output .= '<h3>Aktuelles Wetter in ' . esc_html($atts['city']) . '</h3>';
        $output .= '<p>Temperatur: ' . esc_html($weather->main->temp) . '°C</p>';
        $output .= '<p>Beschreibung: ' . esc_html($weather->weather[0]->description) . '</p>';
        $output .= '</div>';
        return $output;
    } else {
        return 'Wetterdaten konnten nicht abgerufen werden.';
    }
}
add_shortcode('weather', 'weather_shortcode');
\`\`\`

### Frontend-Integration mit JavaScript

Einige APIs eignen sich besonders für die direkte Integration im Frontend:

\`\`\`javascript
// Beispiel: Aktuelle Währungskurse mit fetch API
function displayExchangeRates() {
    const endpoint = 'https://api.exchangerate.host/latest?base=EUR';
    
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const usdRate = data.rates.USD;
                const gbpRate = data.rates.GBP;
                
                document.getElementById('exchange-rates').innerHTML = 
                    '<p>1 EUR = ' + usdRate + ' USD</p>' +
                    '<p>1 EUR = ' + gbpRate + ' GBP</p>';
            }
        })
        .catch(error => console.error('Fehler beim Abrufen der Wechselkurse:', error));
}

// Beim Laden der Seite ausführen
document.addEventListener('DOMContentLoaded', displayExchangeRates);
\`\`\`

### Caching für bessere Performance

Bei häufig verwendeten API-Daten ist Caching essenziell:

\`\`\`php
function get_cached_api_data($city = 'Berlin') {
    // Prüfe zuerst den Cache
    $cache_key = 'weather_data_' . sanitize_title($city);
    $cached_data = get_transient($cache_key);
    
    if (false !== $cached_data) {
        return $cached_data; // Verwende Cache-Daten
    }
    
    // Wenn keine Cache-Daten vorhanden, rufe API ab
    $api_key = 'dein_api_key';
    $api_url = 'https://api.openweathermap.org/data/2.5/weather?q=' . $city . '&units=metric&appid=' . $api_key;
    
    $response = wp_remote_get($api_url);
    
    if(is_array($response) && !is_wp_error($response)) {
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body);
        
        if(isset($data->main->temp)) {
            // Speichere Daten für 1 Stunde im Cache
            set_transient($cache_key, $data, HOUR_IN_SECONDS);
            return $data;
        }
    }
    
    return false;
}
\`\`\`

### Sicherheit beachten

- Prüfe und filtere alle externen Daten mit WordPress-Funktionen wie \`esc_html()\` und \`wp_kses()\`.
- Nutze WordPress-Funktionen wie \`wp_remote_get\` und \`wp_remote_post\` statt direkter HTTP-Anfragen.
- Setze API-Schlüssel niemals direkt im Frontend-Code ein.
- Validiere alle eingehenden Daten, bevor du sie speicherst oder anzeigst.
- Verwende HTTPS für alle API-Anfragen.

### Fehlerbehebung bei API-Integration

- **Rate Limiting**: Beachte die Anfragelimits der APIs und implementiere entsprechendes Caching.
- **CORS-Probleme**: Bei Frontend-Anfragen können Cross-Origin-Probleme auftreten. Verwende in diesem Fall besser Backend-Anfragen.
- **API-Änderungen**: Externe APIs können sich ändern. Baue Fehlerbehandlung ein und teste regelmäßig.

---

Mit externen APIs wird deine WordPress-Seite noch vielseitiger und interaktiver. Die Integration von Echtzeit-Daten verbessert das Nutzererlebnis und erhöht den Mehrwert deiner Website erheblich.
`;
