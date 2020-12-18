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
        <title>About</title>
</head>

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
                            <a href="./Game.php">Game</a>
                        </li>
                    
                        <li>
                            <a href="./Scoreboard.php">Scores</a>
                        </li>
                    
                        <li>
                            <a href="./About.php" class="active">About</a>
                        </li>
				
					</ul>
				</div>
			</div>
		</div>

		<div class="content">
			<div class="layout-left-nav">
                <h2>About</h2>
			</div>
			<div class="layout-right-cont">
				<div class="layoutContent">
					<div class="layoutLeft">
						<div class="layout-content-list">
							<div class="layout-content">
                                <div class="layout_title">
                                    <h2>About developer</h2>
                                </div>
								<div class="layouttext">
                                    <p>Hi there 👋</p>
									<p>I'm Yawei Yang, interested in games and programming.</p>
									<ul>
										<li>🚍 I’m currently working on: <span class = "learning">student</span></li>
										<li>🌱 I’m currently learning: <span class = "learning">C++, Linux</span></li>
										<li>🎮 Add me as a friend: <span class = "learning">https://steamcommunity.com/id/divinook/</span> </li>
										<li>📧 Contact me: <span class = "learning">slomo7@outlook.com</span></li>
									</ul>
                                </div>
							</div>
						</div>
					</div>
					<div class="layoutRight">
						<div class="layout-right-top">
							<div class="layout_title">
								<h2>Avatar</h2>
							</div>
							<img src="./images/avatar.jpg" class="avatar" alt="avatar">
						</div>
					</div>
				</div>
			</div>
			<div class="clear"></div>
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
