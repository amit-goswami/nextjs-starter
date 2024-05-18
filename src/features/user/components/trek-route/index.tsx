import React from 'react'
import './upcoming-trek.css'
import PropTypes from 'prop-types'
import useTransformRecentTreks from '../hooks/useTransformRecentTreks'

const downloadTicket = async (id) =>
  customAxios.get(`agent/trek-request/${id}/ticket/download/`, {
    responseType: 'blob'
  })

function UpcomingTrek({ recentTreks }) {
  const recentTreksList = useTransformRecentTreks(recentTreks.pathRoutes || [])

  const downLoadTicket = async () => {
    try {
      if (recentTreks) {
        const res = await downloadTicket(recentTreks._id)
        const a = document.createElement('a')
        const url = window.URL.createObjectURL(res?.data)
        a.href = url
        const filname = recentTreks?.ticket?.split('/')[1]
        a.download = filname
        document.body.append(a)
        a.click()
        a.remove()
        window.URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const customizedMarker = (item) => (
    <span
      className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
      style={{ backgroundColor: item.color }}
    >
      <i className={item.icon} />
    </span>
  )

  const customizedContent = (item) => {
    if (!item) {
      return null
    }
    const isStartOrEnd = item.status === 'Start' || item.status === 'End'
    const text = isStartOrEnd
      ? `${item.status}: ${item.title}`
      : `${item.title}`
    const bgColor = isStartOrEnd ? item.color : '#eee'
    const textColor = isStartOrEnd ? '#ffffff' : '#000000'
    return (
      <div className="flex align-items-center justify-content-between w-full">
        <div className="flex align-items-center gap-2">
          <div
            className="customizedContent"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              width: 'fit-content'
            }}
          >
            <div className="text-secondary">{text}</div>
          </div>
          {/* <div>
            {isStartOrEnd && (
              <i
                className="pi pi-pencil pencil-icon"
              />
            )}
            {
              item.status === 'Hotel' && (
                <div className="select-guide">
                  <span className="ms-1">Select Guide</span>
                </div>
              )
            }
          </div> */}
        </div>
        {/* {
          item.day && (
            <div className="time-taken">
              {`Day ${item.day}`}
            </div>
          )
        } */}
      </div>
    )
  }

  const title = 'Upcoming Trek'

  // "_id": "66365a408e0711032d673e85",
  //   "trek": {
  //       "trek_id": "roopkund-trek-via-lohajung",
  //       "trek_name": "Roopkund Trek Via Lohajung"
  //   },
  //   "sourceLocation": "New Delhi",
  //   "destinationLocation": "Jammu",
  //   "contactNumber": 8978675645,
  //   "startDate": "05/04/2024 ",
  //   "endDate": " 05/04/2024",
  //   "email": "mern.amitkumar@gmail.com",
  //   "price": 14300.0

  return (
    <div className="flex flex-column align-items-start justify-content-start">
      {recentTreksList?.length === 0 && (
        <div className="no-treks">
          <div className="text-secondary trek-details">
            Trek Name: {recentTreks.trek.trek_name}
            <br />
          </div>
          <div className="text-secondary trek-details">
            Source Location: {recentTreks.sourceLocation}
            <br />
          </div>
          <div className="text-secondary trek-details">
            Destination Location: {recentTreks.destinationLocation}
            <br />
          </div>
          <div className="text-secondary trek-details">
            Start Date: {recentTreks.startDate}
            <br />
          </div>
          <div className="text-secondary trek-details">
            End Date: {recentTreks.endDate}
            <br />
          </div>
          <div className="text-secondary trek-details">
            Contact Number: {recentTreks.contactNumber}
            <br />
          </div>
          <div className="text-secondary trek-details">
            Email: {recentTreks.email}
            <br />
          </div>
        </div>
      )}
      <Timeline
        value={recentTreksList}
        align="left"
        className="customized-timeline"
        marker={customizedMarker}
        content={customizedContent}
      />
      <div className="flex flex-column">
        <span className="py-2">Download Ticket</span>
        <Button
          className="import-button"
          label="Download"
          icon="pi pi-download"
          onClick={downLoadTicket}
        />
      </div>
    </div>
  )
}

export default UpcomingTrek
