// Deployed Backend Domain (waiting for CORS permission)
// https://calm-thicket-75558.herokuapp.com/

import { IUsers, IUser, IPrompt, ISubmission, ISubmissionResponse } from "./interfaces";

export const getUsers: () => Promise<IUsers | null> = async () => {

  return fetch('https://calm-thicket-75558.herokuapp.com/api/v1/users')
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

  return fetch(`https://calm-thicket-75558.herokuapp.com/api/v1/users/${userId}`)
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

// CHANGE ANY TYPE 
export const getFeedback: (challengeId?:string, userId?:string) => Promise<any> = async (challengeId, userId) => {
  const userPath: string = userId ? `/${userId}` : '';
  const challengePath: string = challengeId ? `/${challengeId}` : '';

  return fetch(`https://calm-thicket-75558.herokuapp.com/api/v1/users${userPath}/challenges${challengePath}`)
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

export const getPrompt: (userId:string | undefined) => Promise<IPrompt | null> = async (userId) => {
  return fetch(`https://calm-thicket-75558.herokuapp.com/api/v1/users/${userId}/challenges/new`)
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

export const postSubmission: (userId: string | undefined, data: ISubmission) => Promise<ISubmissionResponse> = async (userId, data) => {
  return fetch(`https://calm-thicket-75558.herokuapp.com/api/v1/users/${userId}/challenges`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
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