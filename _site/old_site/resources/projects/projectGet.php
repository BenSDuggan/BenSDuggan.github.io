<?php

    //error_reporting(E_ALL);
    //ini_set('display_errors', '1');
    if (!empty($_POST)) {
        $id = $_POST['id'];
        
        $conn = new mysqli('bensduggancom.ipagemysql.com', 'scooby', 'k$?6xD~?GZA`34~g', 'bensduggan');

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 

        $sql="SELECT * FROM projects WHERE id= '$id'";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $row['title'] = htmlspecialchars_decode($row['title']);
            $row['date'] = htmlspecialchars_decode($row['date']);
            $row['collab'] = htmlspecialchars_decode($row['collab']);
            $row['cat'] = htmlspecialchars_decode($row['cat']);
            $row['urls'] = htmlspecialchars_decode($row['urls']);
            $row['des'] = htmlspecialchars_decode($row['des']);
            $row['art'] = htmlspecialchars_decode($row['art']);

            echo 'Success: '.json_encode($row); 
        } else {
            echo "0 results found for project id of ".$id.".";
        }
        
    }
    else {
        echo "Error: No data in \$_POST";
    }

    $conn->close();
?>