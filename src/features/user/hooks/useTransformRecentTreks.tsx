// import { useEffect, useState } from 'react'

// const getSatus = (trek) => {
//   if (trek.transPortMode === 'plane') {
//     return 'Flight'
//   }
//   if (trek.transPortMode === 'train') {
//     return 'Train'
//   }
//   return 'Hotel'
// }

// const getTitle = (treks, trek, index) => {
//   if (trek.transPortMode === 'plane') {
//     return `Fly from ${trek.name}`
//   }
//   if (trek.transPortMode === 'train') {
//     return `Train from ${treks[index - 1].name}`
//   }
//   return `Travell from ${trek.name}`
// }

// const getIcon = (trek) => {
//   if (trek.transPortMode === 'plane') {
//     return 'pi pi-send'
//   }
//   if (trek.transPortMode === 'train') {
//     return 'pi pi-pause'
//   }
//   return 'pi pi-building'
// }

// const getColor = (trek) => {
//   if (trek.transPortMode === 'plane') {
//     return '#ffe28c'
//   }
//   if (trek.transPortMode === 'train') {
//     return '#ffe28c'
//   }
//   return '#0cc36e'
// }

// const useTransformRecentTreks = (treks) => {
//   const [recentTreksList, setRecentTreksList] = useState()
//   useEffect(() => {
//     const transformedTreks = treks?.map((trek, index) => {
//       const isStart = index === 0
//       const isEnd = index === treks.length - 1
//       if (isStart) {
//         const status = 'Start'
//         const title = trek.name
//         const icon = 'pi pi-circle-[#0cc36e]'
//         const color = '#0cc36e'
//         return {
//           status,
//           title,
//           icon,
//           color
//         }
//       }
//       if (isEnd) {
//         const marketBeforeEnd = {
//           status: 'Hotel',
//           title: getTitle(treks, trek, index),
//           icon: getIcon(trek),
//           color: getColor(trek)
//         }
//         const endMarker = {
//           status: 'End',
//           title: trek.name,
//           icon: 'pi pi-circle-[#ff6978]',
//           color: '#ff6978'
//         }
//         return [marketBeforeEnd, endMarker]
//       }
//       const travelTypeMarker = {
//         status: getSatus(trek),
//         title: getTitle(treks, trek, index),
//         icon: getIcon(trek),
//         color: getColor(trek)
//       }
//       const destinationMarker = {
//         status: 'Hotel',
//         title: trek.name,
//         icon: 'pi pi-building',
//         color: '#0cc36e'
//       }
//       return [travelTypeMarker, destinationMarker]
//     })
//     setRecentTreksList(transformedTreks.flat())
//   }, [])

//   return recentTreksList
// }

// export default useTransformRecentTreks
