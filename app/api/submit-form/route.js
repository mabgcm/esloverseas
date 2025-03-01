export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Extract all fields from the request body
        const {
            name,
            email,
            phone,
            destination,
            experience,
            certification,
            startDate,
            familySupport,
            concerns,
            message
        } = req.body;

        // Log data to console (for testing)
        console.log('Form Submission:', {
            name,
            email,
            phone,
            destination,
            experience,
            certification,
            startDate,
            familySupport,
            concerns,
            message
        });

        // Send via email using Nodemailer
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or your email service
            auth: {
                user: process.env.EMAIL_USER, // Your email from .env.local
                pass: process.env.EMAIL_PASS, // Your app-specific password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'bugucam@example.com', // Your receiving email
            subject: `New Application from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone || 'Not provided'}
                Preferred Destination: ${destination || 'Not specified'}
                Teaching Experience: ${experience || 'Not specified'}
                TEFL/TESOL Certification: ${certification || 'Not specified'}
                Planned Start Date: ${startDate || 'Not provided'}
                Family Support Level: ${familySupport || 'Not specified'}
                Biggest Concern: ${concerns || 'Not specified'}
                Message: ${message || 'None'}
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Form submitted successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to process form' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
}