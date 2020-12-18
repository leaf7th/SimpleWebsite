<?php
include 'util.php';
islogin();

$name = $_COOKIE['username'];
?>
<!DOCTYPE html>

<html>
<head>
        <link rel="stylesheet" href="./css/style.css">
        <script src="./js/jquery-3.4.1.min.js"></script>
		<script src="./js/script.js"></script>
        <title>Game</title>
</head>

<script>
	$(document).ready(function(){
		$.get("userscore.php", {type:"get"},function(data) {
			console.log(data)
		});
	});
</script>

<body>
	<div class="wrap">
		<div class="header">
			<div class="header_in">
				<div class="user">
					<div class="usershow">Welcome, <span class="username"><?php echo $name?></span></div>
				</div>
				<div class="menu">
					<ul>
						
                        <li>
                            <a href="./Game.php"  class="active">Game</a>
                        </li>
                    
                        <li>
                            <a href="./Scoreboard.php">Scores</a>
                        </li>
                    
                        <li>
                            <a href="./About.php">About</a>
                        </li>
				
					</ul>
				</div>
			</div>
		</div>
		<div class="homeclass">
			<div class="game-page">
				<iframe class="game-page" src="game/game.html"></iframe>
				<!-- frameborder="0" -->
			</div>
		</div>

		<div class="footer">
			<div class="footer_main">
				<div class="footer_right" name="contact">
					<div class="footer_menu">
						Contact me
					</div>
					<div class="small_menu">
						Email
					</div>
					<div class="tel">
						<p>slomo7@outlook.com</p>
					</div>
				</div>
			</div>
			<div class="bottomArea">
				<p>Copyright © Angry Animal 2020</p>
			</div>
		</div>
	</div>
</body>
</html>
