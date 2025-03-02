'use client';
import React, { useState } from 'react';

const buttonStyles = {
    backgroundColor: '#ff5055',
    borderColor: '#ff5055',
    transition: 'background-color 0.3s, border-color 0.3s',
};

export default function CtaFormPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        experience: '',
        certification: '',
        startDate: '',
        budget: '', // Added to match potential form input
        familySupport: '',
        concerns: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData); // Debug log
        try {
            const response = await fetch('/api/submit-form', { // Corrected endpoint
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            console.log('API Response:', response); // Debug API response
            if (response.ok) {
                alert('Application submitted successfully!');
                setFormData({
                    name: '', email: '', phone: '', destination: '', experience: '',
                    certification: '', startDate: '', budget: '', familySupport: '',
                    concerns: '', message: ''
                });
            } else {
                const errorText = await response.text();
                console.error('API Error:', errorText);
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Apply to Teach in Asia</h1>
                <p className="text-center text-muted mb-5">
                    Fill out the form below to start your journey with ESL Overseas.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        {/* Basic Info */}
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="destination" className="form-label">Preferred Teaching Destination</label>
                            <select
                                className="form-select"
                                id="destination"
                                name="destination"
                                value={formData.destination}
                                onChange={handleInputChange}
                            >
                                <option value="">Select a country</option>
                                <option value="Japan">Japan</option>
                                <option value="South Korea">South Korea</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Other">Other (specify in message)</option>
                            </select>
                        </div>

                        {/* Teaching Background */}
                        <div className="col-md-6">
                            <label htmlFor="experience" className="form-label">Teaching Experience</label>
                            <select
                                className="form-select"
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select experience level</option>
                                <option value="None">None</option>
                                <option value="Less than 1 year">Less than 1 year</option>
                                <option value="1-3 years">1-3 years</option>
                                <option value="3+ years">3+ years</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="budget" className="form-label">Monthly Budget (USD)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                placeholder="e.g., 1500"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="certification" className="form-label">Do You Have a TEFL/TESOL Certification?</label>
                            <select
                                className="form-select"
                                id="certification"
                                name="certification"
                                value={formData.certification}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="In progress">In progress</option>
                            </select>
                        </div>

                        {/* Logistics */}
                        <div className="col-md-6">
                            <label htmlFor="startDate" className="form-label">When Do You Plan to Start?</label>
                            <input
                                type="date"
                                className="form-control"
                                id="startDate"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Personal Context */}
                        <div className="col-md-6">
                            <label htmlFor="familySupport" className="form-label">Family Support Level</label>
                            <select
                                className="form-select"
                                id="familySupport"
                                name="familySupport"
                                value={formData.familySupport}
                                onChange={handleInputChange}
                            >
                                <option value="">Select an option</option>
                                <option value="Fully supportive">Fully supportive</option>
                                <option value="Somewhat supportive">Somewhat supportive</option>
                                <option value="Neutral">Neutral</option>
                                <option value="Opposed">Opposed</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="concerns" className="form-label">Biggest Concern About Teaching Abroad</label>
                            <select
                                className="form-select"
                                id="concerns"
                                name="concerns"
                                value={formData.concerns}
                                onChange={handleInputChange}
                            >
                                <option value="">Select your concern</option>
                                <option value="Cultural adjustment">Cultural adjustment</option>
                                <option value="Finding a job">Finding a job</option>
                                <option value="Finances">Finances</option>
                                <option value="Language barriers">Language barriers</option>
                                <option value="Other">Other (specify in message)</option>
                            </select>
                        </div>

                        {/* Open-Ended */}
                        <div className="col-12">
                            <label htmlFor="message" className="form-label">Anything Else We Should Know?</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="3"
                                placeholder="Tell us more about your goals or questions..."
                            ></textarea>
                        </div>
                        <div className="col-12 mt-3">
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                style={buttonStyles}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#4286b4';
                                    e.target.style.borderColor = '#4286b4';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = buttonStyles.backgroundColor;
                                    e.target.style.borderColor = buttonStyles.borderColor;
                                }}
                            >
                                Submit Application
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}