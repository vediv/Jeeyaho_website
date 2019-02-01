<?php
    $firstname = htmlspecialchars($_POST["firstname"]);
    $lastname = htmlspecialchars($_POST["lastname"]);
    $password = htmlspecialchars($_POST["password"]);
    echo "firstname: $firstname lastname: $lastname password: $password";
?>
