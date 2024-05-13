import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';
import './integrated-article-components.css';

const CopyUrlFooter = ({ slug }) => {
  const {siteConfig} = useDocusaurusContext();
  const url = siteConfig.url + "/docs" + slug;
  return (
    <div className='full-footer-container'>
        <div className='copy-url-button'>
          <CopyToClipboardButton textToCopy={url} buttonText="Copy URL" />
        </div>
    </div>
  );
};

export default CopyUrlFooter;