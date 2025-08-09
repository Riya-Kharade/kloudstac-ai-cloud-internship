import React, { useEffect, useState } from 'react';

function LlmsDisplay() {
  const [llmsContent, setLlmsContent] = useState('');

  useEffect(() => {
    fetch('/llms.txt')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load llms.txt');
        }
        return response.text();
      })
      .then(text => setLlmsContent(text))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>llms.txt Content</h2>
      <pre>{llmsContent}</pre>
    </div>
  );
}

export default LlmsDisplay;
