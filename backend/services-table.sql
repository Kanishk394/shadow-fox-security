-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default services
INSERT INTO services (name, price, description) VALUES
('Personal Protection', '$200/day', 'Elite bodyguard services with military-trained operators for VIP protection.'),
('Event Security', '$150/hour', 'Comprehensive security operations for high-profile events and gatherings.'),
('Property Security', '$100/day', '24/7 tactical monitoring and rapid response for critical facilities.'),
('VIP Transport', '$300/trip', 'Secure transportation services with armored vehicles.')
ON CONFLICT DO NOTHING;

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create policies
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'services' AND policyname = 'Admin can manage services') THEN
    CREATE POLICY "Admin can manage services" ON services FOR ALL USING (auth.role() = 'authenticated');
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'services' AND policyname = 'Anyone can view services') THEN
    CREATE POLICY "Anyone can view services" ON services FOR SELECT WITH CHECK (true);
  END IF;
END $$;