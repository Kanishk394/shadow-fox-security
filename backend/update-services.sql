-- Clear existing services and add comprehensive service list
DELETE FROM services;

-- Insert comprehensive services with Indian pricing
INSERT INTO services (name, price, description) VALUES
('Personal Protection', '₹15,000/day', 'Elite bodyguard services with ex-military trained operators for VIP protection and personal security.'),
('Party Protection', '₹8,000/event', 'Comprehensive security coverage for private parties, celebrations, and social gatherings.'),
('Event Security', '₹12,000/day', 'Professional security operations for corporate events, conferences, and public gatherings.'),
('Property Security', '₹5,000/day', '24/7 tactical monitoring and rapid response for residential and commercial properties.'),
('VIP Transport', '₹20,000/trip', 'Secure transportation services with armored vehicles and trained security escorts.'),
('Corporate Security', '₹25,000/day', 'Executive protection and corporate facility security for high-profile business operations.'),
('Wedding Security', '₹10,000/event', 'Discreet security services for wedding ceremonies and receptions ensuring guest safety.'),
('Cyber Security Consultation', '₹3,000/hour', 'Digital security assessment and protection strategies for personal and business data.'),
('Investigation Services', '₹2,500/hour', 'Professional investigation services for personal, corporate, and legal matters.'),
('Security Training', '₹5,000/session', 'Personal safety and security awareness training for individuals and corporate teams.'),
('Residential Security', '₹4,000/day', 'Home security services including surveillance and access control for residential properties.'),
('Celebrity Protection', '₹30,000/day', 'Specialized protection services for celebrities, politicians, and high-profile personalities.');