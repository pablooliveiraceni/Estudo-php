<?php

require "./Models/Student.php";


$student = new Student;
$student->name = $_POST['name'];
$student->telphone = $_POST['telphone'];
 
$validadte = $student->registerStudent();

if($validadte){
   echo json_encode(true);
} else {
   echo json_encode(false);
}





