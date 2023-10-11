//references

const Dateofbirth = document.querySelector("#yr");
const currentDate = document.querySelector("#hour");
const output = document.querySelector(".output");

document.querySelector(".calc").addEventListener("click",()=>{
    if(Dateofbirth.value=="" || currentDate.value==""){
        output.innerHTML = "Please First select Date";
    }else{
        calculateAgeDifference(Dateofbirth.value,currentDate.value);
    }
    
});

function calculateAgeDifference(start,end){

    const dobYear= parseInt(start.substring(0,4), 10);
    const dobMonth = parseInt(start.substring(5,7), 10);  
    const dobDate = parseInt(start.substring(8,10), 10); 
    const currYear = parseInt(end.substring(0,4), 10);
    const currMonth = parseInt(end.substring(5,7), 10);  
    const currDate = parseInt(end.substring(8,10), 10); 

    //year difference
    const yearAgeDiff = currYear - dobYear;

    //month difference
    let monthAgeDiff;
    if(currMonth >= dobMonth){
        monthAgeDiff = currMonth - dobMonth;
    }
    else{
        yearAgeDiff--;
        monthAgeDiff = 12 + currMonth - dobMonth;
    }

    //days difference
    let dateAgeDiff;
    if(currDate>=dobDate){
        dateAgeDiff = currDate - dobDate;
    }
    else{
        monthAgeDiff--;
        noOfDaysInDOB = daysInMonth(dobMonth,dobYear);
        dateAgeDiff = noOfDaysInDOB + currDate - dobDate;

        //case when monthAgeDiff goes negative

        if(monthAgeDiff<0){
            monthAgeDiff=11;
            yearAgeDiff--;
        }
    }

    output.innerHTML = yearAgeDiff  + " Years, " + monthAgeDiff + " Months, " + dateAgeDiff + " Days.";
}
//background-color

const btn=document.querySelector('.calc');
btn.addEventListener("click", chnagebg);
chnagebg();
function chnagebg(){
  const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
  let a;

  function rathor(a){
      for(let i=0; i<8; i++){
          let x = Math.round(Math.random() * 14);
          let y = hex[x];
          a += y;
      }
      return a;
  }
  const Color1 = rathor('#');
  const Color2 = rathor('#');
  var angle = 'to left';

  const gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
  document.body.style.background = gradient;}

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}