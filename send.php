<?php
$frm_name  = "Youname";
$recipient = "youmail@ya.ru";
$sitename  = "Название Сайта";
$subject   = "Новая заявка с сайта \"$sitename\"";
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);
$message = "
E-mail: $email <br>
Имя: $name <br>
Телефон: $phone <br>
Сообщение: $message
";
mail($recipient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
