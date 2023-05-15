// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockUser = {
  data: {
    id: '55',
    type: 'user',
    attributes: {
        name: 'Deniz',
        preferred_lang: 'Turkish',
        challenges: [
            {
              challenge_id: '1', 
              language: 'Turkish', 
              verb: '(i) gitmek',
              eng_verb: 'to go', 
              image_url: '/random/unplash/image.url',
              image_alt_text: 'Plane flying over the Bosphorous', 
              created_at: '05-30-2023'
            }
        ]
     }  
   }
}

export default mockUser;