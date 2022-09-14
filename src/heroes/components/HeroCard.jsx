import { Link } from "react-router-dom"


export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {

    const heroImagesURL = `/assets/heroes/${id}.jpg`


    return (
        <div className="col">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img alt={superhero} src={heroImagesURL} className="card-img"/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h4 className="card-title">{superhero}</h4>

                            <p className="card-text">{alter_ego}</p>

                            {/* Si el alter_ego y el characters son diferentes entonces SI muestra el parrafo con los characters */}
                            {
                                (alter_ego !== characters) ? <p className="card-text">{characters}</p> : null
                            }

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>


                            <Link to={`/hero/${id}`}>
                                Más
                            </Link>

                        </div>
                    </div>

            </div>

        </div>
    </div>
  )
}
