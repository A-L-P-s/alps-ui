export interface IUsers {
  data: ITruncUser[]
}

export interface ITruncUser {
  id: string,
  type: string,
  attributes: IUserData
}

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
  challenges: IChallenge[] | null
}

export interface IChallenge {
  id: number,
  user_id: number,
  language: string,
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  created_at: string
}

export interface ISentences {
  sent_id: string,
  grammar_point: string,
  eng_grammar_point: string,
  user_sent: string,
  ai_sent: string,
  ai_explanation: string
}

export interface IGrammarPoint {
  grammar_point: string,
  eng_grammar_point: string
}

export interface IPrompt {
  data: {
    id: null,
    type: string,
    attributes: IPromptData
  }
}

export interface IPromptData {
  user_id: string,
  language: string,
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  created_at: null,
  grammar_points: IGrammarPoint[],
  sentences: null
}

export interface IFeedback {
  data: {
    id: string,
    type: string,
    attributes: IFeedbackData
  }
}

export interface IFeedbackData {
  user_id: number,
  language: string,
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  created_at: string,
  grammar_points: null,
  sentences: ISentences[]

}

export interface ISubmission {
  language: string | undefined,
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  sentences: ISubmissionSentence[]
}

export interface ISubmissionSentence {
  grammar_point: string,
  eng_grammar_point: string,
  user_sent: string
}

export interface ISubmissionResponse {
  data: {
    id: string,
    type: string
  }
}