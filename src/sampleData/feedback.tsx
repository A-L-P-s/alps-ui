// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockFeedback = {
  data: {
    id: '1',
    type: 'challenge',
    attributes: {
        language: 'Turkish', 
        verb: '(i) gitmek',
        eng_verb: 'to go', 
        image_url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
        image_alt_text: 'selective focus photography of orange and white cat on brown table',
        created_at: '05-30-2023',
        grammar_points: null,
        sentences: [
          {
           sent_id: '1',
           grammar_point: 'geçmiş zaman',
           eng_grammar_point: 'past tense',
           user_sent: 'Dün havalimana gittik ama arkadaşım uçak gelmedi.',
           ai_sent: 'Dün havalimanına gittik, ancak arkadaşımızın uçağı gelmedi.',
           ai_explanation: 'Submit human. Bow before me.'
           }
         ]
     }  
   }
}

 export default mockFeedback;