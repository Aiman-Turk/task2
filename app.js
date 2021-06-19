//                                                ARRAYS (CH# 14-16)
//  1. Declare an empty array using JS literal notation to store student names in future. 
//  var students_name=[];
//  2. Declare an empty array using JS object notation to store student names in future. 
//  var pets=new array();
//  console.log(pets);



//  3. Declare and initialize a strings array.
//  var books_name=["English","Urdu","Maths","Science","Computer"];
//  console.log(books_name);

//  4.  Declare and initialize a numbers array. 
//  var number_array=[1,2,3,4,5,6,7,8,9];
//  console.log(number_array);

//  5.  Declare and initialize a boolean array. 
//  var boolean_array=["True","False",];
//  console.log(boolean_array);

// 6. Declare and initialize a mixed array. 
// var mixed_array=["Lion",1,2,"True","False"];
// console.log(mixed_array);

// 7. Declare and Initialize an array and store available education qualifications in
//  Pakistan(e.g.SSC, HSC, BCS, BS, BCOM, MS, M.Phil., PhD).Show the listed qualifications in your browser like:

// var available_education_qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("Qualifications :");
// document.write("<ol>");
// for(var i = 0; i<available_education_qualifications.length; i++){
    
//     document.write("<li>"+available_education_qualifications[i]+"</li>");

// }
// document.write("</ol>");







// Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:  

// var students_name=["Hamza","Abdullah","Saad"];
// var scores =[320,230,480];
// var total_marks=500;
// var i;
// for(i=0; i<students_name.length; i++){
//     var percentages=(scores[i]*100)/total_marks;
//     document.write("Score of" +" "+ students_name[i]  +  "is"+" " +scores[i] +". Percentage :"   + percentages+"%"+"<br>");
// }


// 9. Initialize an array with color names. Display the array elements in your browser. 
// var colors_name=["Red","Blue","Black","Green","Yellow","Grey","White","Pink","Purple"];
// document.write(colors_name+"<br>"+"<br>");


// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
// var colors_name=["Red","Blue","Black","Green","Yellow","Grey","White","Pink","Purple"];
// var add_color=prompt("Enter a colour name which you want to add at the begning .","colour name");
// colors_name.unshift(add_color);
// document.write(colors_name);


// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.var colors_name=["Red","Blue","Black","Green","Yellow","Grey","White","Pink","Purple"];
// var colors_name=["Red","Blue","Black","Green","Yellow","Grey","White","Pink","Purple"];
// var add_color=prompt("Enter a colour name which you want to add at the end .","colour name");
// colors_name.push(add_color);
// document.write(colors_name);


// c. Add two more color to the beginning of the array. Display the updated array in your browser
// var colors_name=["Red","Blue","Black","Green","Yellow","Grey","White","Pink","Purple"];
// colors_name.unshift("Orange","Indigo");
// document.write(colors_name);




// d. Delete the first color in the array. Display the updated array in your browser
// var colors_name=["Red","Blue","Black","Green","Yellow","Grey","White","Pink","Purple"];
// colors_name.shift();
// document.write(colors_name);


// e. Delete the last color in the array. Display the updated array in your browser. 
// var colors_name=["Red","Blue","Black","Green","Yellow","Grey","White","Pink","Purple"];
// colors_name.push();
// document.write(colors_name);

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 

// var index=prompt("Enter a index number","Number");
// var color_name=prompt("Enter a colour name", "Colour");
// var position=prompt("Enter a position which colour you want to delete");
// var colors_name=["Red","Blue","Black","Green","Yellow","Grey","White","Pink","Purple"];
// colors_name.splice(index,position,color_name);
// document.write(colors_name);


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 

// var colors_name=["Red","Blue","Black","Green","Yellow","Grey","White","Pink","Purple"];
// var index=prompt("Enter a index number","Number");
// var position=prompt("Enter a position of colour which colour you want to delete");
// colors_name.splice(index,position);
// document.write(colors_name);


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 

// var scores=[320,230,480,120];
// document.write("Scores of Students :"+" "+scores +"<br> ");
// scores.sort();
// document.write("Ordered Scores of Students :"+" "+scores +" ");

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 


//  var cities_names=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var copy_cities_names = cities_names.slice(2,4);
// document.write("Cities List:"+"<br>"+cities_names+"<br>"+"<br>");
// document.write("Selected Cities List:"+"<br>"+copy_cities_names);


// 12.  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) 
// var arr = ["This","Is","My","Cat"];
// document.write("Array :" +"<br>"+"<br>"+arr +"<br>"+"<br>"+"<br>"); 
// var my=arr.join("");
// document.write("String :"+ "<br>"+ my + "<br>"+"<br>");


// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 
// var devices=["Keyboard","Mouse","Printer","Monitor"];
// var i;
// document.write("Devices :"+"<br>"+devices+"<br>"+"<br>");
// for(i=0; i<devices.length; i++){
//     document.write("Out :"+"<br>"+ devices[i] + "<br>"+"<br>");
// }


// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 


// var devices=["Keyboard","Mouse","Printer","Monitor"];
// var i;
// document.write("Devices :"+"<br>"+devices+"<br>"+"<br>");
// for(i=0; i<devices.length; i++){
//     devices.reverse();
//     document.write("Out :"+"<br>"+ devices[i] + "<br>"+"<br>");
// }


// 15. Write a program to store phone manufacturers(Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown / select menu in your browser using document.write() method:

// var select = document.getElementById("select"),
// phone_manufacture = ["Apple","Samsung","Motorola","nokia","sony & haier"];

// for(var i = 0; i<phone_manufacture.length; i++){
//     var option = document.createElement("OPTION",)
//     text=document.createTextNode(phone_manufacture[i]);

//     option.appendChild(text);
//     select.insertBefore(option,select.lastChild)

// }
