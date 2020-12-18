<?php
include 'util.php';
$name = $_COOKIE['username'];
$con = sqlcon();

if(isset($_POST)) {
    if ($_POST["type"] == "getscore") {
        // Get highest score from database
        $query = "SELECT scores FROM scores WHERE name = '$name'";
        $result = $con->query($query);
        $score = $result->fetch_assoc();
        echo $score["scores"];
    } else if ($_POST["type"] == "postscore") {
        $score = $_POST["score"];
        $update = "UPDATE scores SET scores = $score WHERE name = '$name'";
        $con->query($update);
        echo "success";
    }
}

if(isset($_GET)) {
    if ($_GET["type"] == "get") {
        // Get highest score from database
        $query = "SELECT * FROM scores ORDER BY scores DESC LIMIT 10";
        $result = $con->query($query);
        $score = $result->fetch_all();
        header('Content-type:application/json;charset=utf-8');
        echo json_encode($score);
    } else if ($_GET["type"] == "search") {
        $search = $_GET["name"];
        $query = "SELECT * FROM scores WHERE name LIKE '%$search%' ORDER BY scores DESC LIMIT 10";
        $result = $con->query($query);
        $score = $result->fetch_all();
        header('Content-type:application/json;charset=utf-8');
        echo json_encode($score);
    }
}

?>