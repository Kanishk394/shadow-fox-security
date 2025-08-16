-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  date DATE NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users (admin)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'bookings' AND policyname = 'Admin can view all bookings') THEN
    CREATE POLICY "Admin can view all bookings" ON bookings FOR ALL USING (auth.role() = 'authenticated');
  END IF;
END $$;

-- Create policy for anonymous users (customers can insert)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'bookings' AND policyname = 'Anyone can insert bookings') THEN
    CREATE POLICY "Anyone can insert bookings" ON bookings FOR INSERT WITH CHECK (true);
  END IF;
END $$;

-- WhatsApp notifications can be added later via Edge Functions