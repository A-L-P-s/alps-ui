// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockFeedback = {
  data: {
    id: '1',
    type: 'challenge',
    attributes: {
        language: 'Turkish', 
        verb: '(i) gitmek',
        eng_verb: 'to go', 
        image_url: '/random/unplash/image.url',
        image_alt_text: 'Plane flying over the Bosphorous', 
        created_at: '05-30-2023',
        grammar_points: null,
        sentences: [
          {
           sent_id: '1',
           grammar_point: 'geçmiş zaman',
           eng_grammar_point: 'past tense',
           user_sent: 'Dün havalimana gittik ama arkadaşım uçak gelmedi.',
           ai_sent: 'Dün havalimanına gittik, ancak arkadaşımızın uçağı gelmedi.'
           }
         ]
     }  
   }
}

 export default mockFeedback;