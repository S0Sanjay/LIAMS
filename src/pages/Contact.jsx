import { useState } from 'react';
import PageHero from '../components/PageHero';
import { institute } from '../data/siteData';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { contact } = institute;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="Contact Us"
        subtitle="Reach out for partnerships, training, research support, or general enquiries."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info card">
            <h2>Get in Touch</h2>
            <dl className="contact-details">
              <div>
                <dt>Address</dt>
                <dd>{contact.address}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Office Hours</dt>
                <dd>{contact.hours}</dd>
              </div>
            </dl>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            {submitted ? (
              <p className="contact-form__success" role="status">
                Thank you for your message. Our team will respond shortly. (Form demo — connect
                to your backend or email service.)
              </p>
            ) : (
              <>
                <label>
                  Full Name
                  <input type="text" name="name" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required placeholder="you@example.com" />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder="+91" />
                </label>
                <label>
                  Subject
                  <select name="subject" required defaultValue="">
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option>Training & Development</option>
                    <option>Research & Innovation</option>
                    <option>Conferences & Events</option>
                    <option>Collaborations & MoU</option>
                    <option>General Enquiry</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" rows={5} required placeholder="Your message..." />
                </label>
                <button type="submit" className="btn btn--primary">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
