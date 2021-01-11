<?php

require "./Models/Student.php";

header("Access-Control-Allow-origin:*"); //Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo json

$students = Student::getAll();

print_r(json_encode($students));
