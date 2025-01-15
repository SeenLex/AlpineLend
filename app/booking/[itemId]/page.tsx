import { getBookingsByItemId } from '@/actions/booking';
import BookingPage from '@/components/BookingPage'
import { subDays } from 'date-fns';
import React from 'react'

const Booking = async ({params}: {params: Promise<{itemId:string}>}) => {

  const itemId = (await params).itemId;
  const bookings = await getBookingsByItemId(parseInt(itemId));
  const disabledRanges = bookings.map((booking) => ({
    from: new Date(booking.start_date),
    to: new Date(booking.end_date),
  }));
  disabledRanges.push({
    from: new Date(1970,0,1),
    to: subDays(new Date(), 1),
  });
  return (
    <BookingPage disabledRanges={disabledRanges} />
  )
}

export default Booking