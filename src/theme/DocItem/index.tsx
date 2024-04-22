import React from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import LastUpdated from '@theme/LastUpdated';

export default function DocItem(props) {
  return (
    <div>
      <OriginalDocItem {...props} />
      <LastUpdated />
    </div>
  );
}