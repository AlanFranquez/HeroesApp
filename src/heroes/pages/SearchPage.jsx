import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import {HeroCard} from '../components'
import { getHeroByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  console.log(q)
  
  const heroes = getHeroByName(q)

  const {searchText, onInputChange, onResetForm} = useForm({
    searchText: ''
  });

  const [error, setError] = useState(false);

  

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if(searchText === '') {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 2000);

      return;
    };

    setError(false);
    onResetForm()

    // Hacer un query en el link a buscar algo
    navigate(`?q=${searchText}`)
    
  }

  return (
    <>
        <h1>SearchPage</h1>

      <div className="row">
      <div className="col-5">
          <h4>Buscar...</h4>
          <form onSubmit={onSearchSubmit}>
            <input type="text" placeholder="Spiderman" className="form-control" name="searchText" autoComplete="off" onChange={onInputChange} value={searchText}/>

            <button className="btn btn-outline-primary mt-1">Buscar</button>

            {error ? <p className='alert alert-danger mt-2'>Por favor, escribe algo</p> : null}
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>

          <div className="alert alert-primary">
            Buscar un heroe
          </div>

          <div className="alert alert-danger">
            No sé pudó encontrar <b>{q}</b>
          </div>

          {
            heroes.map((hero) => {
              return <HeroCard key={hero.id} {...hero} /> 
              
            })
          }
        </div>
      </div>
        

    </>
  )
}
