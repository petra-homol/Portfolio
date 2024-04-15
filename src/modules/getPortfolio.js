import { ref } from 'vue'

import image1 from '@/assets/trapholt-mokup.jpg'
import image2 from '@/assets/trapholt-mug.jpg'
import image3 from '@/assets/tamam-mug.jpg'
import image4 from '@/assets/job-mug.jpg'
import image5 from '@/assets/saedding.jpg'
import image6 from '@/assets/International day - screen.jpg'
import image7 from '@/assets/job-portal.jpg'
import image8 from '@/assets/bean.jpg'
import image9 from '@/assets/clock.jpg'

const getPortfolioItems = () => {
  const portfolioItems = ref([
    //web
    {
      id: 1,
      title: 'TRAPHOLT WEBSITE',
      description: 'This is the first portfolio item',
      image: image1,
      category: 'web'  
    },
    //logo
    {
      id: 2,
      title: 'TRAPHOLT LOGO',
      description: 'This is the second portfolio item',
      image: image2,
      category: 'logo'
    },
    {
      id: 3,
      title: 'TAMAM LOGO',
      description: 'This is the third portfolio item',
      image: image3,
      category: 'logo'
    },
    {
      id: 4,
      title: 'JOB PORTAL LOGO',
      description: 'This is the second portfolio item',
      image: image4,
      category: 'logo'
    },  
    //poster
    {
      id: 5,
      title: 'SÆDDING',
      description: 'This is the second portfolio item',
      image: image5,
      category: 'poster'
    },
    {
      id: 6,
      title: 'INTERNATIONAL DAY',
      description: 'This is the second portfolio item',
      image: image6,
      category: 'poster'
    },
    //ux design
    {
      id: 7,
      title: 'JOB PORTAL',
      description: 'This is the second portfolio item',
      image: image7,
      category: 'ux'
    },
    //illustration
    {
      id: 8,
      title: 'COFFEE BEAN',
      description: 'This is the second portfolio item',
      image: image8,
      category: 'illustration'
    },
    {
      id: 9,
      title: 'ALARM CLOCK',
      description: 'This is the second portfolio item',
      image: image9,
      category: 'illustration'
    }      
  ])

  return { portfolioItems }
}

export default getPortfolioItems


