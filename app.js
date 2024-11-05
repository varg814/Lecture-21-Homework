for (let index = 1; index < 15; index++) {
  if (index > 5) {
    console.log(`${index} დიდია 5-ზე`);
  } else {
    console.log(index);
  }
}



let array1 = [3, 6, 9, 12, 15];

for (let i = 1; i < array1.length; i += 2) {
  console.log(array1[i]);
}



let string1 = "anbani";
let additionalText = "XXXXXXXXXXXXX";

for (let index = 0; index < string1.length; index++) {
  if (string1[index] === "a") {
    console.log(`${string1[index]} ${additionalText}`);
  } else {
    console.log(string1[index]);
  }
}



let array2 = ["red", "green", "blue", "yellow"];

for (let index = 0; index < array2.length; index++) {
  if (array2[index].length > 5) {
    console.log(array2[index]);
  }
}



for (let index = 0; index < 50; index += 7) {
  console.log(`${index} გაყოფადია 7-ზე`);
}



let array3 = [4, 8, 12, 16, 20];
for (let index = 0; index < array3.length; index++) {
  console.log(array3[index] * 2);
}



let string2 = "javascript";

for (let index = 0; index < string2.length; index++) {
  if (string2[index] === "j") {
    break;
  } else {
    console.log(string2[index]);
  }
}



let array4 = [5, 10, 15, 20, 25];
for (let index = 0; index < array4.length; index++) {
  if (array4[index] % 5 == 0) {
    console.log(array4[index]);
  }
}



let string3 = "hello world";

for (let index = 0; index < string3.length; index++) {
  if (string3[index] === "o") {
    continue;
  } else {
    console.log(string3[index]);
  }
}



let array5 = [1, 2, 3, 4, 5, 6]
let sum = 0;
for (let index = 0; index < array5.length; index++) {
    if (array5[index] % 2 == 0) {
        sum += array5[index];
    }
}
console.log(sum);



for (let index = 1; index <= 10; index++) {
    let ans = index * 10
    console.log(`10 x ${index} = ${ans}`);
}



let array6 = [2, 7, 4, 9, 5]
for (let index = 0; index < array6.length; index++) {
    if (array6[index] > 4) {
        console.log(array6[index] * 3);
    } else{
        console.log(array6[index]);
    }
}



let additionalText2 = "> 10";

for (let index = 0; index < 30; index++) {
  if (index > 10) {
    console.log(`${index} ${additionalText2}`);
  } else {
    console.log(index);
  }
}



let string4 = "frontend";
let additionalText3 = "ნაპოვნია e";

for (let index = 0; index < string4.length; index++) {
  if (string4[index] === "e") {
    console.log(`${string4[index]} ${additionalText3}`);
  } else {
    console.log(string4[index]);
  }
}



let array7 = [100, 200, 300, 400, 500]
for (let index = 0; index < array7.length; index++) {
    if (array7[index] < 250) {
        console.log(array7[index]);
    }
}