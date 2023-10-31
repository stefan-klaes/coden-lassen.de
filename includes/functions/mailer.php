<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


/**
 * Summary of sendMail
 * @param mixed $to
 * @param mixed $subject
 * @param mixed $message
 * @param mixed $reply_to
 * @param mixed $reply_to_name
 * @return string
 */


function sendMail($to, $subject, $message, $reply_to, $reply_to_name)
{

    try {

        $directory = str_replace('coden-lassen.de/includes/functions', '', __DIR__);
        $composer_root = $directory . 'stefan-klaes/codenlassen/libs/vendor/autoload.php';

        require $composer_root;

        $secretsInstance = new Secrets();
        $secrets = $secretsInstance->getSecrets();

        $mail = new PHPMailer(true);

        // Server-Konfiguration
        $mail->isSMTP();
        $mail->CharSet = 'UTF-8';
        $mail->Host = $secrets['mail_host'];
        $mail->Port = $secrets['mail_port'];
        $mail->Username = $secrets['mail_address'];
        $mail->Password = $secrets['mail_pass'];
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Absenderinformationen
        $mail->setFrom($secrets['mail_address'], $secrets['mail_from_name']);
        $mail->addReplyTo($reply_to, $reply_to_name);
        $mail->addAddress($to);

        // Inhalte
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;


        $mail->send();
        return 'mail gesendet';

    } catch (Exception $e) {
        return 'Mailer Error: ' . $mail->ErrorInfo;
    }

}

