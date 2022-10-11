
<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "clients";

	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error){
		die("Connection failed: " . $conn->connect_error);
	}
	if (isset($_POST['submit'])){
	$Name =  $_POST['name'];
	$Email =  $_POST['email'];
	$Subject=$_POST['subject'];
	$Message=$_POST['message'];
	
	}

	$sql = "INSERT INTO clients_details ( Name, Email, Subject, Message)
			VALUES ('$Name', '$Email','$Subject','$Message')";	
		

		if ($conn->query($sql) === TRUE) {
			header('location: welcome.php');
			
		}else
		{
			echo "Error: " . $sql . "<br>" . $conn->error;

		}$conn->close();
?>