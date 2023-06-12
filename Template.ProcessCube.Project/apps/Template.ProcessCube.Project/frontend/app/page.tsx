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
    </div>
  )
}
