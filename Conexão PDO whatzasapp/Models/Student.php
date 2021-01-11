<?php

require "./Connection.php";

class Student 
{
    public $id;
    public $name;
    public $telphone;

    public function getAll()
    {

        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM students");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function getTotalStudents()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT count(*) as total_students from students");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}