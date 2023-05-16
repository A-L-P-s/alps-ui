// Deployed Backend Domain (waiting for CORS permission)
// https://calm-thicket-75558.herokuapp.com/

const getUsers: (userId?: string) => void = async (userId) => {
  const endPath: string = userId ? `/${userId}` : ''

  return fetch(`https://5178589b-c8d7-4c00-ae22-57e3d6493139.mock.pstmn.io/api/v1/users${endPath}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      } else {
        return response.json()
      }
    })
    .then(data => {
      console.log('Response: ', data);
      return data;
    })
    .catch(error => {
      console.error('An error occurred:', error)
    });
}

export default getUsers;