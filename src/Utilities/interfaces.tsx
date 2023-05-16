export interface IUser {
  data: {
    id: string,
    type: string,
    attributes: IUserData
  }
}

export interface IUserData {
  name: string,
  preferred_lang: string,
  challenges: IChallenge[]
}

export interface IChallenge {
  challenge_id: string,
  language: string,
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  created_at: string
}

export interface ISentences {
  sent_id: string;
  grammar_point: string;
  eng_grammar_point: string;
  user_sent: string;
  ai_sent: string;
}

export interface IGrammarPoint {
  grammar_point: string;
  eng_grammar_point: string;
}