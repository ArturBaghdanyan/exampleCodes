import { useState } from 'react';

export default function App() {

  const [agreement, setAgreement] = useState(false);

  const handleChange = (event) => {
    setAgreement(event.target.checked);
  }

  return (
    <div>
      <div id="app">
        <input
          type="checkbox"
          name="agreement"
          onChange={handleChange}
        />

        <label for="agreement">
          I agree to the terms and conditions
        </label>

        <br /><br />

        <button disabled={!agreement}>Continue</button>
      </div>
    </div>
  );
}