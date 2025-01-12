'use client';

import { useState } from "react";
import { DateRangePicker } from "react-date-range-ts";
import type { Range } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { createBooking } from "@/actions/booking";
import { fetchUser } from "@/actions/user";
import { getItemById } from "@/actions/item";

interface BookingPageProps {
    itemId: string;
}

interface DateRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

interface Ranges {
  selection: DateRange; 
}

const BookingPage = ({ params } : {params: BookingPageProps}) => {
    const { itemId } = params;
    const [ dateRange, setDateRange ] = useState({
        startDate: new Date(),
        endDate: addDays(new Date(), 1),
        key: "selection",
    });
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSelect = (ranges: {selection: Ranges }) => {
      setDateRange(ranges.selection);
    };

    const handleBooking = async() => {
      const user = await fetchUser();
      const item = await getItemById(parseInt(itemId, 10));

      const formData = new FormData();
      formData.append("item_id", itemId);
      formData.append("borrower_id", user?.user_id.toString() ?? "");
      formData.append("lender_id", item?.user_id.toString() ?? "");
      formData.append("start_date", dateRange.startDate.toISOString());
      formData.append("end_date", dateRange.endDate.toISOString());
      formData.append("status", "Pending");

      try {
          const booking = await createBooking(formData);

          if(booking) {
              setBookingConfirmed(true);
          }
      } catch(error) {
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
              <p className="text-gray-600">Your booking has been successfully created.</p>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Select Date and Time
              </h1>
              <div className="mb-4">
                <DateRangePicker
                  ranges={[dateRange]}
                  onChange={handleSelect}
                  minDate={new Date()} // Prevent selecting past dates
                  rangeColors={["#f87171"]} // Customize the color
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
}

export default BookingPage
