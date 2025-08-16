-- Fix services table permissions for dashboard operations

-- Drop existing policies
DROP POLICY IF EXISTS "Admin can manage services" ON services;
DROP POLICY IF EXISTS "Anyone can view services" ON services;

-- Create new policies with proper permissions
CREATE POLICY "Enable read access for all users" ON services FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON services FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON services FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON services FOR DELETE USING (auth.role() = 'authenticated');

-- Ensure RLS is enabled
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Grant necessary permissions
GRANT ALL ON services TO authenticated;
GRANT ALL ON services TO anon;