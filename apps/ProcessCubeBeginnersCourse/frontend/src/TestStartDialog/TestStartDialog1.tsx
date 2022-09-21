import React from 'react';
import { StartDialogProps, StartDialogRendererState } from '../DialogRenderer';

export class TestStartDialog1 extends React.Component<StartDialogProps, StartDialogRendererState> {

  public render(): JSX.Element {
    return (
      <p>Hallo das ist ein Test Start Dialog</p>
    );
  }
}
