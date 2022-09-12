import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} no es valido`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher)

}