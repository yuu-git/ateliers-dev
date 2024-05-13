import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FullButtons from '@site/src/components/SocialShare/FullButtons';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';
import './integrated-article-components.css';

const FullFooter = ({ slug, title}) => {
  const {siteConfig} = useDocusaurusContext();
  const url = siteConfig.url + "/docs" + slug;
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