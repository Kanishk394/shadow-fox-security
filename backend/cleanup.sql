-- Drop existing trigger and function that's causing the error
DROP TRIGGER IF EXISTS on_booking_created ON bookings;
DROP FUNCTION IF EXISTS notify_new_booking();