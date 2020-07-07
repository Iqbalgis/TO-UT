<!DOCTYPE html>
<html>
<head>
	<title>Rekursif</title>
</head>
<body>
<script type="text/javascript">
	function a(c) {
		if (c===0)return;
		document.write(c+"<br>");
		return a(c-1);
	}
	a(10);
</script>
</body>
</html>