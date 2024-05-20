const getRandomImage = () => {
  const randomImage = [
    '/assets/summer.jpg',
    '/assets/winter.jpg',
    '/assets/spring.jpg'
  ]
  return randomImage[Math.floor(Math.random() * randomImage.length)]
}

const appUtils = {
  getRandomImage
}

export default appUtils
