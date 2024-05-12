export interface ITrekDetail {
  trek: {
    trek_id: string
    trek_name: string
    trek_milestone: string
    price: number
    createdAt: string
    updatedAt: string
    ideal_month: string[]
    genre: string[]
    images: string[]
    details: {
      overview: string
      max_altitude: string
      entry_points: string
      visible_peaks_on_trek: string
      duration: string
      itinerary_brief: string
      must_watch: string
      essentials: string
      inclusions: string
      trek_difficulty: string
      best_season: string
    }
    state: string
    altitude: string
    days: number
    media: string[]
    coordinates: {
      point: number[]
      iconUrl: string
      tool_tip: string
      altitude: string
    }[]
  }
}

export enum TREK_DETAIL_QUERY_KEYS {
  GET_TREK_DETAIL = 'GET_TREK_DETAIL'
}
