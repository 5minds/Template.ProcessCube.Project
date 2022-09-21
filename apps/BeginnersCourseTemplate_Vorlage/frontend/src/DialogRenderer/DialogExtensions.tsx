import React from 'react';

import { StartDialogProps } from './StartDialogRenderer';

import styles from './DialogExtensions.module.css';

export function withNavigationbar<TProps extends StartDialogProps>(
  Component: React.ComponentType<TProps>,
): (props: TProps) => JSX.Element {

  return Object.assign((props: TProps) => (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
        <div className={styles.dialog__navbarComponent}>
          <Component {...props} />
        </div>
      </div>
    </>
  ), { displayName: Component.displayName });
}
