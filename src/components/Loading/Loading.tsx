import { SyncLoader } from "react-spinners"
import './Loading.css'

const Loading = (): JSX.Element => {
  return (
    <div className='loading-msg'>
      <SyncLoader size={15}/>
      <p>Checking your work...</p>
    </div>
  )
}

export default Loading;