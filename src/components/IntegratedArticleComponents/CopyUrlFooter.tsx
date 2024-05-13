import React from 'react';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';
import './integrated-article-components.css';

const CopyUrlFooter = ({ url }) => {
  return (
    <div className='full-footer-container'>
        <div className='copy-url-button'>
          <CopyToClipboardButton textToCopy={url} buttonText="Copy URL" />
        </div>
    </div>
  );
};

export default CopyUrlFooter;