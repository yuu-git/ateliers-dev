import React from 'react';
import FullButtons from '@site/src/components/SocialShare/FullButtons';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';
import './integrated-article-components.css';

const FullFooter = ({ url, title}) => {
  return (
    <div className='full-footer-container'>
        <div className='article-buttons'>
          <FullButtons url={url} title={title} />
          <CopyToClipboardButton textToCopy={url} buttonText="Copy URL" />
        </div>
    </div>
  );
};

export default FullFooter;