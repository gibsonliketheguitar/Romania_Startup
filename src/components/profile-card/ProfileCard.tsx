import ITag from '../../types/interface/Tag'
import IProfileCard from '../../types/interface/ProfileCard'
import { DropPin } from '../../assets/icons/DropPin'
import Image from 'next/image'
import { Tag } from './Tag'

export const ProfileCard = ({ src, name, title, city, tags }: IProfileCard) => {
    return (
        <div className="flex flex-col justify-center items-center w-96 h-80 bg-sky-500 text-center">
            <Image
                src={'https://picsum.photos/200'}
                height={64}
                width={64}
            />
            <div className='text-xl'>{name}</div>
            <div className='text-base'>{title}</div>
            <div className='flex-row'>
                <DropPin />
                <div className='text-sm'>{city}</div>
            </div>
            <div className='flex flex-wrap'>
                {tags.map((tag: any, index: number) => <Tag key={index} title={tag} />)}
            </div>
        </div>
    )
}

