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
              image_url: 'https://plus.unsplash.com/premium_photo-1679830513922-d11c0fedfa99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3027&q=80',
              image_alt_text: 'Plane flying over the Bosphorous', 
              created_at: '05-30-2023'
            }
        ]
     }  
   }
}

export default mockUser;