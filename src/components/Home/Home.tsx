// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import './Home.css';
import User from '../User/User';
// import users from '../../sampleData/users';
import { IUsers } from '../../Utilities/interfaces';
import { useEffect } from 'react';


// const userOne = users.data[0].attributes;
// const userTwo = users.data[1].attributes;

interface IProps {
  allUsers: IUsers
}

const Home = ({ allUsers }: IProps) => {  

  let userCards;
  // console.log(allUsers)

  useEffect(() => {
    if(allUsers.data.length !== 0) {
        userCards = allUsers.data.map(user => {
          console.log('User', user)
          console.log('Attributes', user.attributes)
        return <User name={user.attributes.name} preferred_lang={user.attributes.preferred_lang} id={user.id}/>
      })
    }
  }, [allUsers])


  return (
    <div>
      <p className='choose-user'>Choose your user</p>
      <div className='user-container'>
        {userCards}
      </div>
    </div>
  );
}

export default Home;