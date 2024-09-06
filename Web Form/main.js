//Button
const form = document.getElementById("quizForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //Question 1
    const q1Answer = document.getElementById('q1-option1')
    if (q1Answer.checked){
        console.log('Q1 Correct')
    }
    else{
        console.log('Q1 Wrong')
    }
    //Question 2
    const a1 = document.getElementById('a1'); 
    const q2answer = a1.value;
    if (q2answer === "1969"){
        console.log('Q2 Correct')
    }
    else{
        console.log('Q2 Wrong')
    }
    //Question 3
    

})