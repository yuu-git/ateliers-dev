import React from 'react';
import LastUpdated from '@theme-original/LastUpdated';
import type LastUpdatedType from '@theme/LastUpdated';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LastUpdatedType>;

export default function LastUpdatedWrapper(props: Props): JSX.Element {
  return (
    <>
      <LastUpdated {...props} />
    </>
  );
}
