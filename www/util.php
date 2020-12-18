<?php
function sqlcon(){
    $servername = "mysql";
    $username = "php";
    $password = "php";
    $dbname = "project";
    
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // 检测连接
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}

function encrypt($plaintext, $key='keyd0ntgu3ssme') {
    $encryptedText = openssl_encrypt($plaintext, 'aes-128-cbc', $key, $options=0, $iv="3132333435363738");
    return $encryptedText;
}

function decrypt($encryptedText, $key='keyd0ntgu3ssme') {
    $plaintext = openssl_decrypt($encryptedText, 'aes-128-cbc', $key, $options=0, $iv="3132333435363738");
    return $plaintext;
}

function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
  ');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
  }

function islogin() {
    if (empty($_COOKIE['username']) || empty($_COOKIE['login'])) { 
        header("location:login.php");
    } else {
        $plain = decrypt($_COOKIE['login']);
        if ($plain == $_COOKIE['username']."login") {
            return TRUE;
        } else {
            header("location:login.php");
            // console_log("plain:");
            // console_log($plain);
        }
    }
}
?>