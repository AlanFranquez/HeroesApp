import React from 'react'
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { heroes } from '../data/heroes';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const {id} = useParams();

  const hero = useMemo( () => getHeroById(id), [id]);

  // Para regresar hacía algo se hace de esta forma
  const navigate = useNavigate();
  
  const onReturn = () => {
    if(hero.publisher === 'Marvel Comics') {
      navigate('/marvel');
      
      return;
    } 

    navigate('/dc')
  }


  if(!hero) {
    return <Navigate to='/marvel' />
  };


  return (
    <div className='row mt-5'>
    
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero}  className='img-thumbnail'/>
      </div>

      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{hero.superhero}</h3>

        <ul className='list-group list-group-flush animate__animated '>
            <li className='list-group-item'><b>Alter Ego:</b> {hero.alter_ego} </li>
            <li className='list-group-item'><b>Publicado en:</b> {hero.publisher} </li>
            <li className='list-group-item'><b>Primera aparición:</b> {hero.first_appearance} </li>
        </ul>
      </div>

      <h5 className='mt-5'> Personajes </h5>
      <p>{hero.characters}</p>

      <button className='btn btn-primary' onClick={onReturn}>
        Regresar
      </button>
    
    </div>
  )
}
