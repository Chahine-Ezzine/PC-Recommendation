import imageGroup from '../../public/images/image-group.png'
import { BiBookmark } from 'react-icons/bi'
import { FiShare2 } from 'react-icons/fi'
import { TbPointFilled } from 'react-icons/tb'
import { AiOutlineFileDone } from 'react-icons/ai'
import React, { useContext } from 'react'
import { LaptopContext } from '../LaptopContext'

const PCinfoMain = () => {
  const { state } = useContext(LaptopContext)
  const laptop = state.selectedLaptop

  if (!laptop) {
    return <div>No Laptop Data</div>
  }
  const ficheTechniqueData = [
    { label: 'Marque', value: laptop.brand },
    { label: 'Processeur', value: laptop.CPU },
    { label: 'Mémoire', value: laptop.Ram },
    {
      label: 'fréquence processeur',
      value:
        '3,3 GHz up to 4.5 GHz Turbo max, 16 Mo de mémoire cache, Hexa-Core',
    },
    { label: 'Résolution Ecran', value: laptop.Resolution },
    { label: 'Type Processeur', value: 'Dual Core' },
    { label: 'Carte Graphique', value: laptop.GPU },
    { label: 'Garantie', value: '1ans' },
  ]

  return (
    <>
      <div className="flex-details-1-price">
        <p className="PC-detail-price">{laptop.Price}</p>
        <p className="PC-detail-currency">TND</p>
      </div>
      <img src={imageGroup} className="images-detail-1" />
      <div className="flex-details-1-name-icon">
        <p className="flex-details-1-name">{laptop.Name}</p>
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
          <p className="PC-detail-stock">{laptop.Stock}</p>
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
          <p className="bold-features">{laptop.Display}</p>
        </div>
        <div className="flex-pc-features2">
          <p>Processeur</p>
          <p className="bold-features">{laptop.CPU}</p>
        </div>
        <div className="flex-pc-features3">
          <p>Mémoire RAM</p>
          <p className="bold-features">{laptop.Ram}</p>
        </div>
        <div className="flex-pc-features4">
          <p>Disque dur</p>
          <p className="bold-features">{laptop.Storage}</p>
        </div>
      </div>
      <div className="flex-details-1-overview">
        <p className="overview-title">Overview </p>
        <p className="overview-content">{laptop.Description}</p>
      </div>
      <div className="flex-details-1-fiche-Technique">
        <p className="fiche-Technique-Name">Fiche Technique</p>

        {ficheTechniqueData.map((item) => (
          <div key={item.label} className="pc-description-flex">
            <p className="pc-description-circle"></p>
            <p>
              {item.label}: {item.value}
            </p>
          </div>
        ))}
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
