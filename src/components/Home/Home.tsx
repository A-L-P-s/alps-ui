import User from '../User/User';
import { useState, useEffect } from 'react';
import { IUsers } from '../../Utilities/interfaces';
import './Home.css';

interface IProps {
  allUsers: IUsers
  resetUser: Function
}

const Home = ({ allUsers, resetUser }: IProps): JSX.Element => {
  const [userCards, setUserCards] = useState<JSX.Element[] | null >(null);

  useEffect(() => {
    resetUser();
  }, [resetUser]);

  useEffect(() => {
    if(allUsers.data.length) {
      let cards = allUsers.data.map(user => {
      return <User name={user.attributes.name} preferred_lang={user.attributes.preferred_lang} id={user.id} key={user.id}/>
      })
      setUserCards(cards);
    }
  }, [allUsers]);

  return (
    <div className='home-page'>
      <h2>Select a user to continue</h2>
      <div className='user-container'>{userCards}</div>
    </div>
  );
}

export default Home;