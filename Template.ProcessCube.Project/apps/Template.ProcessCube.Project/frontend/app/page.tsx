import { CustomFormsRenderer, StartDialogRenderer } from './DialogRenderer'
import { default as config } from './config/config.json';

export default function Home() {
  return (
    <div style={{ height: '100%' }}>
      <CustomFormsRenderer config={config} />
      <StartDialogRenderer config={config} />
    </div>
  )
}
