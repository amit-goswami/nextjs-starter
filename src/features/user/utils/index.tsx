const customizedMarker = (item: {
  status: string
  title: string
  color: string
  icon: string | JSX.Element
}) => (
  <span
    className="flex items-center justify-center text-white rounded w-12 h-12 shadow-md"
    style={{ backgroundColor: item.color }}
  >
    <div className="">{typeof item.icon === 'string' ? null : item.icon}</div>
  </span>
)

const customizedContent = (item: {
  status: string
  title: string
  color: string
  icon: string | JSX.Element
}) => {
  if (!item) {
    return null
  }
  const isStartOrEnd = item.status === 'Start' || item.status === 'End'
  const text = isStartOrEnd ? `${item.status}: ${item.title}` : item.title
  const bgColor = isStartOrEnd ? item.color : '#eee'
  const textColor = isStartOrEnd ? '#ffffff' : '#000000'
  return (
    <div className="flex items-center w-full mt-1">
      <div className="flex items-center gap-2">
        <div
          className="px-3 py-2 rounded-full"
          style={{
            backgroundColor: bgColor,
            color: textColor,
            width: 'fit-content'
          }}
        >
          <div className="leading-4 font-normal">{text}</div>
        </div>
      </div>
    </div>
  )
}

export { customizedMarker, customizedContent }
