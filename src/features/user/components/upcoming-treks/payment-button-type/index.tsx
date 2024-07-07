import { Button } from '@/components/atoms/button'
import { paymentCheckOut } from '@/features/shared/payment-redirect'
import { IRecentTrek } from '@/features/user/user.interface'
import userService from '@/features/user/user.service'

type UpcomingTrekDetailsProps = {
  recentTreks: IRecentTrek | null | undefined
}

export const RenderRecentTreksAction = ({
  recentTreks
}: UpcomingTrekDetailsProps) => {
  const handlePayClicked = async () => {
    if (recentTreks?._id) {
      const { payment_session_id } = await userService.paymentInitilize(
        recentTreks?._id
      )
      await paymentCheckOut(payment_session_id)
    }
  }

  const downLoadTicket = async () => {
    if (!recentTreks?._id) return
    try {
      const response = await userService.downloadTicket(recentTreks?._id)
      const a = document.createElement('a')
      const url = window.URL.createObjectURL(response)
      a.href = url
      const filname = recentTreks?.ticket?.split('/')[1]
      a.download = filname
      document.body.append(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.log(err)
    }
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
