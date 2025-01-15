"use client";

import { useState } from "react";
import { createBooking } from "@/actions/booking";
import { fetchUser } from "@/actions/user";
import { getItemById } from "@/actions/item";
import { DateRangePicker } from "@/components/DateRangePicker";
import { DateRange, DayPicker } from "react-day-picker";
import { useParams } from "next/navigation";

const BookingPage = ({disabledRanges}: {disabledRanges: React.ComponentProps<typeof DayPicker>["disabled"]}) => {
  const { itemId } = useParams<{ itemId: string }>();
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBooking = async () => {
    if (!date || !date.from || !date.to) {
      return;
    }
    const user = await fetchUser();
    const item = await getItemById(parseInt(itemId, 10));

    const formData = new FormData();
    formData.append("item_id", itemId);
    formData.append("borrower_id", user?.user_id.toString() ?? "");
    formData.append("lender_id", item?.user_id.toString() ?? "");
    formData.append("start_date", date.from.toISOString());
    formData.append("end_date", date.to.toISOString());
    formData.append("status", "Pending");

    try {
      const booking = await createBooking(formData);

      if (booking) {
        setBookingConfirmed(true);
      }
    } catch (error) {
      console.error("Booking error: ", error);
      setError("Failed to create booking. Please try again");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        {bookingConfirmed ? (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-gray-600">
              Your booking has been successfully created.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Select Date and Time
            </h1>
            <div className="mb-4">
              <DateRangePicker
                date={date}
                setDate={setDate}
                disabled={disabledRanges}
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              onClick={handleBooking}
              className="w-full px-6 py-2 bg-gray-800 text-white font-semibold rounded-md shadow hover:bg-gray-900"
            >
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
