'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

interface BookingPageProps {
    params: { itemId: string };
}

const BookingPage = ({ params } : BookingPageProps) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const router = useRouter();

    const handleDateSelect = (date: string) => {
        setSelectedDate(date);
    };

    const proceedToPayment = () => {
        if(!selectedDate) {
            alert('Please select a date before proceeding.');
            return;
        }
        router.push(`/payment?itemId=${params.itemId}&date=${selectedDate}`);
    };


}

export default BookingPage
