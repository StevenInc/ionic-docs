import DocSidebar from '@theme-original/DocSidebar';
import React from 'react';
import type { Props } from '@theme/DocSidebar';

import Logo from '@theme-original/Logo';

export default function DocSidebarWrapper(props: Props): JSX.Element {
  return (
    <>
      <Logo />
      <DocSidebar {...props} />
    </>
  );
}
