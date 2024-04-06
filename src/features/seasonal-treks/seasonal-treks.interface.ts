export enum MONTHS {
  JAN = 'Jan',
  FEB = 'Feb',
  MAR = 'Mar',
  APR = 'Apr',
  MAY = 'May',
  JUN = 'Jun',
  JUL = 'Jul',
  AUG = 'Aug',
  SEP = 'Sep',
  OCT = 'Oct',
  NOV = 'Nov',
  DEC = 'Dec'
}

export interface ITreks {
  trek_id: string
  trek_name: string
  trek_milestone: string
  price: null
  createdAt: null
  updatedAt: null
  ideal_month: MONTHS[]
  genre: null
  images: null
  details: null
  state: string
  altitude: string
  days: number
  media: string[]
  coordinates: null
  id: null
}

export interface ISeasonalTreks {
  id: null
  treks: ITreks[]
  createdAt: null
  updatedAt: null
}

export enum SEASONS {
  WINTER = 'Winter',
  SUMMER = 'Summer',
  MONSOON = 'Monsoon'
}

export enum SEASONAL_TREKS_QUERY_KEYS {
  GET_SEASONAL_TREKS = 'GET_SEASONAL_TREKS'
}
