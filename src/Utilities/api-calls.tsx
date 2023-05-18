// Deployed Backend Domain (waiting for CORS permission)
// https://calm-thicket-75558.herokuapp.com/

import { IUsers, IUser, IPrompt } from "./interfaces";

export const getUsers: () => Promise<IUsers | null> = async () => {

  return fetch('https://5178589b-c8d7-4c00-ae22-57e3d6493139.mock.pstmn.io/api/v1/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json();
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

export const getUser: (userId: string) => Promise<IUser | null> = async (userId) => {

  return fetch(`https://5178589b-c8d7-4c00-ae22-57e3d6493139.mock.pstmn.io/api/v1/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json();
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

export const getFeedback: (challengeId?:string, userId?:string) => void = async (challengeId, userId) => {
  const userPath: string = userId ? `/${userId}` : '';
  const challengePath: string = challengeId ? `/${challengeId}` : '';

  return fetch(`https://5178589b-c8d7-4c00-ae22-57e3d6493139.mock.pstmn.io/api/v1/users${userPath}/challenges${challengePath}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    } else {
      return response.json();
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
}

export const getPrompt: () => Promise<IPrompt | null> = async () => {
  return fetch('https://5178589b-c8d7-4c00-ae22-57e3d6493139.mock.pstmn.io/api/v1/users/55/challenges/new')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json();
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}



interface ISubmission {
  language: string,
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  sentences: ISubmissionSentence[]
}

interface ISubmissionSentence {
  grammar_point: string,
  eng_grammar_point: string,
  user_sent: string
}

// NEED TO CHANGE PROMISE TYPE FROM ANY TO SOMETHING
export const postSubmission: (userId: string, data: ISubmission) => Promise<any> = async (userId, data) => {
  return fetch(`https://5178589b-c8d7-4c00-ae22-57e3d6493139.mock.pstmn.io/api/v1/users/${userId}/challenges`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}