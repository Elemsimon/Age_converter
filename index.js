let years = document.getElementById('input');
let resultYears = document.getElementById('result');
let convertDogButton = document.getElementById('dogbtn');
let convertCatButton = document.getElementById('catbtn');
let counter = 1;

/*
For dog years converter was used this formula:
You need to multiply the natural logarithm of the dog's age by 16 and add 31. This formula gives a very accurate match for the age of a person and a dog.
*/

convertDogButton.addEventListener ("click", function() {
    if (isNaN(years.value) == false && years.value >= 1 && years.value <= 100){
          counter = 16 * Math.log(years.value) + 31;
          resultYears.innerHTML = "I'm " + Math.round(counter) + " years dog old"   
    } else if (years.value > 100) {
        resultYears.innerHTML = "Believe me, you shouldn't know it!" 
    } else resultYears.textContent = "Sorry, I need a number from 1 to count"
});

/*
For cat years converter was used this formula:
The first year of a cat's life is equal to the whole 15 years of a person's life, the second is equal to 24 years of life, and every subsequent year you simply add 4 years of life.
*/

convertCatButton.addEventListener ("click", function() {
    if (isNaN(years.value) == true || years.value < 1){
        resultYears.textContent = "Sorry, I need a number from 1 to count"
    } else if (years.value > 100){
        resultYears.innerHTML = "Believe me, you shouldn't know it!" 
    } else if (years.value == 1) {
        resultYears.innerHTML = "I'm 15 years cat old" 
    } else if (years.value == 2){
        resultYears.innerHTML = "I'm 24 years cat old" 
    } else {
        const catAge = 24
        counter = catAge + (Number(years.value) - 2) * 4
        resultYears.innerHTML = "I'm " + counter + " years cat old" 
    }  
})

