<?php
/**
 * Verwaltungsdatei aller geheimer Informationen wie beispielsweise:
 * Passwörter, Logindaten, API-Schlüssel, ...
 */


class Secrets
{

    public function getSecrets()
    {

        $live_secrets = false;

        // secrets from root
        $directory = explode('coden-lassen.de/', __DIR__);
        if (isset($directory[0])) {
            $secret_root = $directory[0] . 'stefan-klaes/codenlassen/secrets/secrets.php';
            if (file_exists($secret_root)) {
                include $secret_root;
                if (function_exists('stefanklaes_codenlassen_secrets')) {
                    $secrets = stefanklaes_codenlassen_secrets();
                    $live_secrets = true;
                }
            }
        }


        // check if function exists
        if ($live_secrets == false) {
            $secrets = $this->getSecretsLocal();
        }

        return $secrets;

    }


    // local secrets
    public function getSecretsLocal()
    {

        // Array mit Passwörtern und Schlüsseln
        $secrets = [

            //local databsse
            'local_db_host' => 'localhost',
            'local_db_user' => 'root',
            'local_db_password' => '',
            'local_db_name' => 'databse_name',

            // live database
            'db_host' => 'yourhost',
            'db_user' => 'youruser',
            'db_password' => 'yourpassword',
            'db_name' => 'yourdbname',

            // mail settings
            'mail_host' => 'yourmailhost',
            'mail_address' => 'youraddress',
            'mail_from_name' => 'Coden Lassen Anfrage',
            'mail_pass' => 'yourpassword',
            'mail_port' => 'yourport',


        ];

        return $secrets;

    }

}

