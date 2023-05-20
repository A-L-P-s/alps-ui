import { useState } from 'react';
import './Home.css';
import User from '../User/User';
import { IUsers } from '../../Utilities/interfaces';
import { useEffect } from 'react';

interface IProps {
  allUsers: IUsers
  resetUser: Function
}

const Home = ({ allUsers, resetUser }: IProps) => {
  const [userCards, setUserCards] = useState<JSX.Element[] | null >(null)

  useEffect(() => {
    resetUser()
  }, [resetUser])

  useEffect(() => {
    if(allUsers.data.length) {
      let cards = allUsers.data.map(user => {
      return <User name={user.attributes.name} preferred_lang={user.attributes.preferred_lang} id={user.id} key={user.id}/>
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