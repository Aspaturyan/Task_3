    //1.
let num = 15;
if(num % 2 == 0){
    alert("odd");
}
else{ alert("even");
}

    //2.
let n = 20;
let sum =0;
for(let i = 1; i <= n; i ++ ){
    if (i % 2 == 1){
        sum += i;
    }
}
alert(sum);

    //3.
let a = 99;
let b = 45;
let c = 35;
if(b < a && b > c){
    alert("in bounds");
}else{
    alert("out of bounds");
}

    //4.
let a_1 = 5;
let b_1 = 7;
let c_1 = 9;
if((a_1 + b_1) > c_1 && (b_1 + c_1) > a_1 && (a_1 + c_1) > b_1){
    alert("Yes");
}else{
    alert("No");
}
