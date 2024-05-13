import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DateHeader from '@site/src/components/DateHeader';
import FullButtons from '@site/src/components/SocialShare/FullButtons';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';
import './integrated-article-components.css';

const FullHeader = ({ slug, title, created, updated }) => {
  const {siteConfig} = useDocusaurusContext();
  const url = siteConfig.url + "/docs" + slug;
  return (
    <div className='full-header-container'>
      <div className='article-dates'>
        <DateHeader created={created} updated={updated} />
      </div>
      <div className='article-buttons'>
        <FullButtons url={url} title={title} />
        <CopyToClipboardButton textToCopy={url} buttonText="Copy URL" />
      </div>
    </div>
  );
};

export default FullHeader;