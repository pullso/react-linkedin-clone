import React from 'react';
import './Widgets.css';
import {FiberManualRecord, Info} from "@mui/icons-material";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className='widgets__article'>
        <div className="widgets__articleLeft">
          <FiberManualRecord/>
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn news</h2>
        <Info/>
      </div>
      {newsArticle('React vs Vue', 'What is better?')}
      {newsArticle('AI will get our jobs', 'What should you do?')}
      {newsArticle('LinkedIn is the best site for get job', 'What should you do?')}
      {newsArticle('Spotify released new version', 'What should you do?')}
      {newsArticle('AI will get our jobs', 'What should you do?')}
    </div>
  );
};

export default Widgets;
