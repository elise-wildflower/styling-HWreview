import React from 'react';
import "./Css.css"


function Css() {
  return (
    <div className="main-wrapper">
      <h1 className="title">Cascading Style Sheets</h1>
      <button className="primary-button">Button</button>
      <button>Button</button>
      <section className="section">
        <div className="content">
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
        </div>
        <div className="red-content">
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
        </div>
      </section>
    </div>
  );
}

export default Css;