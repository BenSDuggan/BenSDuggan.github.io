<?php

    //error_reporting(E_ALL);
    //ini_set('display_errors', '1');
    if (!empty($_POST)) {
        $id = $_POST['id'];
        $it = $_POST['it']*$id;
        
        $conn = new mysqli('bensduggancom.ipagemysql.com', 'scooby', 'k$?6xD~?GZA`34~g', 'bensduggan');

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 

        $sql="SELECT * FROM (SELECT * FROM projects ORDER BY id DESC LIMIT $id OFFSET $it) sub ORDER BY id DESC";
        
        //$sql="SELECT * FROM projects WHERE id= '$id'";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo 'Success: {';
            $count = 0;
            while($row = $result->fetch_assoc()) {
		$row['title'] = htmlspecialchars_decode($row['title']);
                $row['date'] = htmlspecialchars_decode($row['date']);
                $row['collab'] = htmlspecialchars_decode($row['collab']);
                $row['cat'] = htmlspecialchars_decode($row['cat']);
		$row['urls'] = htmlspecialchars_decode($row['urls']);
                $row['des'] = htmlspecialchars_decode($row['des']);
                $row['art'] = htmlspecialchars_decode($row['art']);

                if($count == 0) {
                    echo '"'.$count.'": ['.json_encode($row).']';
                }
                else {
                    echo ',"'.$count.'": ['.json_encode($row).']';
                }
                $count = $count + 1;
            }
            echo '}';
            
            //echo 'Success: .'.json_encode($row); 
        } else {
            echo "There was some error .".$id.".";
        }
        
    }
    else {
        echo "Error: No data in \$_POST";
    }

    $conn->close();
?>