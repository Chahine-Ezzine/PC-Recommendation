import { AiOutlineFileDone } from 'react-icons/ai'
import { BsFillClipboard2XFill } from 'react-icons/bs'
import logo1 from '../public/images/logo1.png'
import logo2 from '../public/images/logo2.png'
import logo3 from '../public/images/logo3.png'
import logo4 from '../public/images/logo4.png'
import logo5 from '../public/images/logo5.png'
import logo6 from '../public/images/logo6.png'
import logo7 from '../public/images/logo7.png'
import logo8 from '../public/images/logo8.png'
import logo9 from '../public/images/logo9.png'
import PClogo1 from '../public/images/PC-logo1.png'
import PClogo2 from '../public/images/PC-logo2.png'
import PClogo3 from '../public/images/PC-logo3.png'
import PClogo4 from '../public/images/PC-logo4.png'
import PClogo5 from '../public/images/PC-logo5.png'

export const laptopInfo = [
  {
    laptopImg: logo1,
    laptopName: 'ASUS ExpertBook L1',
    StockIcon: AiOutlineFileDone,
    marqueName: 'Mytek',
    StockStatus: 'En stock',
  },
  {
    laptopImg: logo2,
    laptopName: 'Dell Vostro 3510',
    StockIcon: AiOutlineFileDone,
    marqueName: 'Scoop Informatique',
    StockStatus: 'En stock',
  },
  {
    laptopImg: logo3,
    laptopName: 'Dell Vostro 3520',
    StockIcon: AiOutlineFileDone,
    marqueName: 'Mytek',
    StockStatus: 'En stock',
  },
  {
    laptopImg: logo4,
    laptopName: 'Dell Latitude 3520',
    StockIcon: AiOutlineFileDone,
    marqueName: 'Mega PC',
    StockStatus: 'En stock',
  },
  {
    laptopImg: logo5,
    laptopName: 'HP ProBook 450 G8',
    StockIcon: BsFillClipboard2XFill,
    marqueName: 'Mytek',
    StockStatus: 'Repture de stock',
  },
  {
    laptopImg: logo6,
    laptopName: 'Asus ExpertBook B1',
    StockIcon: AiOutlineFileDone,
    marqueName: 'Mytek',
    StockStatus: 'En stock',
  },
  {
    laptopImg: logo7,
    laptopName: 'Dell Vostro 3520',
    StockIcon: AiOutlineFileDone,
    marqueName: 'Scoop Informatique',
    StockStatus: 'En stock',
  },
  {
    laptopImg: logo8,
    laptopName: 'Dell Vostro 3520',
    StockIcon: BsFillClipboard2XFill,
    marqueName: 'Mytek',
    StockStatus: 'Repture Du Stock',
  },
  {
    laptopImg: logo9,
    laptopName: 'Dell Vostro 3520',
    StockIcon: BsFillClipboard2XFill,
    marqueName: 'Mega PC',
    StockStatus: 'Repture Du Stock',
  },
]

export const laptopFeatures = [
  {
    laptopImg: PClogo1,
    laptopName: 'Dell Vostro 3400',
    marqueName: 'Mytek',
    price: '959,0',
  },
  {
    laptopImg: PClogo2,
    laptopName: 'ASUS ExpertBook L1',
    marqueName: 'Mytek',
    price: '1159,0',
  },
  {
    laptopImg: PClogo3,
    laptopName: 'Dell Vostro 3510',
    marqueName: 'Scoop Informatique',
    price: '1199,0',
  },
  {
    laptopImg: PClogo4,
    laptopName: 'Dell Latitude 3520',
    marqueName: 'Mytek',
    price: '1349,0',
  },

  {
    laptopImg: PClogo5,
    laptopName: 'HP ProBook 450 G80',
    marqueName: 'Mega PC',
    price: '1399,0',
  },
  {
    laptopImg: PClogo3,
    laptopName: 'Asus ExpertBook B1',
    marqueName: 'Mega PC',
    price: '1399,0',
  },
]

const category = [
  'Gaming',
  'Portable',
  'Portable Pro',
  'Mac',
  'Ultrabook',
  'Bureau',
]

export const price = [
  '0 TND - 100 TND',
  '101 TND - 200 TND',
  '201 TND - 500 TND',
  '501 TND - 750 TND',
  '751 TND - 1000 TND',
  '+1000 TND',
]

export const ficheTechnique = [
  'Marque:	DELL',
  'Processeur:	Intel Core i3',
  'Mémoire:	4 Go',
  'Fréquence Processeur:	3.00 GHz up to 4,10 GHz Turbo max',
  'Résolution Ecran:	1366 x 768 pixels',
  'Type Processeur	Dual Core',
  'Carte Graphique:	Graphique Intégrée',
  'Garantie:	1 an',
]

export default category
