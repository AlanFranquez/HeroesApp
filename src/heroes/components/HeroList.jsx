
import { getHeroByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = getHeroByPublisher(publisher);

    return (
        <>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                {heroes.map((heroe) => {
                    return <HeroCard key={heroe.id} {...heroe}/>
                    // {...heroe} para llamar a todas las propiedades
                })}
            </div>


        </>

    )
}
