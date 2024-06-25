import React from 'react';
import { experiences, studies } from '../data/resume';

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <section>
        <h2>Work Experience</h2>
        <ul>
          {experiences.map(exp => (
            <li key={exp.id}>
              <h3>{exp.title}</h3>
              <p>{exp.company} - {exp.date}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          {studies.map(study => (
            <li key={study.id}>
              <h3>{study.title}</h3>
              <p>{study.institution} - {study.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Resume;
