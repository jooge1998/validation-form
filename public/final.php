<?php


if(isset($_POST["btn"])){

    $nick_name = $_POST["nick_name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];

    echo "nick = $nick_name <br> email = $email <br> subject = $subject <br> comments $comments"; 

}

