export default function Information() {
    const arr = [
        { icon: '', title: 'experience', content: '5ani' },
        { icon: '', title: 'employee', content: '1-3 meseriasi' },
        { icon: '', title: 'Pret constare', content: 'Daa' }
    ]
    return (
        <div className='flex flex-col'>
            <div className='text-lg'>informatii</div>
            <div className='flex flex-row'>
                {arr.map(({ icon, title, content }: any, index: number) => {
                    return (
                        <div className='flex'>
                            <div>{icon}</div>
                            <div className='flex flex-col'>
                                <div>{title}</div>
                                <div>{content}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}