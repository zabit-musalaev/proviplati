<?php 
header('Content-Type: text/html; charset=utf-8');
echo 'ok';
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('log_errors', 'On');
ini_set('error_log', 'php_errors.txt');

$time = date("d.m H:i");

$data = $_POST;
file_put_contents("leads.txt", $time." ".print_r($data, true)."".PHP_EOL, FILE_APPEND);
require_once "ebAmocrmClient.php";

$resp_user = '9023134';
$status_id = '53747490';
define('AC_PHONE_CID', '376287');
define('AC_EMAIL_CID', '376289');

$config = array(
    'secret_key' => "stgrxIekmWmjnz0MRDKAzx0q4hI2cb4OCZuWswDOswl8TRqWDRmAiwWKP9f4smIN", 
    'intagration_id' => "4b2ff46c-d3dd-406b-a61c-2e30e5b5e1d2", 
    'client_domen' => "zabitmusalaev", 
    'redirect_uri' => "https://proviplati.ru/amocrm/toamo.php",  
    'auth_token' => "def5020087b75336add9e5fdf85d6a347938683095e6ca2d5df3f8548b46df4ae9dbd4d28b6e7e1c2a27cd83ce3024165b51332ec5e3ba5482bd3a1162d9b8400010de177d88fef890a93d86f948684e62ab004ff206d16e7f5b058b1edd669caf216cc13652665cf301fb3ca76f6dead70e1046306e610d8f453ebf4fb2e1a12627ac41c10b9168246156cfc6d1119e12e6e90ab6a5be9d6a3996711d16a7acaea40d05908eb41ef061298341b8ad5a2e62100150573279e474330b852872e288468ff0f3cf2bbdf9cbed437058ac41f724ec9b5f3a71d28542979eff12e08d3656aa3592a574038a6fa1b35b64c0777179f3f9223b9b661cf35a2ca2ddc4531c3a24e34afa3d3a8951866183fa95217d9bc6250d684a652af86ab628f3991f5c16b88a5d9bdf99f4a59f4c4b4aef3f4848d711654a14818ea640f2588563281c4ccf412a1f49b088d40c4e05c3ade25cf343622e2ceac540828b0a492a593a2833930fc71ba0d3619942f4e1b65e4288fa6b7ddf729e06fd05df84e2135200fa1ae6d5f32b9a0f8261435e10158208937d166406a74e62430ae319d99dfa576ac9fe68ea8ebc1a7fbb2ab655e4b2864cd9439aa7b6d3421cc08c24e2416f33d21b5b85b9f35695990f0bb3691db9ae71638b31ccd1ab067c3e76a14af2d2aa1170e20e5ed9375b29c6002c1bff772648f6844027c1a43a" //auth токен    
);


$sitename = 'proviplati.ru';
if(isset($data['currentPhone']))$phoneQ = $data['currentPhone'];
if(isset($data['currentEmail']))$email = $data['currentEmail'];
if(isset($data['currentName']))$name = $data['currentName'];
$phone = preg_replace("/[^0-9]/", '', $phoneQ);



if($a=='1'){
    $phone = '351246575335353';
$email = '232@ds.sd';
$name ='test';
}

if (isset($_COOKIE['utm_source'])) {$utm_source = $_COOKIE['utm_source'];}
if (isset($_COOKIE['utm_medium'])) {$utm_medium = $_COOKIE['utm_medium'];}
if (isset($_COOKIE['utm_campaign'])) {$utm_campaign = $_COOKIE['utm_campaign'];}
if (isset($_COOKIE['utm_content'])) {$utm_content = $_COOKIE['utm_content'];}
if (isset($_COOKIE['utm_term'])) {$utm_term = $_COOKIE['utm_term'];} 
$amo = new EbClientAmocrm($config['secret_key'], $config['intagration_id'], $config['client_domen'], $config['redirect_uri'], $config['auth_token']);

if($phone||$email){
function get_contact(){
    // 143 - отказ   142 - успешно 
    global $amo, $phone, $name,$email,$resp_user,$openlead;
    $contact = $amo ->get_contacts_by_pnone($phone)[1]['_embedded']['items'][0]; //получаем контакт через телефон
   if(!$contact&&$email) $contact = $amo ->get_contacts_by_email($email)[1]['_embedded']['items'][0]; //получаем контакт через емайл

    if(!$contact){
        $contact_config = array(
            'name' => $name,
            'responsible_user_id' => $resp_user,
            'custom_fields' => [
                [
                    'id' => AC_PHONE_CID,
                    'value' => $phone,
                    'enum' => 'WORK'
                ],
                   [
                    'id' => AC_EMAIL_CID,
                    'value' => $email,
                    'enum' => 'WORK'
                ]
            ]
        );
        $c = $amo -> create_contact($contact_config);
        return $c[1]['_embedded']['items'][0]['id'];
    }else{

               $leads = $contact['leads']['id']; // все сделки контакта
               print_r($leads);
        $completed = true;
        foreach($leads as $i){
            $status = $amo->get_leads($i)[1]['_embedded']['items'][0]['status_id'];
            $foundlead = $amo->get_leads($i)[1]['_embedded']['items'][0]['id'];

             //'Статус ' .print_r($status)."<br>";
            if($status != '143' && $status != '142'){
                //сделка уже существует 
                $completed = false;
				$openlead = $foundlead;
                echo $status."<br>";
 				echo "Открытый лид ".$openlead."<br>";
            }
        }
        if($completed){ //если у контакта нет текущих сделок
            echo "1"; 
            return $contact['id'];
        }else{
            echo "2";
            return false;
        }
    }
}


echo "<pre>";
$contact_id = get_contact();


if($contact_id){

    $lead_config = array(
        'contacts_id' => array($contact_id),
        'name' => 'Заявка с сайта ' .$sitename,
        'responsible_user_id' => $resp_user,
        'status_id' => $status_id,
        'tags' => 'ЗАЯВКА С САЙТА',
        'custom_fields' => [
          
            ['id' => 376301,'value' => $utm_source],
            ['id' => 376297,'value' => $utm_medium],
            ['id' => 376299,'value' => $utm_campaign],
            ['id' => 376295,'value' => $utm_content],
            ['id' => 376303,'value' => $utm_term],
        ]
    );
    $lead = $amo->create_lead($lead_config);
    echo $newlead;
    //print_r($test->get_leads());

    //$lead = $amo ->get_contacts_by_pnone($phone)[1]['_embedded']['items'][0]['leads']['id'][0]; 
// 7. примечание

	$note['text'] = 'Заявка с сайта: '.$sitename."\n";
    	foreach ($data as $key => $value){
        $e = true;
        if ( $key=='ga' || $key=='visitor_uid' || $key=='client_uid' || $key=='subscribe')     { $e = false; }
        // 
        if ($e) {

		$note['text'].=$key.': '.$value."\n";
	}
}

    $amo->create_note($lead, $note['text']);

}else{
   // $lead = $amo ->get_contacts_by_pnone($phone)[1]['_embedded']['items'][0]['leads']['id'][0]; 
   // $new_lead_id_status =  AC_STATUS_CID; //id статуса новой сделки
   // $leads['update'] = array([
   //     'updated_at' => strtotime("now"),
   //     'id' => $lead,
   //     'status_id' => $new_lead_id_status,
   // ]);
   // $amo->update_lead($lead, $leads);
    $note['text'] .= 'Повторная заявка с сайта ' .$sitename."\r\n";
    	foreach ($data as $key => $value){
        $e = true;
        if ( $key=='ga' || $key=='visitor_uid' || $key=='client_uid' || $key=='subscribe')     { $e = false; }
        // 
        if ($e) {

		$note['text'].=$key.': '.$value."\n";
	}
}
    $amo->create_note($openlead, $note['text']);

    $tasks['add'] = array(
        #Привязываем к сделке
        array(
            'element_id' => $openlead, #ID сделки
            'element_type' => 2, #Показываем, что это - сделка, а не контакт
            'task_type' => 3, 
            'text' => 'Проверить повторную заявку'
        )
    );
    $amo->create_task($tasks);
}
}
