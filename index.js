// Function to calculate future value based on SIP inputs
function calculateSIP() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const sipDuration = parseFloat(document.getElementById('sipDuration').value);
    const annualReturn = parseFloat(document.getElementById('annualReturn').value);
  
    if (isNaN(investmentAmount) || isNaN(sipDuration) || isNaN(annualReturn)) {
      alert('Please enter valid numbers.');
      return;
    }
  
    const monthlyReturn = (annualReturn / 100) / 12;
    const totalMonths = sipDuration * 12;
    const futureValue = investmentAmount * (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));
  
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <div class="bg-blue-200 p-4 rounded-md">
        <h2 class="text-xl font-semibold mb-2">Result</h2>
        <p class="mb-2">Investment Amount: ₹${investmentAmount.toLocaleString()}</p>
        <p class="mb-2"> Duration: ${sipDuration} Years</p>
        <p class="mb-2">Expected Annual Return: ${annualReturn}%</p>
        <p class="mb-2">Future Value: ₹${futureValue.toFixed(2).toLocaleString()}</p>
      </div>
    `;
  }
  
  // Event listener for calculate button
  document.getElementById('calculateBtn').addEventListener('click', calculateSIP);



  // Function to handle increase and decrease buttons for input fields
function handleValueChange(inputId, changeAmount) {
    const inputField = document.getElementById(inputId);
    let value = parseInt(inputField.value);
    if (!isNaN(value)) {
      value += changeAmount;
      inputField.value = value >= 0 ? value : 0;
    }
  }
  
  // Event listeners for increase and decrease buttons
  document.getElementById('increaseInvestmentAmount').addEventListener('click', function() {
    handleValueChange('investmentAmount', 1000); // Increase amount by 1000
  });
  
  document.getElementById('decreaseInvestmentAmount').addEventListener('click', function() {
    handleValueChange('investmentAmount', -1000); // Decrease amount by 1000
  });
  
  document.getElementById('increaseSIPDuration').addEventListener('click', function() {
    handleValueChange('sipDuration', 1); // Increase duration by 1 year
  });
  
  document.getElementById('decreaseSIPDuration').addEventListener('click', function() {
    handleValueChange('sipDuration', -1); // Decrease duration by 1 year
  });
  
  document.getElementById('increaseAnnualReturn').addEventListener('click', function() {
    handleValueChange('annualReturn', 1); // Increase return by 1%
  });
  
  document.getElementById('decreaseAnnualReturn').addEventListener('click', function() {
    handleValueChange('annualReturn', -1); // Decrease return by 1%
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('sliderValue');

    slider.addEventListener('input', function() {
        sliderValue.textContent = this.value;
    });
});
