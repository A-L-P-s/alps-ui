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