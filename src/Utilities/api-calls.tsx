import { IUsers, IUser, IPrompt, ISubmission, ISubmissionResponse, IFeedback } from "./interfaces";

export const getUsers: () => Promise<IUsers | null> = async () => {

  return fetch('https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json();
      }
    });
}

export const getUser: (userId: string) => Promise<IUser | null> = async (userId) => {

  return fetch(`https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json();
      }
    });
}

export const getFeedback: (challengeId?:string, userId?:string) => Promise<IFeedback> = async (challengeId, userId) => {
  const userPath: string = userId ? `/${userId}` : '';
  const challengePath: string = challengeId ? `/${challengeId}` : '';

  return fetch(`https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users${userPath}/challenges${challengePath}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    } else {
      return response.json();
    }
  });
}

export const getPrompt: (userId:string | undefined) => Promise<IPrompt | null> = async (userId) => {
  return fetch(`https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/${userId}/challenges/new`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json();
      }
    });
}

export const postSubmission: (userId: string | undefined, data: ISubmission) => Promise<ISubmissionResponse> = async (userId, data) => {
  return fetch(`https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/${userId}/challenges`, {
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
    });
}