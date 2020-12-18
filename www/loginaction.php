<?php
include 'util.php';

$err = "test";
$user = $password = $email = "";
$insertFlag = TRUE;
$selectFlag = TRUE;
$con = sqlcon();

if ($_POST["type"] == "create") {
    $selectFlag = FALSE;
    if (empty($_POST["user"])) {
        $insertFlag = FALSE;
        $err = "Username is empty!";
    } else {
        $user = test_input($_POST["user"]);
    }
    if (empty($_POST["password"])) {
        $insertFlag = FALSE;
        $err = "Password is empty!";
    } else {
        $password = test_input($_POST["password"]);
    }
    if (empty($_POST["email"])) {
        $insertFlag = FALSE;
        $err = "Email is empty!";
    } else {
        $email = test_input($_POST["email"]);
    }
}
else if ($_POST["type"] == "login") {
    $insertFlag = FALSE;
    if (empty($_POST["user"])) {
        $selectFlag = FALSE;
        $err = "Username is empty!";
    } else {
        $user = test_input($_POST["user"]);
    }
    if (empty($_POST["password"])) {
        $selectFlag = FALSE;
        $err = "Password is empty!";
    } else {
        $password = test_input($_POST["password"]);
    }
};

if ($insertFlag and !$selectFlag) {
// creat
  register($con, $user, $password, $email);
} else if (!$insertFlag and $selectFlag) {
// login
  login($con, $user, $password);
}  else {
  header('Content-type:application/json;charset=utf-8');
  echo json_encode(array("Flag wrong", $err, $insertFlag, $selectFlag));
  // header('Location: /login.php');
};
  
function login($con, $user, $password)
{
  $query = "SELECT user FROM user WHERE user = '$user' AND password = '$password'";
  $result = $con->query($query);
  $userinfo = $result->fetch_assoc();
  $login = $user."login";
  $logincookies = encrypt($login);
  if (!empty($userinfo)) {
    setcookie ( "username", $user, time () + 3600 * 24);
    setcookie ( "login", $logincookies, time () + 3600 * 24);
    // console_log($logincookies);
    header('Content-type:application/json;charset=utf-8');
    echo json_encode(array("login success", $query));
    // header('Location: /Game.php');
  } else {
    // console_log("wrong");
    // console_log($userinfo);
    // console_log($query);
    $err = "Username or password is wrong!";
    header('Content-type:application/json;charset=utf-8');
    echo json_encode(array("login failed", $err, $query));
  }
};

function register($con, $user, $password, $email)
{
  $find = "SELECT user FROM user WHERE user = '$user'";
  $result = $con->query($find);
  $userinfo = $result->fetch_assoc();
  if (empty($userinfo)) {
    $query = "INSERT INTO user VALUES ('$user', '$password', '$email');";
    $con->query($query);

    $scorequery = "INSERT INTO scores VALUES ('$user', 0);";
    $con->query($scorequery);
    header('Content-type:application/json;charset=utf-8');
    echo json_encode(array("create success", $err, $query));
    // console_log($query);
  } else {
    $err = "User is already existed!";
    // console_log($err);
    // console_log($userinfo);
    // console_log($query);
    header('Content-type:application/json;charset=utf-8');
    echo json_encode(array("create failed", $err, $query));
  }
};

function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
};
?>