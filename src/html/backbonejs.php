<?php
$ROOT_VENDORS = "../../bower_components/"
?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>01 Backbonejs</title>
		<meta name="description" content="A framework for easily creating beautiful presentations using HTML">
<meta name="author" content="Hakim El Hattab">

<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<link rel="stylesheet" href="<?=$ROOT_VENDORS?>reveal.js/css/reveal.min.css">
<link rel="stylesheet" href="<?=$ROOT_VENDORS?>reveal.js/css/theme/default.css" id="theme">
<link rel="stylesheet" type="text/css" href="../css/main.css">

<!-- For syntax highlighting -->
<link rel="stylesheet" href="<?=$ROOT_VENDORS?>reveal.js/lib/css/zenburn.css">

<!-- If the query includes 'print-pdf', use the PDF print sheet -->
<script>
document.write( '<link rel="stylesheet" href="css/print/' + ( window.location.search.match( /print-pdf/gi ) ? 'pdf' : 'paper' ) + '.css" type="text/css" media="print">' );
</script>

<!--[if lt IE 9]>
<script src="lib/js/html5shiv.js"></script>
<![endif]-->
	</head>
	<body>
		<div class="reveal">
			<div class="slides">
			<?php include("backbonejs.html");?>
			</div>
		</div>
<script src="<?=$ROOT_VENDORS?>reveal.js/lib/js/head.min.js"></script>
<script src="<?=$ROOT_VENDORS?>reveal.js/js/reveal.min.js"></script>
<script src="../js/reveal.conf.js"></script>
	</body>
</html>

