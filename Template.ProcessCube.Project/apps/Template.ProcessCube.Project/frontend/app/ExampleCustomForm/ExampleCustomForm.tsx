'use client'

import { CustomFormProps } from '../DialogRenderer';
import './ExampleCustomForm.css';

const ExampleCustomForm = (props: CustomFormProps) => {
  console.log(props);

  return (
    <>
      <div>ExampleCustomForm</div>
      <button onClick={() => props.finishUserTask({})}>
        Confirm
      </button>
    </>
  )
}

export default ExampleCustomForm
