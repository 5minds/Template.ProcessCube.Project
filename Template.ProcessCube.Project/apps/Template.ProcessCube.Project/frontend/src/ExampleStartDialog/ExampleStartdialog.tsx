import React from 'react';

import { StartDialogProps, StartDialogRendererState } from '../DialogRenderer';

export class ExampleStartDialog extends React.Component<StartDialogProps, StartDialogRendererState> {

  public render(): JSX.Element {
    return (
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
    );
  }
}
