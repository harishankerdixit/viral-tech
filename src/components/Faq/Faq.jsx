// FAQ.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';  // Make sure to import the appropriate icons
import './Faq.css';

export const Faq = () => {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (question) => {
    setVisibleAnswers((prevVisibleAnswers) => ({
      ...prevVisibleAnswers,
      [question]: !prevVisibleAnswers[question],
    }));
  };

  const faqData = [
    {
      question: "What is your experience in website and app development?",
      answer: "We have 7 years of experience in website and app development. During this time, I've successfully completed projects Finance,Education,Retail and E-commerce,Business services,Business services,Healthcare,Media and entertainment and much more.",
    },
    {
      question: "Can you show us examples of your previous work?",
      answer: "Certainly! You can view our website, which showcases a variety of projects I've worked on. Feel free to explore and see if my style aligns with your vision.",
    },
    {
      question: "What technologies/languages do you specialize in?",
      answer: "I specialize in [Laravel, Php, Wordpress, Python, Java, Dart, Mysql, Elastic Search, Redis, MongoDb, Git, Gitlab, GitHub, AWS, Nodejs, ReactJs, Flutter, Android, IOS, UI technlogies And Much more technologies. ], and I stay updated with the latest industry trends to ensure that I can provide the most effective and modern solutions.",
    },
    {
        question: "What is your preferred development methodology?",
        answer: "We have comfortable working with various methodologies such as Agile, Scrum, or Waterfall, depending on the project's requirements. I am adaptable and can tailor my approach to best suit the needs of the project.",
    },
    {
        question: "How do you approach project management and communication?",
        answer: "We believe in clear communication and transparency. I usually set up regular meetings or use project management tools to keep clients informed about the progress. I'm also open to feedback and adjustments throughout the development process.",
    },
    {
        question: "How do you handle tight deadlines?",
        answer: "We have accustomed to working under tight deadlines and am skilled at prioritizing tasks to ensure timely delivery. However, I also believe in maintaining a balance between speed and quality to guarantee a successful outcome.",
    },
    {
        question: "What steps do you take to ensure the security of the applications you develop?",
        answer: "Security is a top priority for us. We follow industry best practices, conduct regular code reviews, and implement security measures to safeguard the applications I develop.",
    },
    {
        question: "How do you handle changes or additional features midway through a project?",
        answer: "We understand that project requirements may evolve. We have flexible and open to discussing changes. If there are any modifications or additional features, we can assess the impact on the timeline and budget and make necessary adjustments accordingly.",
    },
    {
        question: "What kind of support do you provide after the project is completed?",
        answer: "We offer post-launch support to address any issues, provide maintenance, and make necessary updates. Whether it's fixing bugs or adding new features, I am committed to ensuring the continued success of the project.",
    },
    {
        question: "How do you handle intellectual property and confidentiality?",
        answer: "We take intellectual property and confidentiality seriously. I am open to signing non-disclosure agreements (NDAs) to protect your ideas and ensure that all project details remain confidential. I respect the privacy and trust of our clients.",
    },
  ];

  return (
    <section className="section_faq">
        <h2 className='section_title font-bold'>Frequently asked questions</h2>
        <span className='section_subtitle'></span>
        <div className='align_container'>
        <div className="faq-container">
            {faqData.map((item, index) => (
            <div key={index} className="faq-item">
                <div className="faq-question font-bold" onClick={() => toggleAnswer(item.question)}>
                <h3>{item.question}</h3>
                <span className={`toggle-icon ${visibleAnswers[item.question] ? 'open' : ''}`}>
                    <FontAwesomeIcon icon={visibleAnswers[item.question] ? faChevronUp : faChevronDown} />
                </span>
                </div>
                {visibleAnswers[item.question] && <p className="faq-answer">{item.answer}</p>}
            </div>
            ))}
        </div>
        </div>
    </section>
  );
};
