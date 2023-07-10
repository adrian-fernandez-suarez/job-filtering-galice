import { useState } from 'react'
import cardsOriginal from "./assets/data.json"
import './App.css'

function App() {
  const [ searchList, setSearchList ] = useState( [ 'frontend' ] );
  
  const listCards = [...cardsOriginal]; //cardsOriginal.filter( (card) => ( card.keywords.every( searchList ) ));
  
  function handleAddKeyword(keyword){
    //setSearchList(searchList.push({keyword}));
  }


  //Componente Card
  function Card ({img, name, isNew, isFeatured, company, postedAt, isFullTime, location, keywords} ) {
    
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
                  <p>{postedAt}</p>
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
          {listCards.map( card => (<Card key={card.id} img={card.logo} name={card.position} isNew={card.new} isFeatured={card.featured} company={card.company} date={card.postedAt} isFullTime={card.contract} location={card.location} keywords={card.languages} /> ) ) }
        </div>
      </div>
    </div>
  );
}

export default App
