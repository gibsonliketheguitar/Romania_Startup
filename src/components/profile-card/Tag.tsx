import ITag from '../../types/interface/Tag'

export const Tag = ({ title }: ITag) => {
    return (
        <div className='text-base'>{title}</div>
    )
}

