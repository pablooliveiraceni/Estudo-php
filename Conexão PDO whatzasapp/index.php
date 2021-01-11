<?php 
    require "Models/Student.php";

    $students = Student::getAll();

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
     integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" 
     crossorigin="anonymous">
     <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    <title>Recode</title>
</head>
<body>

    <?php require "partials/header.html"?>
     
    <main style="min-heigth: 90vh; height: auto">
    <?php foreach ($students as $student) { ?>
    <div class="card w-50 mx-auto mt-5">
        <div class="card-header">
            <?= $student['name']?>
        </div>
        <div class="card-body">
            lorem ipsum doolor sit amet conscteriu adipisicing elit.
            provindetn neceessitani placeat magni at quisquam,
            aliquam, vel vero dolor quis laudiutm consequutur nobis
            iste magnam odio labore facilis tempora oprion quam.
        </div>
        <div class="card-footer d-flex align-items-center justify-content-end">
            <a style="btn btn-danger" href="https://wa.me/5511963646762">
                <i class="fab fa-whatsapp"> </i>
            </a>
        </div>
    </div>
    <?php } ?>
    <main>       
</body>
</html>