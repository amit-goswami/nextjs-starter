import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'

export const RefundAndCancellationComponent = () => {
  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-198px)] overflow-y-scroll">
        <div className="flex align-items-end justify-between">
          <h3 className="text-center font-bold text-xl my-4">Booking Policy</h3>
        </div>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Standard check-in time at the hotel is normally 13:00 HRS and
            check-out is 11:00 HRS. An early check-in, or a late checkout is
            solely based on the discretion of the hotel.
          </li>
          <li>
            A maximum of 3 adults are allowed in one room. The third occupant
            shall be provided a mattress/rollaway bed.
          </li>
          <li>
            The itinerary is fixed and can be modified only via our website
            ‘Edit my route’ option or by talking to our travel expert with
            written communication from you. Transportation shall be provided as
            per the itinerary and will not be at disposal.
          </li>
          <li>
            For any paid activity which is non-operational due to any unforeseen
            reason, we will process refund & same should reach the guest within{' '}
            <strong>15 days of processing the refund.</strong>
          </li>
          <li>
            For any activity which is complimentary and not charged to Baha &
            guest, no refund will be processed.
          </li>
          <li>AC will not be functional anywhere in cold or hilly areas.</li>
          <li>
            Entrance fee, parking and guide charges are included in the packages
          </li>
          <li>
            {' '}
            Airline seats and hotel rooms are subject to availability at the
            time of booking.
          </li>
          <li>
            In case of unavailability in the listed hotels, arrangement for an
            alternate accommodation will be made in a hotel of similar standard.
          </li>
          <li>
            In case your package needs to be cancelled due to any natural
            calamity, weather conditions etc. Baha shall strive to give you the
            maximum possible refund subject to the agreement made with our trade
            partners/vendors.
          </li>
          <li>
            Baha reserves the right to modify the itinerary at any point, due to
            reasons including but not limited to: Force Majeure events, strikes,
            fairs, festivals, weather conditions, traffic problems, overbooking
            of hotels / flights, cancellation / rerouting of flights, closure of
            /entry restrictions at a place of visit, etc. While we will do our
            best to make suitable alternate arrangements, we would not be held
            liable for any refunds/compensation claims arising out of this
          </li>
          <li>
            The booking price does not include expenses of personal nature, such
            as laundry, telephone calls, room service, alcoholic beverages, mini
            bar charges, tips, portage, camera fees etc
          </li>
          <li>
            Any other items not mentioned under inclusions are not included in
            the cost of the booking
          </li>
          <li>
            Cost of deviation and cost of extension of the validity on your
            ticket is not included.
          </li>
          <li>
            For queries regarding cancellations and refunds, please refer to our
            Cancellation Policy
          </li>
          <li>
            Disputes, if any, shall be subject to the exclusive jurisdiction of
            the courts in New Delhi.
          </li>
        </ul>
        <h2 className="font-bold text-2xl my-4">Cancellation Policy</h2>
        <div className="my-4">
          <strong>If you Cancel your Holiday</strong>
          <p className="text-justify my-2">
            You or any member of your party may cancel their travel arrangements
            at any time. Written notification or an e-mail to that effect from
            the person who made the booking must be received at our office. The
            cancellation charges applicable are as per the published
            cancellation policy below:
          </p>
          <h2 className="font-bold text-2xl my-4">
            Cancellation charges per person
          </h2>
          <div className="flex flex-column">
            <span className="red-text">
              36 days or more before departure: 25% of total cost
            </span>
            <span className="red-text">
              16-35 days before departure: 50% of total cost
            </span>
            <span className="red-text">
              Less than 15 days before departure: 100% of total cost
            </span>
          </div>
        </div>
        <div className="my-4">
          <strong>If we change or cancel your holiday</strong>
          <p className="text-justify my-2">
            We do plan the arrangements in advance. It is unlikely that we will
            have to make any changes to your travel arrangements. Occasionally,
            we may have to make changes and we reserve the right to do so at any
            time. If there are any changes, we will advise you of them at the
            earliest possible date. We also reserve the right under any
            circumstances to cancel your travel arrangements by assigning
            reasons to you.
          </p>
          <p className="text-justify my-2">
            If we are unable to provide the booked travel arrangements due to
            reasons beyond our control (e.g., bad weather): We shall first try
            to offer alternative dates for the tour if the tour hasn&apos;t
            already commenced.
          </p>
          <p className="text-justify my-2">
            If the tour has already commenced, then we shall refund the booking
            price/fee charged to you on a pro-rata basis depending on the
            portion of the tour utilized by you. In all circumstances, however,
            our liability shall be limited to refunding to you the price we
            charged as tour fees.
          </p>
          <p className="text-justify my-2">
            Refunds, if any, in the event of{' '}
            <strong>Cancellation shall reach</strong> the guest{' '}
            <strong>within 10-15 days of processing the refund.</strong>
          </p>
        </div>
        <div className="my-4">
          <strong>If you want to change your holiday plan</strong>
          <p className="text-justify my-2">
            After confirmation of services, if you wish to change your travel
            arrangements in any way (e.g., your chosen departure date or
            accommodation), we will do our utmost to make these changes, but it
            may not always be possible. Any request for changes must be in
            writing from the person who made the booking. All cost incurred due
            to amendment will be borne by you.
          </p>
          <strong>If you have a complaint</strong>
          <p className="text-justify my-2">
            If you face any problem during your holiday, please inform the
            relevant supplier (e.g., your trek lead, your hotelier, transporter
            etc.) and/or our representative immediately who will endeavour to
            set things right. If your complaint is not resolved locally, please
            follow this up within 15 days of your return home by writing to us,
            with your booking reference and all other relevant information.
            However, please be advised that while we are happy to assist you in
            the redressal of your complaint, if any, we will be able to extend
            only our best efforts in managing/coordinating your complaint with
            the respective service provider. All third-party service providers
            are independent contractors who are at no time under our control or
            supervision.
          </p>
          <h4 className="text-justify my-2">
            All booking vouchers and tickets will be provided 3 days before
            departure.
          </h4>
          <strong>Our Liability to You</strong>
          <p className="text-justify my-2">
            We accept responsibility for ensuring that your travel arrangements,
            which you book with us, are supplied as represented and promised to
            you. If any parts of your travel arrangements are not provided as
            promised, due to the fault of our employees, agents, we will pay you
            appropriate compensation if this has affected the enjoyment of your
            travel arrangements. Our liability in all cases shall be limited to
            the costs of your travel arrangements. We do not accept any
            responsibility for any third-party services or service providers,
            like hotels, transport etc. For example, travel delays are the
            responsibility of the transporters and inefficient hospitality is
            the responsibility of the hotels.
          </p>
          <p className="text-justify my-2">
            We are only your tour operator and at no time do we act as managers
            for your respective responsibilities and personal obligations. We
            are therefore not responsible for your acts, misdemeanour,
            omissions, and neither are we responsible for managing any of your
            personal affairs; for example, we are not responsible for ensuring
            the safety of your personal belongings, travel documents, etc. at
            any time before the commencement of the tour or after it or during
            the tour.
          </p>
          <strong>Exactness Not Guaranteed</strong>
          <p className="text-justify my-2">
            We cannot and do not guarantee the exactness of any service that may
            be provided to you. For instance, photographs of the interiors of
            the hotel rooms posted on our website have been sourced from the
            respective Hotel management, the visual appeal of a room selected by
            you cannot and is not guaranteed by us. Similarly, while we assure
            you of enjoyable holidays, we cannot and do not guarantee or
            represent that such tour will be as per your mental perception,
            imagination or thought about such tours.
          </p>
          <strong>General Important Notes</strong>
          <p className="text-justify my-2">
            In case there is any change in price the same will be communicated
            to yourself and only after your confirmation, we will proceed
            further. There will be no reduction for un-utilized services
            Surcharges may be applicable over and above the holiday price for
            the requested period. The same will be advised at the time of
            booking or prior to confirmations.
          </p>
          <strong>Forfeiture Of Deposits</strong>
          <p className="text-justify my-2">
            We shall be within our rights to forfeit the non- refundable
            interest free deposit paid by you. In the event you cancel the
            booking, or on failure on your part to adhere to the tour payment
            schedule as informed in the documentation Check List, or in the
            event the visa of any country is not granted, or you are unable to
            travel on the tour booked due to any reason whatsoever, including
            medical ground or sickness, the non-refundable interest free
            deposits shall stand forfeited, and the scale of cancellation set
            out in the How to Book section of the brochure shall be applicable
            and binding
          </p>
          <strong>Important Notes</strong>
          <p className="text-justify my-2">
            Please be advised that these are the sole and complete terms and
            conditions governing the tour operations, supplemented only by the
            User Agreement. No employees of our Company or our agents have the
            authority to amend, modify or change these conditions, and you are
            advised to rely on the terms `&quot;`as is`&quot;`. Baha reserves
            the right to change or modify these Terms and Conditions at any time
            without notice.
          </p>
        </div>
      </Container>
    </BackGroundDiv>
  )
}
