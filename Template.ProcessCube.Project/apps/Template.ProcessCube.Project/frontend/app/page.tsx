import { CustomFormsRenderer, StartDialogRenderer } from './DialogRenderer'
import ExampleStartdialog from './ExampleStartDialog/ExampleStartdialog';
import { default as config } from './config/config.json';

export default function Home() {
  return (
    <div style={{ height: '100%' }}>
      RootPage
      <CustomFormsRenderer
        config={config}
      />
      <StartDialogRenderer
        config={config}
      />
      <div className='w-full'>
        <div className='flex flex-row w-full min-h-screen justify-center gap-24 mt-20'>
          <div className='card h-56 w-32 rounded-lg bg-white outline outline-1 outline-black'>Card 1</div>
          <div className='card h-56 w-32 rounded-lg bg-white outline outline-1 outline-black'>Card 2</div>
          <div className='card h-56 w-32 rounded-lg bg-white outline outline-1 outline-black'>Card 3</div>
        </div>
      </div>
    </div>
  )
}
