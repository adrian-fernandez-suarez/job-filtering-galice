import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const cardsOriginal = [
    {
      img: '',
      name: 'Seniro forntend developer',
      isNew: true,
      isFeatured: true,
      company: 'Photosnap',
      date: new Date(),
      isFullTime: true,
      location: 'USA Only',
      keywords: ['frontend', 'senior', 'html', 'css', 'javascript'],
    },
    {
      img: '',
      name: 'Test1 developer',
      isNew: true,
      isFeatured: true,
      company: 'Photosnap',
      date: new Date(),
      isFullTime: true,
      location: 'USA Only',
      keywords: ['frontend', 'fullstack', 'html', 'react', 'sass'],
    },
    {
      img: '',
      name: 'Senior developer',
      isNew: true,
      isFeatured: true,
      company: 'Testeo',
      date: new Date(),
      isFullTime: true,
      location: 'USA Only',
      keywords: ['midweight', 'junios', 'html', 'css', 'javascript'],
    },
    {
      img: '',
      name: 'Seniro forntend developer',
      isNew: true,
      isFeatured: true,
      company: 'Manage',
      date: new Date(),
      isFullTime: true,
      location: 'USA Only',
      keywords: ['frontend', 'senior', 'html', 'backend', 'javascript'],
    }
  ];
  const [searchList, setSearchList] = useState(['frontend']);
  
  const listCards = cardsOriginal;//cardsOriginal.filter( (card) => ( card.keywords.every( searchList ) ));
  
  function handleAddKeyword(keyword){
    //setSearchList(searchList.push({keyword}));
  }


  //Componente Card
  function Card ({img, name, isNew, isFeatured, company, date, isFullTime, location, keywords} ) {
    

    const listKeywords = keywords.map( keyword => (
      <div className="jobTag" onClick={handleAddKeyword(keyword)}>{keyword}</div>
    ));



    return (
      <div className="job-container">
        <div className="jobs-info-section">
            <img className="job-logo" src={img} alt={name} />

            <div className="jobInfo-container">
              <div className="jobInfo-header">
                  <p className="jobInfo-company">{company}</p>
              </div>
              <p className="jobInfo-title">{name}</p>
              <div className="jobInfo-footer">
                  <p>{new Date().getTime() - date.getTime() }</p>
                  <div className="oval"></div>
                  <p>{isFullTime ? 'Full Time': 'Half time'}</p>
                  <div className="oval"></div>
                  <p>{location}</p>
              </div>
            </div>
        </div>
        <div className="jobTags-container">
          {listKeywords} 
        </div>
      </div>
    );
  }

  return (
    <div>

      <div className="header-banner">
        <div className="filter-list-container">
          <div className="filter-tags-container">
            <div className="filterTag-container">
              <div className="filterTag">{searchList.map(keyword => (<p>{keyword}</p>) )}</div>
              <button className="filterTag-btn">X</button>
            </div>
          </div>
          <p className="filterTag-clear">Clear</p>
        </div>
      </div>

      <div className="app-container">
        <div className="jobs-container">
          {listCards.map( ( card, index ) => (<Card key={index} img={card.img} name={card.name} isNew={card.isNew} isFeatured={card.isFeatured} company={card.company} date={card.date} isFullTime={card.isFullTime} location={card.location} keywords={card.keywords} /> ) ) }
        </div>
      </div>
    </div>
  );
}

export default App
