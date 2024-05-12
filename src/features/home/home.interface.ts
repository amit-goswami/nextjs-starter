interface ITrek {
  trek_id: string
  trek_name: string
  trek_milestone: string
  price: number
  ideal_month: string[]
  state: string
  altitude: string
  days: number
  media: string[]
}

export interface IBestTreksList {
  treks: ITrek[]
}

export enum BEST_TREKS_QUERY_KEYS {
  GET_BEST_TREKS = 'GET_BEST_TREKS'
}
