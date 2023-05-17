// Deployed Backend Domain (waiting for CORS permission)
// https://calm-thicket-75558.herokuapp.com/

import { IPrompt } from "./interfaces";

export const getUsers: (userId?: string) => void = async (userId) => {
  const endPath: string = userId ? `/${userId}` : '';

  return fetch(`https://calm-thicket-75558.herokuapp.com/api/v1/users${endPath}`)
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