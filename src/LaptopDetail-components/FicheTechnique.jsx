import { ficheTechnique } from '../data'

const FicheTechnique = () => {
  return (
    <>
      {ficheTechnique.map((fiche) => {
        return (
          <div className="pc-description-flex">
            <p className="pc-description-circle"></p>
            <p className="pc-description-name">{fiche}</p>
          </div>
        )
      })}
    </>
  )
}
export default FicheTechnique
