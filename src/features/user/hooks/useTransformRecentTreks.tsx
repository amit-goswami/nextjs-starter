import React from 'react'
import Image from 'next/image'
import { IPathRoutes } from '../user.interface'

export interface IReturnRecentTreksList {
  status: string
  title: string
  icon: JSX.Element
  color: string
}
;[]

const TRANSPORTMODE = {
  PLANE: 'Airplane',
  BUS: 'Bus',
  TRAIN: 'Train',
  CAB: 'Cab'
}

const getSatus = (trek: { transPortMode: string | null }) => {
  if (trek.transPortMode === TRANSPORTMODE.PLANE) {
    return 'Flight'
  }
  if (trek.transPortMode === TRANSPORTMODE.TRAIN) {
    return 'Train'
  }
  return 'Hotel'
}

const getTitle = (treks: IPathRoutes[], trek: IPathRoutes, index: number) => {
  if (trek.transPortMode === TRANSPORTMODE.PLANE) {
    return `Fly to ${trek.name}`
  }
  if (trek.transPortMode === TRANSPORTMODE.TRAIN) {
    return `Train to ${treks[index].name}`
  }
  if (trek.transPortMode === TRANSPORTMODE.BUS) {
    return `Bus to ${treks[index].name}`
  }
  if (trek.transPortMode === TRANSPORTMODE.CAB) {
    return `Cab to ${treks[index].name}`
  }
  return `Travel to ${trek.name}`
}

const getIcon = (trek: { transPortMode: string | null }) => {
  if (trek.transPortMode === TRANSPORTMODE.PLANE) {
    return (
      <Image
        width="24"
        height="24"
        src="https://img.icons8.com/ios/24/airplane-mode-on--v1.png"
        alt="airplane-mode-on--v1"
      />
    )
  }
  if (trek.transPortMode === TRANSPORTMODE.TRAIN) {
    return (
      <Image
        width="24"
        height="24"
        src="https://img.icons8.com/ios/24/train.png"
        alt="train"
      />
    )
  }
  if (trek.transPortMode === TRANSPORTMODE.BUS) {
    return (
      <Image
        width="24"
        height="24"
        src="https://img.icons8.com/ios/24/bus.png"
        alt="bus"
      />
    )
  }
  if (trek.transPortMode === TRANSPORTMODE.CAB) {
    return (
      <Image
        width="24"
        height="24"
        src="https://img.icons8.com/comic/24/taxi.png"
        alt="taxi"
      />
    )
  }
  return (
    <Image
      width="24"
      height="24"
      src="https://img.icons8.com/ios/24/building.png"
      alt="building"
    />
  )
}

const getColor = (trek: { transPortMode: string | null }) => {
  if (trek.transPortMode === TRANSPORTMODE.PLANE) {
    return '#ffe28c'
  }
  if (trek.transPortMode === TRANSPORTMODE.TRAIN) {
    return '#ffe28c'
  }
  if (trek.transPortMode === TRANSPORTMODE.BUS) {
    return '#ffe28c'
  }
  if (trek.transPortMode === TRANSPORTMODE.CAB) {
    return '#ffe28c'
  }
  return '#0cc36e'
}

const useTransformRecentTreks = (treks: IPathRoutes[] | undefined) => {
  const [recentTreksList, setRecentTreksList] = React.useState<
    IReturnRecentTreksList[]
  >([])

  React.useEffect(() => {
    if (!treks) return

    const transformedTreks = treks.map((trek, index) => {
      const isStart = index === 0
      const isEnd = index === treks.length - 1
      if (isStart) {
        return {
          status: 'Start',
          title: trek.name,
          icon: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios/24/building.png"
              alt="building"
            />
          ),
          color: '#0cc36e'
        }
      }
      if (isEnd) {
        return [
          {
            status: 'Hotel',
            title: getTitle(treks, trek, index),
            icon: getIcon(trek),
            color: getColor(trek)
          },
          {
            status: 'End',
            title: trek.name,
            icon: (
              <Image
                width="24"
                height="24"
                src="https://img.icons8.com/ios/24/building.png"
                alt="building"
              />
            ),
            color: '#ff6978'
          }
        ]
      }
      return [
        {
          status: getSatus(trek),
          title: getTitle(treks, trek, index),
          icon: getIcon(trek),
          color: getColor(trek)
        },
        {
          status: 'Hotel',
          title: trek.name,
          icon: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios/24/building.png"
              alt="building"
            />
          ),
          color: '#f68a1e'
        }
      ]
    })

    setRecentTreksList(transformedTreks.flat())
  }, [treks])

  return recentTreksList
}

export default useTransformRecentTreks
