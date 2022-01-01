import type { NextPage } from 'next'
import { ProfileCard } from '../src/components/profile-card/ProfileCard'
import IProfileCard from '../src/types/interface/ProfileCard'

const Home: NextPage = () => {
  let profiles = [{
    src: 'https://picsum.photos/200',
    name: 'Mihai Emilian Stoica',
    title: 'Zugrav',
    city: 'Bucuresti, Sector 2',
    tags: ['Gresie si faianta', 'Reparatii instalatii', 'Zugravel', 'Parchet', 'Instalatii']
  }, {
    src: 'https://picsum.photos/200',
    name: 'Mihai Emilian Stoica',
    title: 'Zugrav',
    city: 'Bucuresti, Sector 2',
    tags: ['Gresie si faianta', 'Reparatii instalatii', 'Zugravel', 'Parchet', 'Instalatii']
  }, {
    src: 'https://picsum.photos/200',
    name: 'Mihai Emilian Stoica',
    title: 'Zugrav',
    city: 'Bucuresti, Sector 2',
    tags: ['Gresie si faianta', 'Reparatii instalatii', 'Zugravel', 'Parchet', 'Instalatii']
  }, {
    src: 'https://picsum.photos/200',
    name: 'Mihai Emilian Stoica',
    title: 'Zugrav',
    city: 'Bucuresti, Sector 2',
    tags: ['Gresie si faianta', 'Reparatii instalatii', 'Zugravel', 'Parchet', 'Instalatii']
  }, {
    src: 'https://picsum.photos/200',
    name: 'Mihai Emilian Stoica',
    title: 'Zugrav',
    city: 'Bucuresti, Sector 2',
    tags: ['Gresie si faianta', 'Reparatii instalatii', 'Zugravel', 'Parchet', 'Instalatii']
  }, {
    src: 'https://picsum.photos/200',
    name: 'Mihai Emilian Stoica',
    title: 'Zugrav',
    city: 'Bucuresti, Sector 2',
    tags: ['Gresie si faianta', 'Reparatii instalatii', 'Zugravel', 'Parchet', 'Instalatii']
  }]

  return (
    <main>
      <div className='grid grid-cols-2 gap-6'>
        {profiles.map((profile: IProfileCard, index: number) => <ProfileCard key={index} {...profile} />)}
      </div>
    </main>
  )
}

export default Home
