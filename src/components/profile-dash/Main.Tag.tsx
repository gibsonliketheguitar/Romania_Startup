export default function Tag() {
    const tags = ['Gresie si faianta', 'Gresie si faianta', 'Gresie si faianta', 'Gresie si faianta', 'Gresie si faianta']
    return (
        <div className='flex flex-col'>
            <div className='text-lg'>Servicci ofertie</div>
            {tags.map((tag: string, number) => (<div>{tag}</div>))}
        </div>
    )
}
