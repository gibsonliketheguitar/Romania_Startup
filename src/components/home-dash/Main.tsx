import type { NextPage } from 'next'
import { Button } from '../../core/Button'
import IProfileCard from '../../types/interface/ProfileCard'
import { ProfileCard } from '../profile-card/ProfileCard'

export default function ProfileList() {
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

  const profileCount = profiles.length
  const totalProfile = 432
  return (
    <main className='flex flex-col justify-start'>
      <div className='text-base'> <strong>{profileCount} </strong>Meșteri ideplinesc condițiile de căutare</div>
      <div className='grid grid-cols-2 gap-6'>
        {profiles.map((profile: IProfileCard, index: number) => <ProfileCard key={index} {...profile} />)}
      </div>
      <div>
        <strong> 8</strong> din {totalProfile} mesteri
      </div>
      <Button title='Încarcă încă 20 de meșteri' />
    </main>
  )
}