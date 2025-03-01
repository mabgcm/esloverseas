import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const formData = await req.json();

        const {
            name,
            email,
            phone,
            destination,
            experience,
            certification,
            startDate,
            budget,
            familySupport,
            concerns,
            message
        } = formData;

        console.log('Form Submission:', {
            name,
            email,
            phone,
            destination,
            experience,
            certification,
            startDate,
            budget,
            familySupport,
            concerns,
            message
        });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log('Attempting to send email with transporter:', transporter.options);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'bugucam@example.com',
            subject: `New Application from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone || 'Not provided'}
                Preferred Destination: ${destination || 'Not specified'}
                Teaching Experience: ${experience || 'Not specified'}
                TEFL/TESOL Certification: ${certification || 'Not specified'}
                Planned Start Date: ${startDate || 'Not provided'}
                Monthly Budget (USD): ${budget || 'Not provided'}
                Family Support Level: ${familySupport || 'Not specified'}
                Biggest Concern: ${concerns || 'Not specified'}
                Message: ${message || 'None'}
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        return new Response(JSON.stringify({ message: 'Form submitted successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error processing form submission:', error);
        return new Response(JSON.stringify({ error: 'Failed to process form submission' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}