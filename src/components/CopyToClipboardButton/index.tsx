import React from 'react';
import './copy-to-clipboard-button.css';

const CopyToClipboardButton = ({ textToCopy, buttonText }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert('Copied to clipboard!');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <button className='copy-button'  onClick={handleCopy}>{buttonText}</button>
  );
};

export default CopyToClipboardButton;
