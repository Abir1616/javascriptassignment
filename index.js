//Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(a,b){
    return a-b;
}
let func = calculateDifference(5,10);
let result =Math.abs(func);
console.log("The difference between the first and second arguments is "+result); 


//Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num){
    if(num%2 !==0){
        return true;
    }
    else{
        return false;
    }
}
let result1 = isOdd(7);
let result2 = isOdd(4);
console.log("The first number is "+result1);
console.log("The second number is "+result2);

//Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(arr){
   let min = arr[0];
   for(let i=1; i<arr.length; i=i+1){
    if(arr[i]<min){
        min = arr[i];
    }
   }
   return min;
}
let number = [77,66,22,99,55];
let minnum = findMin(number);
console.log("The smallest number of the array is "+minnum);

//Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arr){
    return arr.filter(function(num){
        return num%2 == 0;
    });
}
let Numbers = [11,22,33,44,55,66,77]
let evennumbers = filterEvenNumbers(Numbers);
console.log("The new array of even numbers is "+evennumbers);

//Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(arr){
    return arr.sort().reverse();
}
let numbers = [60,90,20,40,20,10,30];
let newsortedarray = sortArrayDescending(numbers);
console.log("The new array sorted in descending order is "+newsortedarray);

//Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str){
    return str[0].toLowerCase()+str.substr(1,8);
}
let lowercase = lowercaseFirstLetter("Abusufiun");
console.log("The first letter of the sentence in lowercase is "+lowercase);

//Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str){
    const vowels ="aeiouAEIOU";
    let count = 0;
    for(let i=0;i<str.length;i=i+1){
        if(vowels.includes(str[i])){
            count=count+1;
        }
    }
    return count;
}
let totalvowel = countVowels("An owl flies over the tree") 
console.log("The vowels found in this sentence are "+totalvowel);

//Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(arr){
    let sum = 0;
    for(i=0;i<arr.length;i=i+1){
        sum = sum + arr[i];
    }
    return sum;
}
let num = [2,3,4,5,6,7,8];
let average =findAverage(num);
let Result = average / num.length;
console.log("The average of the numbers is "+Result);


