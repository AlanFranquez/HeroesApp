
import { HeroList } from "../components"


export const MarvelPage = ({publisher}) => {


  return (
    <>

      <h1 className="animate__animated animate__fadeInLeft">Marvel</h1>
      <HeroList publisher={'Marvel Comics'} />

    </>
  )
}
