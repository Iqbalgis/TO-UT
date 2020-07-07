var arr = [2, 3, 5, 6, 7,1, 4, 6, 5,3,3,3,1,2,5,6,7,100]
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
   console.log('max='+ max + ' min='  + min + ' rata-rata=' + sum/arr.length); 