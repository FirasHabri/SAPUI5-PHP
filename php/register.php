<?php
require "config.php";

$name = $_POST['Name'];
$email = $_POST['Email'];
$number = $_POST['Number'];
$dob = $_POST['Dob'];
$country = $_POST['Country'];
$industry = $_POST['Industry'];
$gender = $_POST['Gender'];
$password = $_POST['Password'];

$sql = "INSERT INTO user (name, email, number, dob, country, industry, gender, password) VALUES ('$name', '$email', '$number','$dob', '$country', '$industry','$gender', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
?>