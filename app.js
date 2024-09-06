document.getElementById('calculateBtn').addEventListener('click', function() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
  
    if (height && weight) {
      fetch('/calculate-bmi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ height, weight }),
      })
      .then(response => response.json())
      .then(data => {
        let resultText = `Your BMI is ${data.bmi}.`;
  
        if (data.bmi < 18.5) {
          resultText += " You are underweight.";
        } else if (data.bmi < 24.9) {
          resultText += " You are normal weight.";
        } else if (data.bmi < 29.9) {
          resultText += " You are overweight.";
        } else {
          resultText += " You are obese.";
        }
  
        document.getElementById('result').textContent = resultText;
      })
      .catch(error => {
        document.getElementById('result').textContent = 'Error calculating BMI.';
      });
    } else {
      document.getElementById('result').textContent = "Please enter valid inputs.";
    }
  });
  