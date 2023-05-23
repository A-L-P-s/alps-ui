import { SyncLoader } from "react-spinners";
import './Loading.css';

const Loading = (): JSX.Element => {
  return (
    <div className='loading-msg'>
      <SyncLoader size={15} color='#2D8CFF'/>
      <p>Checking your work...</p>
    </div>
  )
}

export default Loading;