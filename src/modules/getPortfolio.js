import { ref } from 'vue'

import image1 from '@/assets/trapholt-mokup.jpg'
import image2 from '@/assets/trapholt-mug.jpg'
import image3 from '@/assets/tamam-mug.jpg'
import image4 from '@/assets/job-mug.jpg'
import image5 from '@/assets/Poster.jpg'
import image7 from '@/assets/job-portal-small.jpg'
import image8 from '@/assets/bean.jpg'
import image9 from '@/assets/clock.jpg'

import picture1 from '@/assets/clock2.jpg'
import picture2 from '@/assets/trapholt-bag.jpg'
import picture3 from '@/assets/tamam-bag.jpg'
import picture4 from '@/assets/job-bag.jpg'

const getPortfolioItems = () => {
  const portfolioItems = ref([
    //web
    {
      id: 1,
      title: 'TRAPHOLT WEBSITE',
      description: 'This newly redesigned website for a museum of modern art, craft, and design Trapholt was created based on a final exam project for the first semester in Multimedia Design. In a team of four, we designed a brand new website filled with content from the original Trapholt’s site.',
      author: 'Author: Petra Homolová, Andrea Hunčíková, Jakub Repa, Marin Vujica',
      skills: 'Skills: ux, html, css, adobe tools',
      image: image1,
      link: 'https://jakubrepa.github.io/',
      category: 'WEB'  
    },
    //logo
    {
      id: 2,
      title: 'TRAPHOLT',
      description: 'As a part of a final school exam project for the first semester, I redesigned a logo for a museum of modern art, craft, and design Trapholt in Kolding. The redesigned logo looks simple, minimalistic, and modern and the hint of a frame communicates that Trapholt is a museum of art. ',
      author: 'Author: Petra Homolová',
      skills: 'Skills: adobe tools',
      image: image2,
      picture: picture2,
      category: 'LOGO'
    },
    {
      id: 3,
      title: 'TAMAM',
      description: 'This logo was designed as a part of a Content Creation and Photography and Video Production course project. Tamam is a brand pursuing health supplements. The logo represents this core brand objective with minimalistic text accompanied by a green leaf.',
      author: 'Author: Petra Homolová',
      skills: 'Skills: adobe tools',
      image: image3,
      picture: picture3,
      category: 'LOGO'
    },
    {
      id: 4,
      title: 'JOB PORTAL',
      description: 'As a part of a User Experience course project I designed a logo for a prototype of an app. The app is aimed at students who would like to find a new remote job. The logo was designed to target the selected group and represent work online.',
      author: 'Author: Petra Homolová',
      skills: 'Skills: adobe tools',
      image: image4,
      picture: picture4,
      category: 'LOGO'
    },  
    //poster
    {
      id: 5,
      title: 'SÆDDING',
      description: 'The poster was created for the Saedding district. This district is a part of the Danish city of Esbjerg. It is known for its nice beach and nature. The poster was designed to represent these main features.',
      author: 'Author: Petra Homolová',
      skills: 'Skills: adobe tools',
      image: image5,
      category: 'POSTER'
    },
    //ux design
    {
      id: 7,
      title: 'JOB PORTAL',
      description: 'This UX project was created as part of the User Experience course. In a team of four, we went through the entire design thinking process. The result of this work was the creation of a prototype application. The app is aimed at students who would like to find a new remote job.',
      author: 'Author: Petra Homolová, Andrea Hunčíková, Michaela Janceová, Daniela Janceová',
      skills: 'Skills: ux, adobe tools',
      image: image7,
      category: 'UX'
    },
    //illustration
    {
      id: 8,
      title: 'COFFEE BEAN',
      description: 'One of my favorite ways to spend my free time is drawing illustrations. I chose two with a coffee theme and had them printed on tote bags.',
      author: 'Author: Petra Homolová',
      skills: 'Skills: drawing, adobe tools',
      image: image8,
      category: 'ILLUSTRATION'
    },
    {
      id: 9,
      title: 'ALARM CLOCK',
      description: 'One of my favorite ways to spend my free time is drawing illustrations. I chose two with a coffee theme and had them printed on tote bags.',
      author: 'Author: Petra Homolová',
      skills: 'Skills: drawing, adobe tools',
      image: image9,
      picture: picture1,
      category: 'ILLUSTRATION'
    }      
  ])

  return { portfolioItems }
}

export default getPortfolioItems


