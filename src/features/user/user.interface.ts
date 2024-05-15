export enum USER_PROFILE_QUERY_KEYS {
  GET_PROFILE_DETAILS = 'GET_PROFILE_DETAILS'
}

export enum USER_TYPE {
  CUSTOMER = 'customer'
}

export interface IProfileDetails {
  bio: string
  birth_date: string | null
  books_read: string | null
  education_background: string | null
  email: string
  fb_handle: string | null
  gov_id: string | null
  image: string | null
  insta_handle: string | null
  music_interest: string | null
  tweet_handle: string | null
  user_type: USER_TYPE
  username: string
  weight: string | null
}

export interface ITrek {
  trek_id: string
  trek_name: string
  _id: string
}

export interface IRecentTrek {
  contactNumber: string
  destinationLocation: string
  email: string
  endDate: string
  price: number
  sourceLocation: string
  startDate: string
  trek: ITrek
  _id: string
}

export interface IUserAllDetails {
  profileDetails: IProfileDetails
  recentTreks: IRecentTrek
}
