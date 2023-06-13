import imageGroup from '../../public/images/image-group.png'
import { BiBookmark } from 'react-icons/bi'
import { FiShare2 } from 'react-icons/fi'
import { TbPointFilled } from 'react-icons/tb'
import { AiOutlineFileDone } from 'react-icons/ai'
import FicheTechnique from './FicheTechnique'

const PCinfoMain = () => {
  return (
    <>
      {' '}
      <div className="flex-details-1-price">
        <p className="PC-detail-price">959,000</p>
        <p className="PC-detail-currency">TND</p>
      </div>
      <img src={imageGroup} className="images-detail-1" />
      <div className="flex-details-1-name-icon">
        <p className="flex-details-1-name">Dell Vostro 3400</p>
        <div className="flex-details-1-icon">
          <span className="PC-detail-icon1">
            <BiBookmark />
          </span>
          <p className="PC-detail-icon2">
            <FiShare2 />
          </p>
        </div>
      </div>
      <div className="flex-details-1-marque-category">
        <div className="flex-details-1-marque">
          <p className="flex-details-marque">Mytek </p>
          <p className="PC-detail-marque-point">
            <TbPointFilled />
          </p>
          <p className="PC-detail-stock">En Stock</p>
          <p className="PC-detail-stock-icon">
            <AiOutlineFileDone />
          </p>
        </div>

        <div className="flex-details-1-category">
          <p className="flex-details-category">PC category </p>
          <p className="PC-detail-category-point">
            <TbPointFilled />
          </p>
          <p className="PC-detail-category-icon">Gaming, Ultrabook</p>
        </div>
      </div>
      <div className="flex-details-1-pc-features">
        <div className="flex-pc-features1">
          <p>Ecran</p>
          <p className="bold-features">14 Pouces HD</p>
        </div>
        <div className="flex-pc-features2">
          <p>Processeur</p>
          <p className="bold-features">i3-1115G4</p>
        </div>
        <div className="flex-pc-features3">
          <p>Mémoire RAM</p>
          <p className="bold-features">4 Go</p>
        </div>
        <div className="flex-pc-features4">
          <p>Disque dur</p>
          <p className="bold-features">1 To HDD</p>
        </div>
      </div>
      <div className="flex-details-1-overview">
        <p className="overview-title">Overview </p>
        <p className="overview-content">
          Écran 14" HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10
          GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système
          d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD -
          Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0
          Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack
          pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an
        </p>
      </div>
      <div className="flex-details-1-fiche-Technique">
        <p className="fiche-Technique-Name">Fiche Technique</p>
        <FicheTechnique />
      </div>
      <div className="flex-details-1-Interested-btn">
        <p className="flex-details-1-Interested">
          Are you Interested in this Laptop?
        </p>
        <button className="flex-details-1-btn">Check it out </button>
      </div>
    </>
  )
}
export default PCinfoMain
