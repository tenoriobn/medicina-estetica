<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
  }

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  }

  exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['message' => 'Method Not Allowed']);
  die();
}

function parseFieldName(string $fieldName) {
  $array = ['name' => "Nome", 'email' => 'Email', 'budget' => 'Orçamento', 'interest' => 'Interesse', 'phone' => 'Telefone'];
  return $array[$fieldName];
}

function generateEmailText($fields) {
  $text = '';
  $validFields = ['name', 'email', 'phone', 'budget', 'interest'];
  for ($index = 0; $index < count($validFields); $index += 1) {
    $current = $validFields[$index];
    if (isset($fields[$current])) {
      $formField = $fields[$current];
      if (is_array($formField)) {
        $str = '';
        for($i = 0; $i < count($formField); $i += 1) {
          if ($i === count($formField) - 1) {
            $str .= $formField[$i] . ".\n";
          } else {
            $str .= $formField[$i] . ", ";
          }
        }
        $text .= parseFieldName($current) . ': ' . $str;
        continue;
      }
     $text .= parseFieldName($current) . ': ' . $formField . "\n";
    } else {
      continue;
    }
  }
  if ($text === '') {
    http_response_code(400);
    die(json_encode(['message' => 'All fields are empty']));
  }
  return $text;
}

$curl = curl_init();

$fields = json_decode(file_get_contents('php://input'), true);
$email = $fields['email'] ?? null;
$text = generateEmailText($fields);
$subject = "Formulário Site BeCoders";

$body = [
  'from' => [
    'email' => 'mailtrap@becoders.com.br',
    'name' => 'Mailtrap'
  ],
  'to' => [
    // ['email' => 'lql.sol.fin@lqlsolucoes.com.br'],
    ['email' => 'becoders14@gmail.com'],
  ],
  'subject' => $subject,
  'text' => $text,
];
$url = 'https://sandbox.api.mailtrap.io/api/send/3201877';
$token = 'ef08b8b619656c5491df0a70efee40fa';

// $url = "https://send.api.mailtrap.io/api/send"; // prod
// $token = "c55604757c46e02c33b9a83c8ef674ec"; // prod

curl_setopt_array($curl, [
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode($body),
  CURLOPT_HTTPHEADER => [
    "Accept: */*",
    "Authorization: Bearer $token",
    "Content-Type: application/json",
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  http_response_code(500);
  echo json_encode(['message' => 'Internal Error']);
} else {
  echo json_encode(['success' => 'Success']);
}
