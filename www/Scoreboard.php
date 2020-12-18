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
        <title>Scoreboard</title>
</head>
<script>
	$(document).ready(function(){
		$.get("userscore.php", {type:"get"},function(data) {
			for (var i=0; i<data.length; i++)
			{ 
				var name = data[i][0];
				var score = data[i][1];
				$("ol > li:nth-child("+(i+1)+") > span.scoreboard_name").text(name + ": ");
				$("ol > li:nth-child("+(i+1)+") > span.scoreboard_score").text(score);
				$("ol > li:nth-child("+(i+1)+")").css("visibility","visible");
			}
		});
	});
	function search(){
		var value = $(".searchtext").val();
		if (value != "") {
			$("ol > li").css("visibility","hidden");
			$.get("userscore.php", {type:"search", name: value},function(data) {
				for (var i=0; i<data.length; i++)
				{ 
					var name = data[i][0];
					var score = data[i][1];
					$("ol > li:nth-child("+(i+1)+") > span.scoreboard_name").text(name + ": ");
					$("ol > li:nth-child("+(i+1)+") > span.scoreboard_score").text(score);
					$("ol > li:nth-child("+(i+1)+")").css("visibility","visible");
				}
			});
		}
	};
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
                            <a href="./Game.php">Game</a>
                        </li>
                    
                        <li>
                            <a href="./Scoreboard.php"  class="active">Scores</a>
                        </li>
                    
                        <li>
                            <a href="./About.php">About</a>
                        </li>
				
					</ul>
				</div>
			</div>
		</div>

		<div class="content">
			<div class="layout-left-nav">
				<h2>Scores</h2>
			</div>
			<div class="layout-right-cont">
				<div class="layoutContent">
					<div class="layoutLeft">
						<div class="layout-content-list">
							<div class="layout-content">
                                <div class="layout_title">
                                    <h2>Scoreboard</h2>
                                </div>
								<div class="layouttext">
									<ol class="scoreboard">
										<li><span class="scoreboard_name">Nook: </span><span class="scoreboard_score">67</span></li>
										<li><span class="scoreboard_name">Nook: </span><span class="scoreboard_score">67</span></li>
										<li><span class="scoreboard_name">Nook: </span><span class="scoreboard_score">67</span></li>
										<li><span class="scoreboard_name">Nook: </span><span class="scoreboard_score">67</span></li>
										<li><span class="scoreboard_name">Nook: </span><span class="scoreboard_score">67</span></li>
										<li><span class="scoreboard_name">Nook: </span><span class="scoreboard_score">67</span></li>
										<li><span class="scoreboard_name">Nook: </span><span class="scoreboard_score">67</span></li>
										<li><span class="scoreboard_name">Nook: </span><span class="scoreboard_score">67</span></li>
										<li><span class="scoreboard_name">Nook: </span><span class="scoreboard_score">67</span></li>
										<li><span class="scoreboard_name">Nook: </span><span class="scoreboard_score">67</span></li>
									</ol>
                                </div>
							</div>
						</div>
					</div>
					<div class="layoutRight">
						<div class="layout-right-top">
							<div class="layout_title">
								<h2>Search</h2>
							</div>
							<div class="search">
								<input type="text" class="searchtext" placeholder="Search for names.." name="searchtext">
								<button class="search_btn" name="searchsubmit" onclick="search()"></button>

							</div>
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
