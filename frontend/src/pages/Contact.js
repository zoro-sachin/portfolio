import React, { useState } from 'react';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await contactAPI.send(formData);
      setMessage('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setMessage('Failed to send message. Please try again.');
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="section">
        <div className="container">
          <div className="split-content">
            {/* Contact Information */}
            <div className="contact-info fade-in-up">
              <span className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>Nexus</span>
              <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Let's Connect</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '50px' }}>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', width: '100px' }}>Email</div>
                  <div style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>sachins.devp@gmail.com</div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', width: '100px' }}>Location</div>
                  <div style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>Arcot, Tamil Nadu</div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', width: '100px' }}>Follow</div>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="https://github.com/zoro-sachin" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: '1rem' }}>GitHub</a>
                    <a href="https://www.instagram.com/moon_.only_?igsh=MTg5bXkyMWozcjE5Yg==" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: '1rem' }}>Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container glass fade-in-up" style={{ padding: '60px', animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                {message && (
                  <div style={{
                    padding: '15px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    background: message.includes('successfully') ? 'rgba(129, 248, 161, 0.1)' : 'rgba(248, 129, 129, 0.1)',
                    color: message.includes('successfully') ? '#81f8a1' : '#f88181',
                    border: '1px solid currentColor'
                  }}>
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={loading}
                >
                  {loading ? 'Transmitting...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;