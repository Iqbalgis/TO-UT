<!DOCTYPE html>
<html lang="en">
<head>
    <title>Soal 1</title>
</head>
<body>
    <script>
        var nilai = prompt("menentukan grade dari suatu masukan angka");
        var grade = "";

        if(nilai >= 90) grade = "A"
        else if(nilai >= 80) grade = "B"
        else if(nilai >= 70) grade = "C"
        else if(nilai >= 60) grade = "D"
        else if(nilai >= 50) grade = "E"
        else grade = "F";

        document.write(` ${grade}</p>`);
    </script>
</body>
</html>