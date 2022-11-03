import React from 'react';

import { StartDialogProps, StartDialogRendererState } from '../DialogRenderer';

export class ExampleStartDialog extends React.Component<StartDialogProps, StartDialogRendererState> {

  public render(): JSX.Element {
    return (
      <p>Hallo das ist ein Test Start Dialog</p>
    );
  }
}
