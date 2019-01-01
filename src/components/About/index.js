import React from 'react';

import AboutMap from './AboutMap';
import './index.css';

const mock_informations = {
  "name":"Ocean Prime",
  "description":"Ocean Prime is an award winning modern American restaurant and lounge from renowned restaurateur Cameron Mitchell. With stunning settings, a vibrant energy, an impressive menu of seafood and steaks and truly exceptional service, Ocean Prime is an ideal place to socialize, talk business, celebrate and indulge.",
  "addresse":"123 W 52nd St, New York City, NY 100-6003",
  "email":"ocean.prime@example.com",
  "website":"www.example.com",
  "phone":"06-44-77-88-42",
  "logo_url":"https://cdn2.vectorstock.com/i/1000x1000/75/41/cook-chef-restaurant-logo-vector-4197541.jpg",
  "opening_hours":[
     "11:30 AM - 10:00 PM",
     "11:30 AM - 02:30 PM",
     "11:30 AM - 10:00 PM",
     "08:00 AM - 11:30 PM",
     "11:30 AM - 11:00 PM",
     "12:30 AM - 11:00 PM",
     "CLOSED"
  ]
};

const day_mapper = [
  'Mon',
  'Tues',
  'Wed',
  'Thurs',
  'Fri',
  'Sat',
  'Sun'
]

const About = _ => {
  const openingHours = mock_informations.opening_hours.map((hours, index) => (
    <div className="about__hours flex-center flex-column" key={index}>
      <span className="about__day">{day_mapper[index]}: </span>
      <span className="about__time">{hours}</span>
    </div>
  ));

  return (
    <div className="about__container flex-center flex-row">
      <div className="about">
        <h3 className="section__title">About Us</h3>
        <div className="about__wrapper flex-row">
          <div className="about__left flex-column">
            <AboutMap />
          </div>
          <div className="about__middle flex-center flex-column">
            <div className="about__contact-info flex-column card">
              <span className="contact-text">{mock_informations.addresse}</span>
              <span className="contact-text">{mock_informations.email}</span>
              <span className="contact-text">{mock_informations.website}</span>
              <span className="contact-text">{mock_informations.phone}</span>
            </div>
            <div className="about__main-info flex-column card">
              <span className="about__main-name about-text">
                {mock_informations.name}
              </span>
              <span className="about__main-description about-text">
                {mock_informations.description}
              </span>
            </div>
          </div>
          <div className="about__right flex-center flex-column">
            <div className="about__opening-hours card">{openingHours}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
