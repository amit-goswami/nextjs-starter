import { Button } from '@/components/atoms/button'
import { IRecentTrek } from '@/features/user/user.interface'

type UpcomingTrekDetailsProps = {
  recentTreks: IRecentTrek | null | undefined
}

export const RenderRecentTreksAction = ({
  recentTreks
}: UpcomingTrekDetailsProps) => {
  const paymentInitilize = async () => {
    // try {
    //   const response = await createOrder({ trek_request: recentTreks?._id })
    //   return response
    // } catch (err) {
    //   Logger.error(err)
    //   throw err
    // }
  }
  const handlePayClicked = async () => {
    // if (recentTreks?._id) {
    //   const response = await paymentInitilize()
    //   await paymentCheckOut(response.data.payment_session_id)
    // }
  }

  const downLoadTicket = async () => {
    // if (!recentTreks?._id) return
    // try {
    //   const res = await customAxios.get(
    //     `agent/trek-request/${recentTreks?._id}/ticket/download/`,
    //     {
    //       responseType: 'blob'
    //     }
    //   )
    //   const a = document.createElement('a')
    //   const url = window.URL.createObjectURL(res.data)
    //   a.href = url
    //   const filname = recentTreks?.ticket?.split('/')[1]
    //   a.download = filname
    //   document.body.append(a)
    //   a.click()
    //   a.remove()
    //   window.URL.revokeObjectURL(url)
    // } catch (err) {
    //   console.log(err)
    // }
  }

  const totalAmount = recentTreks?.totalAmount
  const paidAmount = recentTreks?.paidAmount
  const remainingAmount = Number(totalAmount) - Number(paidAmount)
  const tenPercentOfTotalAmount = (Number(totalAmount) * 10) / 100
  if (recentTreks?.status === 'Ticket upload') {
    return <Button btnText="Download Ticket" onClick={() => downLoadTicket()} />
  }

  switch (recentTreks?.paidAmount) {
    case 0:
      return (
        <Button
          btnText={`Pay Advance ₹${tenPercentOfTotalAmount}/-`}
          onClick={() => handlePayClicked()}
        />
      )
    case recentTreks?.totalAmount:
      return (
        <Button
          btnText={`Pay Remaining Amount ₹${remainingAmount}/-`}
          onClick={() => handlePayClicked()}
        />
      )
    default:
      return (
        <Button
          btnText={`Pay Remaining Amount ₹${remainingAmount}/-`}
          onClick={() => handlePayClicked()}
        />
      )
  }
}
