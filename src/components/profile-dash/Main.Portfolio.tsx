import Image from 'next/image'

export default function Portfolio() {
    const arr = [1, 2, 3, 4, 5, 6,]
    return (
        <div className='flex flex-col'>
            <div className='text-lg'>Portofoliu</div>
            <div className='grid grid-col-3 gap-6'>
                {arr.map((a: any, index: number) => <PortfolioImage key={index} />)}
            </div>
        </div>
    )
}

const PortfolioImage = () => {
    return (
        <span>
            <Image
                src='https://picsum.photos/200'
                height={169}
                width={169}
            />
        </span>
    )
}