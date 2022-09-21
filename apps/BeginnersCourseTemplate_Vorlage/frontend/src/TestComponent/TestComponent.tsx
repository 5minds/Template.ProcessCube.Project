import React from 'react';

import { CustomFormProps } from '../DialogRenderer';

import './TestComponent.css';

export class TestComponent extends React.Component<CustomFormProps> {

  constructor(props: any) {
    super(props);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className='test-class'>
        <p>Hi, I am a simple Custom Form</p>
        <button onClick={this._handleFormSubmit.bind(this)}>
          Confirm
        </button>
      </div>
    );
  }

  private _handleFormSubmit(): void {
    this.props.finishUserTask({});
  }

}
