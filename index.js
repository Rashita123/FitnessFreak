const calculateButton = document.querySelector(".calculate-button");
const heightInput = document.querySelector(".heightValue");
const weightInput = document.querySelector(".weightValue");
const bmiResult = document.querySelector(".bmi-result");
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const calculateBMI = () => {
  const height = parseInt(heightInput.value)/100;
  const weight = parseInt(weightInput.value);
  if(isNaN(height) || isNaN(weight)){
    bmiResult.innerHTML = "Enter all values correctly";
    heightInput.value = "";
    weightInput.value = "";
  }else if(weight>150 || weight<=0){
    bmiResult.innerHTML = "Enter Weight Correctly";
    heightInput.value = "";
    weightInput.value = "";
  }else if(height>1.7  || height<=0){
    bmiResult.innerHTML = "Enter Height Correctly";
    heightInput.value = "";
    weightInput.value = "";
  }else{
    const bmi = Math.round(weight/(height*height));
    bmiResult.innerHTML = `Your BMI is: ${bmi}`;
    heightInput.value = height*100;
    weightInput.value = weight;
  }
  
}
calculateButton.addEventListener("click", calculateBMI)