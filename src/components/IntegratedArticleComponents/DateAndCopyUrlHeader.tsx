import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DateHeader from '@site/src/components/DateHeader';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';
import './integrated-article-components.css';

const FullHeader = ({ slug, created, updated }) => {
  const {siteConfig} = useDocusaurusContext();
  const url = siteConfig.url + "/docs" + slug;
  return (
    <div className='date-and-copy-header'>
        <div className='article-dates'>
            <DateHeader created={created} updated={updated} />
        </div>
        <div className='article-buttons'>
          <CopyToClipboardButton textToCopy={url} buttonText="Copy URL" />
        </div>
    </div>
  );
};

export default FullHeader;