import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  
  const { searchText, onInputChange} = useForm({
    searchText: q
  });
  
  const heroes = getHeroesByName(q);

  const showSearch = ( q.length === 0 );
  const heroNotFound = ( q.length > 0 && heroes.length === 0 );
 
  const onSearchSubmit = (event) => {
    event.preventDefault();
    const searchQuery = searchText.trim().toLowerCase();

    navigate(`?q=${searchQuery}`)
  }

  return (
    <>
      <div className="row">
        <div className="col-5 mt-3">
          <h2>Searching</h2>
          <hr />

          <form onSubmit={ onSearchSubmit } aria-label="form">
            <input 
              type="text" 
              placeholder="Search a Hero" 
              className="form-control" 
              name="searchText" 
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>

        </div>

        <div className="col-7 mt-3">
          <h2>Results</h2>
          <hr />



          <div id="searchAlert" aria-label="searchAlert" className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>
            Search Hero
          </div>

          <div id="errorAlert" aria-label="errorAlert" className="alert alert-danger" style={{display: heroNotFound ? '' : 'none'}}>
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </>
  )
}
