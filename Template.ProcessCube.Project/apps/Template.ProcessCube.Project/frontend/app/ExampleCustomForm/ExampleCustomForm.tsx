'use client'

import { CustomFormProps } from '../DialogRenderer';
import './ExampleCustomForm.css';

const ExampleCustomForm = (props: CustomFormProps) => {
  console.log(props);

  return (
    <>
      <p className='text-heading-1'>Heading 1</p>
      <p className='text-heading-2'>Heading 2</p>
      <p className='text-heading-3'>Heading 3</p>

      <button className='mt-8 p-4 bg-lime-200 hover:bg-lime-300 active:bg-red-300 rounded-md ' onClick={() => props.finishUserTask({})}>
        Confirm
      </button>
    </>
  )
}

export default ExampleCustomForm
