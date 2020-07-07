<script>
var tArr = [];

for(var f = 1;f<=4;f++)                                                           
{   
   
    var z = prompt("Masukan Angka");   
    tArr.push(z);                              

}   

alert(tArr);       

var summ = 0;      
for(var w = 0; w< tArr.length; w++)     
{   
    summ += +tArr[w];   
}   
console.log(summ);
</script>
