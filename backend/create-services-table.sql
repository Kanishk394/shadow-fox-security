-- Create services table first
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for all users" ON services FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users only" ON services FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users only" ON services FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Enable delete for authenticated users only" ON services FOR DELETE USING (auth.role() = 'authenticated');

-- Grant permissions
GRANT ALL ON services TO authenticated;
GRANT ALL ON services TO anon;

-- Insert default services
INSERT INTO services (name, price, description) VALUES
('Personal Protection', 'Rs 15,000/day', 'Elite bodyguard services with ex-military trained operators for VIP protection and personal security.'),
('Party Protection', 'Rs 8,000/event', 'Comprehensive security coverage for private parties, celebrations, and social gatherings.'),
('Event Security', 'Rs 12,000/day', 'Professional security operations for corporate events, conferences, and public gatherings.'),
('Property Security', 'Rs 5,000/day', '24/7 tactical monitoring and rapid response for residential and commercial properties.'),
('VIP Transport', 'Rs 20,000/trip', 'Secure transportation services with armored vehicles and trained security escorts.'),
('Corporate Security', 'Rs 25,000/day', 'Executive protection and corporate facility security for high-profile business operations.'),
('Wedding Security', 'Rs 10,000/event', 'Discreet security services for wedding ceremonies and receptions ensuring guest safety.'),
('Cyber Security Consultation', 'Rs 3,000/hour', 'Digital security assessment and protection strategies for personal and business data.'),
('Investigation Services', 'Rs 2,500/hour', 'Professional investigation services for personal, corporate, and legal matters.'),
('Security Training', 'Rs 5,000/session', 'Personal safety and security awareness training for individuals and corporate teams.'),
('Residential Security', 'Rs 4,000/day', 'Home security services including surveillance and access control for residential properties.'),
('Celebrity Protection', 'Rs 30,000/day', 'Specialized protection services for celebrities, politicians, and high-profile personalities.');