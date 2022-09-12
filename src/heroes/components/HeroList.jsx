import React from 'react'
import { getHeroByPublisher } from '../helpers'

export const HeroList = ({publisher}) => {

    const heroes = getHeroByPublisher(publisher);

    return (
        <>
            <ul>
                {heroes.map((heroe) => {
                    return <li key={heroe.id}>{heroe.characters}</li>
                })}
            </ul>


        </>

    )
}
