<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";
    

    $mail = new PHPMailer(true); 
    $mail->CharSet = "UTF-8"; 
    $mail->IsHTML(true);    
    // $mail->setFrom('moigosuslugi11@moigosuslugi.store', 'Moi')
   //  Укажите здесь свою почту
    $email = $_POST["currentEmail"];
    $mail->addAddress("zabit.mv@gmail.com");

    if(isset($_POST['currentPhone'])){
      $phone = $_POST["currentPhone"]; 
      $name = $_POST["currentName"]; 
      $email = $_POST["currentEmail"]; 
      $children = $_POST["children"]; 
      $incomeInput = $_POST["incomeInput"]; 
      $familyMembersInput = $_POST["familyMembersInput"]; 
      $hourseSelect = $_POST["hourseSelect"]; 
      $apartamentSelect = $_POST["apartamentSelect"]; 
      $carSelect = $_POST["carSelect"]; 
      $disabled = $_POST["disabled"]; 
      $hourseMetersInput = $_POST["hourseMetersInput"]; 
      $areaMetersInput = $_POST["areaMetersInput"]; 
      $apartmentMetersInput = $_POST["apartmentMetersInput"]; 
      $carYearInput = $_POST["carYearInput"]; 
      $carHourseInput = $_POST["carHourseInput"]; 
      $body = '[Имя]:' . ' ' . $name . "\r\n"
      . '[Номер телефона]:' . ' ' . $phone .  "\r\n"
      . '[Количество детей]:' . ' ' . $children .  "\r\n"
      . '[Общий доход семьи]:' . ' ' . $incomeInput .  "\r\n"
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
      
    // if(isset($_POST['phoneServise'])){
    //   $phone = $_POST["phoneServise"]; 
    //   $nameServise = $_POST["nameServise"]; 
    //   $currentService = $_POST["currentService"]; 
    //   $body = '[номер телефона]:' . ' ' . $phone . "\n"
    //   . '[Имя клиента]:' . ' ' . $nameServise . "\n"
    //   . '[Название услуги]:' . ' ' . $currentService . ' ';
    //   }

   if(isset($_POST["key1"])){
      $type = $_POST["key1"]; 
      $citizenship = $_POST["key2"]; 
      $was = $_POST["key3"]; 
      $work = $_POST["key4"]; 
      $money = $_POST["key5"]; 
      $rejection = $_POST["key6"]; 
      $name = $_POST["key7"]; 
      $email = $_POST["key8"]; 
      $phone = $_POST["key9"]; 
      $country = $_POST["country"]; 
      $body = '[Тип визы]:' . ' ' . $type . "\n"
      . '[Гражданство]:' . ' ' . $citizenship . "\n"
      . '[Визы каких стран у вас были]:' . ' ' . $was . "\n"
      . '[Текущая занятость]:' . ' ' . $work . "\n"
      . '[Деньги на счету]:' . ' ' . $money . "\n"
      . '[Были ли отказы ранее]:' . ' ' . $rejection .  "\n"
      . '[Имя]:' . ' ' . $name .  " \n"
      . '[email]:' . ' ' . $email .  " \n"
      . '[номер телефона]:' . ' ' . $phone .  ' ';
      $theme = '[Заявка c квиза]:' . ' ' . $country;
   }

   $mail->Subject = $theme;
   $mail->Body = $body;

   $mail->send();
   
   include 'amocrm/toamo.php';
