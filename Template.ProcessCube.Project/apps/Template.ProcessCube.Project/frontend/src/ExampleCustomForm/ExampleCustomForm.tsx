import React from 'react';

import { CustomFormProps } from '../DialogRenderer';

import './ExampleCustomForm.css';

export class ExampleCustomForm extends React.Component<CustomFormProps> {

  constructor(props: any) {
    super(props);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className='test-class'>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
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
