<?php
  header("Access-Control-Allow-Origin: *");

  $url = urlencode($_POST['hash']);
  $json = file_get_contents("https://cutt.ly/api/api.php?key=1e8812e03dac0fa8687b9aedfd92490642564&short=$url");
  $data = json_decode ($json, true);
  echo $data["url"]["shortLink"];
?>