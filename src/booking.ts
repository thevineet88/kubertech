// Free Cal.com 30-minute booking link. Swap this one string to change it everywhere.
export const BOOKING_URL = "https://cal.com/kuber-tech-solutions-jzfnry/30min";

// Any CTA calls this to open the booking modal (BookingModal listens for the event).
export function openBooking() {
  window.dispatchEvent(new Event("open-booking"));
}
