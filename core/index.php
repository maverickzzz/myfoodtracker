<?php 

$url = explode('/', $_SERVER['PATH_INFO']);
$function = $url[1];
$method = $url[2];

include_once($function . '.php');
$function::$method();

?>