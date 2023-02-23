// Chapter 13
// Que 1
// var student1=["Rameez"];
// var student2=["yamman"];
// var student3=["Taswwor"];
// var student4=["Rabbi"];

// alert("Welcome! \n " + student3);

// Que 2
// var students=["Rameez", "Rabbi", "yamman", "Taswwor"];
// alert("welcome! \n"+ students[0]);

// Que 3
// var name = "Rameez";
// console.log(name[0], name[1], name[2], name[3], name[4], name[5]);

// Que 4
// var num = [1,2,3,4];
// console.log(num[1]);

//Que 5
//var bol = [true,false];
//document.write(bol[0]);

//Que 6
//var mixedArray = ["Rameez", 23 , true];
//document.write(mixedArray[1]);

// Que 7
// var education = ['<ol> <li>) SSC </li>' + '<li>) HSC </li>' + '<li>) BCS </li>' + '<li>) BS </li>' + '<li>) BCOM </li>' + '<li>) MS </li>' + '<li>) M. Phil. </li>' + '<li>) PhD </li>']
// document.write('<h1> Qualification </h1> <h2>' + education + '</h2>')

// Que 8
/*var stuName = ["Rameez", "yamman", "rabbi"];
var stuScore = [489, 496, 490];
var totalNum = 500;
// console.log(stuScore[0]*100/totalNum);

document.write("<h1>" + "Score of " + stuName[0] + " is " + stuScore[0] + " .Percentage: " + stuScore[0] * 100 / totalNum + "%" + "</h1>");
document.write("<h1>" + "Score of " + stuName[1] + " is " + stuScore[1] + " .Percentage: " + stuScore[1] * 100 / totalNum + "%" + "</h1>");
document.write("<h1>" + "Score of " + stuName[2] + " is " + stuScore[2] + " .Percentage: " + stuScore[2] * 100 / totalNum + "%" + "</h1>");*/


// Que 9
// (a)
// var colors = [" "+"(Original Colours:: "+ 'Red ', ' Green ', ' Blue)'];
// var addColors = prompt("what color you wants to add to the beginning \n 'Red Green Blue'");
// colors.unshift(addColors);
// document.write("<h1>"+"After Adding Color to the Beginning)::" + colors + "</h1>");

// (b)
// var colors = [" "+"(Original Colours:: "+ 'Red ', ' Green ', ' Blue)'];
// var addColors = prompt("what color you wants to add to the End \n 'Red Green Blue'");
// colors.push(addColors);
// document.write("<h1>"+"After Adding Color to the End)::" + colors + "</h1>");

// (c)
// var colors = [" "+"(Original Colours:: "+ 'Red ', ' Green ', ' Blue)'];
// colors.unshift(" Pink ", " White ")
// document.write("Updated Array (After Adding Two More Colors to the Beginning): <b>" + colors + "</b> <br>")

// (d)
// var colors = [" "+"(Original Colours:: "+ 'Red ', ' Green ', ' Blue)'];
// colors.shift()
// document.write("Updated Array (After Deleting First Colors to the Beginning): <b>" + colors + "</b> <br>")

// (e)
// var colors = [" "+"(Original Colours:: "+ 'Red ', ' Green ', ' Blue)'];
// colors.pop()
// document.write("Updated Array (After Deleting First Colors to the Beginning): <b>" + colors + "</b> <br>")

// (f)
// var colors = " " + "(Original Colours::" + "Red" + " Green " + " Blue";
// colors = ["Red", "Green", "Blue"];
// var addColInd = prompt("which index you wants to add a color", 2,);
// var addColName = prompt("which colour Name you wants to add", "Black");
// colors.splice(2, 0, addColName);
// document.write("Updated Array (After Adding Color at Desired Index): <b>" + colors + "</b> <br>")

// (g)
// index = prompt("Enter the index at which you want to delete color(s):");
// var deletNumbersOfColors = prompt("Enter the number of colors you want to delete:");
// colors.splice(index, deletNumbersOfColors);
// document.write("Updated Array (After Deleting Color(s) from Desired Index): <b>" + colors + "</b> <br>");


// Q 10
// var arr = [320, 230, 480, 120, 11, 123, 888]
// document.write("Score of student: " + arr + '<br />')
// arr.sort()
// document.write("Oedered Score of student: "+arr)

// Q 11
// var citiesName = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
// document.write('<h3> Cities list: <br>' + citiesName + '</h3 <br>')

// var selectedCities = citiesName.slice(2,4)
// document.write('<h3> Slected cities list: <br>'+ selectedCities)


// Q 12
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// console.log(singleString); // Output: "This is my cat"


// Q 13
// const queue = [];

// queue.push("Zeeshan");
// queue.push("Ahtisham");
// queue.push("Shimran");

// const firstValue = queue.shift(); // firstValue is 1
// const secondValue = queue.shift(); // secondValue is 2
// const thirdValue = queue.shift(); // thirdValue is 3
// document.write(queue)

// Q 14
// const stack = [];

// // Add values to the end of the stack
// stack.push(1);
// stack.push(2);
// stack.push(3);

// // Retrieve values from the end of the stack
// const thirdValue = stack.pop(); // thirdValue is 3
// const secondValue = stack.pop(); // secondValue is 2


// Q 15
// var phonManufac = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier','Xiaomi','Vivo','Oppo','Huawie','Realme','Infinix','Tecno']
// document.write('<h1> Mobile Manufacture Companies list: </h1> <select> <option>'+phonManufac.slice(0,1) +'</option>')
// document.write('<option>'+phonManufac.slice(1,2) +'</option>')
// document.write('<option>'+phonManufac.slice(2,3) +'</option>')
// document.write('<option>'+phonManufac.slice(3,4) +'</option>')
// document.write('<option>'+phonManufac.slice(4,5) +'</option>')
// document.write('<option>'+phonManufac.slice(5,6) +'</option>')
// document.write('<option>'+phonManufac.slice(6,7) +'</option>')
// document.write('<option>'+phonManufac.slice(7,8) +'</option>')
// document.write('<option>'+phonManufac.slice(8,9) +'</option>')
// document.write('<option>'+phonManufac.slice(9,10) +'</option>')
// document.write('<option>'+phonManufac.slice(10,11) +'</option>')
// document.write('<option>'+phonManufac.slice(11,12) +'</option> </select>')
// const firstValue = stack.pop(); // firstValue is 1

//  +++++++++++ CHAPTER 17-20 ++++++++++

// Q 1

// var arr = []; []; [];
// console.log(arr);

// Q 2

// var arr = [[0, 1, 2, 3 + '<br>'], [1, 0, 1, 2 + '<br>'], [2, 1, 0, 1]];
// document.write(arr.join(""));

// Q 3

// for (let i = 1; i <= 10; i++) {
//     document.write(i+'<br>');
// }

// Q 4

// var tablenum = parseInt(prompt("Enter a Number to Show its Multiplication Table:", "5"));
// var tableLenth = parseInt(prompt("Enter Length of Multiplication Table:"));
// for (let i = 1; i <=tableLenth; i++) {
//     document.write(tablenum + " x " + i + " = " + tablenum * i + "<br>");
// }

// Q 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     document.write("Elements at index "+i+" is "+ fruits[i]+"<br>");
    
// }

// Q 6

// for (let index = 0; index <= 15; index++) {
//     document.write (index+" ");  
// }

// for (let index = 20; index >=1; index--) {
//     document.write (index +" ");  
// }

// for (let index = 0; index <=20; index+=2) {
//     document.write(index+" ")
    
// }

// for (let index = 1; index <=20; index+=2) {
    //     document.write(index+" ")
    
    // }
    
    // for (let index = 2; index <=20; index+=2) {
        //     document.write(index+" k ")
        
        // }
        
        // Q 7
        
        // var input = prompt("Which Food you Foumd");
        // var food = ["cake","apple pie","cookie","chips","patties"];
        // var flag=false;
        // for (let index = 0; index < food.length; index++) {
        //     if (food[index]==input) {
        //         flag =true;
        //         break;
        //     } 
        // }
        // if (flag){
        // alert("This is availabe at our store:");
        // }else{
        //     alert("This is not availabe at our store:");
        // }



// Q 8

// const A = [24, 53, 78, 91, 12];
// document.write("Array Items: " +A + "<br>");
// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i]

//     }
// }

// document.write("The largest number in the array is: " + largest);

// Q 9

// const B = [24, 53, 78, 91, 12];
// document.write("Array Items: " + B + "<br>")
// let L = B[0];
// for (let i = 1; i < B.length; i++) {
//     if (B[i] < L) {
//         L = B[i]
//     }
// }
// document.write("The Smallest number in the array is: " + L);

// Q 10

// for (let index = 1; index <=20; index++) {
//     document.write(index*5 +"<br>")
    
// }