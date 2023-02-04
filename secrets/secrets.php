<?php
/**
 * Verwaltungsdatei aller geheimer Informationen wie beispielsweise:
 * Passwörter, Logindaten, API-Schlüssel, ...
 */

class Secrets {

    public function getSecrets() {

        // Array mit Passwörtern und Schlüsseln
        $secrets = [

            //local databsse
            'db_host' => 'localhost',
            'db_user' => 'root',
            'db_password' => '',
            'db_name' => 'databse_name',

            // live database
            'local_db_host' => 'yourhost',
            'local_db_user' => 'youruser',
            'local_db_password' => 'yourpassword',
            'local_db_name' => 'yourdbname',

            // mail settings
            'mail_host' => 'yourmailhost',
            'mail_address' => 'youraddress',
            'mail_from_name' => 'Coden Lassen Anfrag',
            'mail_pass' => 'yourpassword',
            'mail_port' => 'yourport',


        ];
    
        return $secrets;
    
    }

} 

