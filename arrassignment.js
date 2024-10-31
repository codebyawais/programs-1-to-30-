// assignment programs
// 1. Write a js program to read and print elements of array.
// method : 1
// let array=[1,2,3,4,5,6,7];
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

// method 2
// let array=[1,2,3,4,5,6,7];
// array.forEach((item)=>{
//      console.log(item);
// })

// method 3
// let array=[1,2,3,4,5,6,7];
// let i=0;
// while(i<array.length){
//   console.log(array[i]);
//      i++;
// }

// method 4
// let array=[1,2,3,4,5,6,7];
// let i=0;
// do {
//      console.log(array[i]);
//      i++;
// } 
// while (i<array.length);




// 2. Write a js program to print all negative elements in an array.
//method 1
// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// for(let i=0;i<arr.length;i++){
//      if(arr[i]<0 ){
//      console.log(arr[i]);
// }
// }

//method 2
// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// arr.map((item)=>{  
//      if(item < 0){
//      console.log(item);
// } 
// })


// method 3
// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// arr.forEach((item)=>{
//     if(item<0)
//         console.log(item);
// })

// 3. Write a js program to print all positive elements in an array.

//method 1
// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// arr.map((item)=>{  
//      if(item > 0){
//      console.log(item);
// } 
// })

//method 2
// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// arr.forEach((item)=>{
//      if(item > 0){
//      console.log(item);
// }
// })



// 4. Write a js program to find sum of all array elements.
// let sumArr=[1,2,3,4];
// let count=0;
// for(let i=0;i<sumArr.length;i++){
//     count=count+sumArr[i]
// }
// console.log(count);





// 5. Write a js program to find maximum and minimum element in an array.
// let arr=[1,2,23,44,5,5,66]
// let min,max;
// min=arr[0],max=arr[0]
// for(let i=0;i<arr.length;i++){
//      if(arr[i]<min){
//           min=arr[i]
//      }else{
//           max=arr[i]
//      }
// }
// console.log("The minimum number is  ",min);
// console.log(`The maximum number is  `,max);




// 6. Write a js program to find second largest element in an array.
//simple sort can be work in 0 to 9 but a,b can be sort an array in infinity

// let arr=[1,2,3,4,5,5,6,8,9,5,10,11,33,44]
// arr.sort((a,b)=>b - a)
// // console.log(arr);
// let seclargest=arr[1]
// console.log("the 2nd largest number is ",seclargest);

// 7. Write a js program to find second smallest element in an array.
// let smarr=[66,55,44,33,2,3,4,5,5,6,8,9,5,10,11,33,44]
// smarr.sort((a,b)=>a - b)
// // console.log(smarr);
// let secSmallest=smarr[1];
// console.log(secSmallest);


// 8.  array can be sort in ascending order
// let arr=[2,4,56,7,33,55,44,43]
// arr.sort((a,b)=>a - b)
// console.log(arr);


// 9.  array can be sort in descending order
// let arr=[2,4,56,7,33,55,44,43]
// arr.sort((a,b)=>b - a)
// console.log(arr);

// 10. Write a ts program to count total number of even and odd elements in an array.

// let arr=[1,1,21,2,2,5,53,55]
// // let totalEven=[0]
// let totalEven=0
// // let totaOdd=[0]
// let totaOdd=0

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){

//         totalEven++;
//     }else{
//         totaOdd++
//     }  
// }
// console.log(totaOdd);
// console.log(totalEven);

// console.log(arr);




// 11. Write a ts program to count total number of negative elements in an array.
// method 1
// let arr=[1,-11,-2,-3,-4,5,-56,-6,-7,7,-4]
// let count = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         count++;
//     }
// }
// console.log(count);

// method 2
// let arr=[1,-11,-2,-3,-4,5,-56,-6,-7,7,-4]
// let count=0;
// arr.map((item)=>{
//   if(item<0){
//     count++
//   }
// })
// console.log(count);




// 12. Write a ts program to count total number of positive elements in an array.
// method 1
// let arr=[1,-11,-2,-3,-4,5,-56,-6,-7,7,-4]
// let count = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         count++;
//     }
// }
// console.log(count);



// // method 2
// let arr=[1,-11,-2,-3,-4,5,-56,-6,-7,7,-4]
// let count=0;
// arr.map((item)=>{
//   if(item>0){
//     count++
//   }
// })
// console.log(count);



// 13. Write a js program to copy all elements from an array to another array.
// let arr=[1,2,3,5,,4,3,21,1];
// let copyArr=[];
// for(let i=0;i<arr.length;i++){
//     copyArr.push(arr[i])
//     console.log(arr[i]);
// }

// console.log("the orignal array is",arr);
// console.log("the copy of array is",copyArr);
//q wht copy array is outpyt ,, undefined and orignal arr is empty item







// 14. Write a js program to insert an element at a specific index in an array.

// let arr=[1,2,3,44,55,66]
// //splice is an array method that can be add del the value
// //start index ,delete value, option to add
// arr.splice(3,2,111)
// console.log(arr);




// 15. Write a ts program to delete an element from an array at specified position.
// let arr=[1,2,3,44,55,66]
// arr.splice(1,1)
// console.log(arr);


// 16. Write a js program to count frequency of each element in an array.
// let arr = [1, 2, 2, 3, 3, 3,7, 4, 4, 4, 4, 5, 5, 5, 5, 5];
// let frequency = {};//empty objects called frequency. objecty act as map
// // where key is an element from the array. value represent the no of time that elemenet appears 


// for (let i = 0; i < arr.length; i++) {
//     //elememnt is variable that store current item in array for each iteration
//     let element = arr[i];
//     if(frequency[element]){
//         frequency[element]++;
//     }else{
//         frequency[element] = 1;
//     } 
// }

// console.log("Frequency of each element:", frequency);






// 17. Write a js program to print all unique elements in the array.
// Filter and display unique elements
// let arr = [1, 2, 2, 3, 4, 65, 3, 3, 5, 5, 6, 6];
// let uniqueElements = {}; //unitqye element object is initalized as an empty object 
// // //it will be used to store each element in the array as a key and count as the value
// for (let i = 0; i < arr.length; i++) {
// //      //element is set to current item in the array
//     let element = arr[i];
//     // Count occurrences of each element
//     if (uniqueElements[element]){
//         uniqueElements[element]++;
//     } else {
//         uniqueElements[element] = 1;
//     }
// }

// // // Filter and display unique elements
// for (let key in uniqueElements) {
//     if (uniqueElements[key] === 1) {
//         console.log(key);
//     }
// }








// //  18. Write a ts program to count total number of duplicate elements in an array.
// let arr=[1,2,3,4,4,5,5,3,]
// let elememntCount={};
// let duplicateCount=0;

// for(let i=0;i<arr.length;i++){
//     let elememnt=arr[i];
//     if(elememntCount[elememnt]){
//         elememntCount[elememnt]++;
//     }else{
//         elememntCount[elememnt]=1
//     }
// }
// for(let key in elememntCount){

//     if(elememntCount[key]>1){
//          duplicateCount++;
//     }
// }
// console.log(duplicateCount);






// 19. Write a js program to delete all duplicate elements from an array.

// let arr=[1,2,2,3,3,4,4,7,64]
// let elememntCount={};
// let uniqueArr=[]
// for(let i=0;i<arr.length;i++){
//     let elememnt=arr[i]
//     if(elememntCount[elememnt]){
//         elememntCount[elememnt]++
//     }else{
//         elememntCount[elememnt]=1;
//     }
// }
// for(let key in elememntCount){
//     if(elememntCount[key]===1){
//         uniqueArr.push(Number(key))
//     }
// }
// console.log(uniqueArr);










// 20. Write a js program to merge two array to third array.
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// // let arr3=arr1+arr2;//+operator is string concatenantion not merging
// // let arr3=arr1.concat(arr2)
// let arr3=[...arr1,...arr2]
// console.log(arr3);






// 21. Write a js program to find reverse of an array.
// let arr=[1,2,3,4]
// arr.reverse()
// console.log(arr);


// 22. Write a js program to put even and odd elements of array in two separate array.
// let arr = [1, 2, 2];
// let evenElement = [];
// let oddElement = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenElement.push(arr[i]);
//     } else {
//         oddElement.push(arr[i]);
//     }
// }

// console.log("Total even elements:", evenElement);
// console.log("Total odd elements:", oddElement);





// 23. Write a js program to search an element in an array.

// let arr=[1,2,99,4,6,8,6,]
// let search=990
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===search){
//         console.log(arr[i]);
        
//     }
// }


// 24. Write a ts program to sort array elements in ascending or descending order.

// let arrAsc=[1,5,42,23,2]
// arrAsc.sort((a,b)=>a - b)
// console.log(arrAsc);

// let arrDes=[1,5,42,23,2]
// arrDes.sort((a,b)=>b - a)
// console.log(arrDes);

// 25. Write a js program to sort even and odd elements of array separately.
// let arr = [1, 2, 5, 3, 8, 6, 4, 7, 9, 0]; // Sample array
// let evenArr = [];
// let oddArr = [];  

// for (let i=0; i<arr.length; i++) {
//     if (arr[i]%2===0) {
//         evenArr.push(arr[i])
//     } else {
//         oddArr.push(arr[i]);  
//     }
// }

// evenArr.sort((a, b) => a - b); // Sort the  evenArray in ascending order
// oddArr.sort((a, b) => a - b);   // Sort the oddArray in ascending order


// console.log("the sorted even elements:", evenArr);
// console.log("the sorted odd elements:", oddArr);




// 26. Write a js program to left rotate an array.
// 27. Write a ts program to right rotate an array.






// 23 Write a JavaScript program that takes an array of student objects, each with name, id, and cgpa. 
//Find all students who have a cgpa below 3.0, and separate them into a new array called lowCgpaStudents.
// method 1
// let students=[
//     {name:"awais", id:1, cgpa:3.4},
//     {name:"ahsan", id:2, cgpa:3.1},
//     {name:"ameeq", id:3, cgpa:2.8},
//     {name:"asad", id:4, cgpa:2.4},
//     {name:"faizan", id:5, cgpa:2.4},
//     {name:"ahmed", id:6, cgpa:3.4},
//     {name:"daniyal", id:7, cgpa:3.9},
// ]
// let lowCgpaStudents=[]
// students.map((item)=>{
//     if(item.cgpa<3.0){
//         lowCgpaStudents.push(item)
//     }
// })
// console.log( "your cgpa is less than 3.0 ",lowCgpaStudents);


// method 2
// let students=[
//     {name:"awais", id:1, cgpa:3.4},
//     {name:"ahsan", id:2, cgpa:3.1},
//     {name:"ameeq", id:3, cgpa:2.8},
//     {name:"asad", id:4, cgpa:2.4},
//     {name:"faizan", id:5, cgpa:2.4},
//     {name:"ahmed", id:6, cgpa:3.4},
//     {name:"daniyal", id:7, cgpa:3.9},
// ]
// let lowCgpaStudents=students.filter((item)=>{return (item.cgpa<3.0)})
// console.log(lowCgpaStudents);


// method 3
// let students=[
//     {name:"awais", id:1, cgpa:3.4},
//     {name:"ahsan", id:2, cgpa:3.1},
//     {name:"ameeq", id:3, cgpa:2.8},
//     {name:"asad", id:4, cgpa:2.4},
//     {name:"faizan", id:5, cgpa:2.4},
//     {name:"ahmed", id:6, cgpa:3.4},
//     {name:"daniyal", id:7, cgpa:3.9},
// ]
// let lowCgpaStudents=students.filter((item)=> item.cgpa<3.0)
// console.log(lowCgpaStudents);





// 24 Sorting and Filtering: Create a program that sorts an array of product objects by price in descending order. 
// Then, filter out products with a price less than $10 and store them in a discountedProducts array.
// let products=[
//     {name:"burger", id:1, price:16 },
//     {name:"shawarma", id:2, price:6 },
//     {name:"pizza", id:3, price:66 },
//     {name:"boti", id:4, price:9 },
// ]
// products.sort((a,b)=>b.price-a.price)
// console.log("the product can be desending",products);
// let discountedProducts=products.filter((product)=>product.price < 10)
// console.log("the discounted products are ",discountedProducts);



// 25 Nested Property Filtering: Given an array of order objects, each containing an orderId, 
//customer object (with name and address), and totalPrice, write a program that finds orders with a 
// totalPrice above $100 and separates them into a new array called highValueOrders.
// let orders=[
//     {   orderId: 1, 
//         customer: { name: "rana faizan", address: "wapda city" }, 
//         totalPrice: 150 },
//     {   orderId: 2, 
//         customer: { name: "daniyal farooq", address: "sunsaan road" }, 
//         totalPrice: 90 },
//     {    orderId: 3, 
//         customer: { name: "awais rafiq", address: "lyllpur avenue" }, 
//         totalPrice: 250 },
//     {   orderId: 4, 
//         customer: { name: "mazhar don", address: "model city" }, 
//         totalPrice: 75 }
// ];

// let highValueOrders = orders.filter(order => order.totalPrice > 100);
// console.log("the high Value Orders:", highValueOrders);







// 26 Group By Property: Write a function that groups an array of book objects based on their genre. Each book object
// has properties title, author, and genre. Return an object where each key is a genre and its value is an array 
//of books within that genre.










// 27 Complex Filtering with Nested Properties: Given an array of employees, each with properties name, department,
// and projects (an array of objects containing projectName and status), find all employees who have at least one 
//project with status set to "completed".

let employees = [
    {
        name:"awais",
        department:"Cs",
        projects:[
            { projectName: "blood donation", status: "completed" },
            { projectName: "developer", status: "in-progress" }
        ]
    },
    {
        name: "ahsan",
        department: "IT",
        projects:[
            { projectName: "Website Redesign", status: "completed" },
            { projectName: "App Development", status: "not started" }
        ]
    },
    {
        name: "daniyal",
        department: "donor",
        projects: [
            { projectName: "donate blood", status: "in-progress" },
            { projectName: "developer", status: "not started" }
        ]
    },
    {
        name: "David",
        department: "IT",
        projects: [
            { projectName: "Network Upgrade", status: "completed" },
            { projectName: "Server Migration", status: "completed" }
        ]
    }
];

let completedProjectEmployees = employees.filter(employee => 
    employee.projects.some(project => project.status === "completed")
);

console.log("Employees with completed projects:", completedProjectEmployees);







// 28 Aggregation and Filtering by Date: Write a program that takes an array of transaction objects, each with amount, type (either “credit” or “debit”), and date. Filter all debit transactions in the last 30 days and calculate the total amount spent.
// 29 Flatten Nested Arrays in Objects: Given an array of courses, each containing a courseId and a modules property (an array of module objects with properties moduleId and content), write a program to create a flattened array containing only content from all modules across all courses.
// 30 Calculating Percentage and Sorting: Given an array of sales objects, each with properties agentName, target, and achieved, calculate each agent’s achievementPercentage (achieved/target * 100) and sort the agents by achievementPercentage in descending order.
// 31 Multiple Conditions and Aggregation: Write a function that takes an array of patients objects, each with properties name, age, illness, and visitHistory (an array of visit dates). Find all patients over 60 years old with a visitHistory longer than five entries and store them in an array seniorPatientsWithFrequentVisits.
// 32 Map-Reduce for Complex Aggregation: Given an array of salesData objects, where each object contains productId, storeId, quantity, and saleDate, write a program that calculates the total quantity sold for each productId in the last quarter, returning the results as an object with productId as keys and quantities as values.
















































// var firstName="awais"
// let lastName="rafiq"
// let age= 23;
// const yearOfBirth=2003;

// let userIntro="hy,  my name is "+firstName + " "+ lastName

// console.log(userIntro);

// alert("awausis")
// console.log(alert);




