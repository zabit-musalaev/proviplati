<?php
//$a=1;
    if(isset($_POST['currentPhone'])){
      $phone = $_POST["currentPhone"]; 
      $name = $_POST["currentName"]; 
      $email = $_POST["currentEmail"]; 
      $children = $_POST["Количество детей"]; 
      $incomeInput = $_POST["Общий доход семьи"]; 
      $incomeMiddle = $_POST["Среднедушевой доход семьи"]; 
      $curentPercent = $_POST["Полагается выплата"]; 
      $familyMembersInput = $_POST["Количество членов семьи"]; 
      $hourseSelect = $_POST["Количество домов"]; 
      $apartamentSelect = $_POST["Количество квартир"]; 
      $carSelect = $_POST["Количество машин"]; 
      $disabled = $_POST["Есть ли дети инвалиды"]; 
      $hourseMetersInput = $_POST["Количество метров у дома"]; 
      $areaMetersInput = $_POST["Количество соток у участка"]; 
      $apartmentMetersInput = $_POST["Количество квадратов квартиры"]; 
      $carYearInput = $_POST["Год выпуска машины"]; 
      $carHourseInput = $_POST["Количество л.c"]; 
      $body = '[Имя]:' . ' ' . $name . "\r\n"
      . '[Номер телефона]:' . ' ' . $phone .  "\r\n"
      . '[Среднедушевой доход семьи]:' . ' ' . $incomeMiddle .  "\r\n"
      . '[Количество детей]:' . ' ' . $children .  "\r\n"
      . '[Общий доход семьи]:' . ' ' . $incomeInput .  "\r\n"
      . '[Полагается выплата]:' . ' ' . $curentPercent .  "\r\n"
      . '[Количество членов семьи]:' . ' ' . $familyMembersInput .  "\r\n"
      . '[Количество домов]:' . ' ' . $hourseSelect .  "\r\n"
      . '[Количество метров у дома]:' . ' ' . $hourseMetersInput .  "\r\n"
      . '[Количество соток у участка]:' . ' ' . $areaMetersInput .  "\r\n"
      . '[Количество квартир]:' . ' ' . $apartamentSelect .  "\r\n"
      . '[Количество квадратов квартиры]:' . ' ' . $apartmentMetersInput .  "\r\n"
      . '[Количество машин]:' . ' ' . $carSelect .  "\r\n"
      . '[Количество л.c]:' . ' ' . $carHourseInput .  "\r\n"
      . '[Год выпуска машины]:' . ' ' . $carYearInput .  "\r\n"
      . '[Есть ли дети инвалиды?]:' . ' ' . $disabled .  "\r\n"
      . '[Email]:' . ' ' . $email . ' ';

      $theme = '[Заявка c формы]:';
      }

$to = "zabit.mv@gmail.com"; /*Укажите ваш адрес электоронной почты*/
$headers = "Content-type: text/plain; charset = utf-8"."\r\n". "From:info@proviplati.ru";
$subject = "[Заявка c формы]:";
$message = $body;
$send=mail($to, $subject, $message, $headers);

require_once 'amocrm/toamo.php';

  