<?php
require "config.php";

$sql = "SELECT * FROM user";
$result = $conn->query($sql);

$rows = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    $users = array('UserSet' => $rows);
    echo json_encode($users);
  } 

?>