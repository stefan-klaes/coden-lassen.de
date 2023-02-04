<?php
/**
 * Verwaltungsdatei aller globalen angaben:
 * seiten name, logo url, etc
 */


 class Config {

    public function getConfig()
    {

        // Array with global settings
        $config = [
            'sitename' => 'coden lassen',
            'logo' => 'codenlassen-logo.svg',
            'tracking' => true, // true enables tracking function 
            'local_tracking' => false, // true enables tracking function 
        ];

        return $config;
        
    }

 }
