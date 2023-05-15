//select output element 
const output_year = document.querySelector('#output_year');
const output_month = document.querySelector('#output_month');
const ouput_day = document.querySelector('#output_day');

//select input element 
const input_year = document.querySelector('#year');
const input_month = document.querySelector('#month');
const input_day = document.querySelector('#day');

//error elements 
const year_error = document.querySelector('.year-error');
const month_error = document.querySelector('.month-error');
const day_error = document.querySelector('.day-error');

//select button 
const submitBtn = document.querySelector('#agebtn')


submitBtn.addEventListener('click', calculateAge);
let dateIsValid = false;

input_day.addEventListener('input', (e)=>{
    if(input_day.value>31 || input_day.value < 1){
        day_error.textContent = 'enter valid day'
        dateIsValid = false;
        return;
    }else{
    dateIsValid = true;
    day_error.textContent= ""
 }
})

input_month.addEventListener('input', (e)=>{
    if(e.target.value>12 || e.target.value < 1){
        month_error.textContent = 'enter valid month'
        dateIsValid = false;
        return;
    }else{
    dateIsValid = true;
    month_error.textContent= ""
 }
})


input_year.addEventListener('input', (e)=>{
    if(input_year.value>2023 || input_year.value===''){
        year_error.textContent = 'enter valid year'
        dateIsValid = false;
        return;
    }else{
    dateIsValid = true;
    year_error.textContent= ""
 }
})




function calculateAge(){
    if(dateIsValid = true){

        const  birthday = `${input_day.value}/${input_month.value}/ ${input_year.value} `;
        const birthdayobj = new Date(birthday);
        ageDiff = Date.now() - birthdayobj;
       ageDate = new Date(ageDiff);
      
        let ageYears = ageDate.getUTCFullYear() - 1970
        let ageMonths = ageDate.getUTCMonth()
         let ageDays = ageDate.getUTCDay()
    
         output_year.textContent = ageYears;
         output_month.textContent = ageMonths;
         ouput_day.textContent = ageDays;



    }else{
        return;
    }
    
}

 