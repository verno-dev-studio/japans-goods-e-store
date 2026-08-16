import React from 'react';
import ReactMarkdown from 'react-markdown';
import readmeContent from '../../README.md?raw';

const About = () => {
	return <ReactMarkdown>{readmeContent}</ReactMarkdown>;
};

export default About;
