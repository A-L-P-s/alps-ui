import { useState } from 'react';
import './Home.css';
import User from '../User/User';
import { IUsers } from '../../Utilities/interfaces';
import { useEffect } from 'react';

interface IProps {
  allUsers: IUsers
  setUserData: Function
}

const Home = ({ allUsers, setUserData }: IProps) => {
  const [userCards, setUserCards] = useState<any>(null)
  // ANY HERE WILL NEED TO BE UPDATED!

  useEffect(() => {
    if(allUsers.data.length) {
      let cards = allUsers.data.map(user => {
      return <User name={user.attributes.name} preferred_lang={user.attributes.preferred_lang} id={user.id} key={user.id} setUserData={setUserData}/>
      })
      setUserCards(cards)
    }
  }, [allUsers])

  return (
    <div>
      <p className='choose-user'>Choose your user</p>
      {allUsers.data.length ? <div className='user-container'>{userCards}</div> : <p>Loading</p>}
    </div>
  );
}

export default Home;