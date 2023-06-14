'use client'

import { CustomFormProps } from '../DialogRenderer';
import './ExampleCustomForm.css';

const ExampleCustomForm = (props: CustomFormProps) => {
  console.log(props);

  return (
    <>
      <p className='text-heading-2 text-5mindsorange'>5<span className='text-heading-2 text-5mindsblue'>Minds</span></p>
      <p className='text-heading-1'>Heading 1</p>
      <p className='text-heading-2'>Heading 2</p>
      <p className='text-heading-3'>Heading 3</p>

      <button className='mt-8 p-4 bg-lime-200 hover:bg-lime-300 active:bg-red-300 rounded-md drop-shadow-lg active:drop-shadow-none' onClick={() => props.finishUserTask({})}>
        Task beenden
      </button>
    </>
  )
}

export default ExampleCustomForm
