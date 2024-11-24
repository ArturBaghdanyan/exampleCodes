import { useState } from 'react';

function Checked() {
  const [agreement, setAgreement] = useState(false);
  const [errorMessage, setErrorMassage] = useState('');

  const handleChange = (event) => {
    setAgreement(event.target.checked);
  }

  function onHandleClick() {
    if(!agreement) { //when not checked
      setErrorMassage("Input is required")
    } else {
      setErrorMassage('')
    }
    console.log('Form submitted');
  }

  return (
    <div>
      <div id="app">
        <input
          type="checkbox"
          name="agreement"
          onChange={handleChange}
        />

        <label>
          I agree to the terms and conditions
        </label>

        <br /><br />

        <button onClick={onHandleClick}>Continue</button>
        {errorMessage && (
          <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>
        )}
      </div>
    </div>
  );
}