function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    const displayValue = document.getElementById('display').value;
    try {
      const result = eval(displayValue.replace(',', '.'));
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function toggleSign() {
    const display = document.getElementById('display');
    if (display.value) {
      display.value = display.value.charAt(0) === '-' ? display.value.slice(1) : '-' + display.value;
    }
  }