'use client'

import React from 'react';
import { StartDialogProps } from '../DialogRenderer';

const ExampleStartdialog = (props: StartDialogProps) => {
  console.log(props.portalLocation);

  return (
    <>
      <div>ExampleStartdialog</div>
      {props.portalLocation &&
        <h2>
          You have {props.portalLocation.search} in your URL.
        </h2>
      }
    </>

  )
}

export default ExampleStartdialog
