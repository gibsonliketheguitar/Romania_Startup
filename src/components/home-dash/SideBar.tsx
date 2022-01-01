import { useState } from "react"
import Checkbox from "../../core/Checkbox"

export default function SideBar() {
    return (
        <div className="flex flex-col">
            <Service />
            <Location />
            <SectionOne />
            <SectionTwo />
        </div>
    )
}

const Service = () => {
    const [filter, setFilter] = useState<string>('')
    return (
        <div className="flex flex-col">
            <div className='flex flex-row space-btween'>
                <span className='text-base'>Caută dupa serviciu</span>
                <ClearFilter />
            </div>
        </div>
    )
}

const ClearFilter = () => {
    const handleOnClick = () => console.log('clear filter')
    return (
        <div className='flex-row' onClick={handleOnClick}>
            <span>x</span>
            <span>Sterge filtre</span>
        </div>
    )
}

const Location = () => {
    const [location, setLocation] = useState()
    return (
        <div className="flex flex-col">
            <div>Location</div>
            <input />
        </div>
    )
}

const SectionOne = () => {
    const [display, setDisplay] = useState<Boolean>(false)
    const checkboxs = ['Companie', 'Persona Fizica']
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
                <span className="text-base bold">Entitate</span>
                <span> up arrow </span>
            </div>
            <div className='flex'>
                {checkboxs.map((cb: string, index: number) => <Checkbox key={index + cb} title={cb} />)}
            </div>
        </div>
    )
}

const SectionTwo = () => {
    const [display, setDisplay] = useState<Boolean>(false)
    const checkboxs = ['Montaj tigla metalica', 'Montaj tigla cu roca', 'Montaj tigla ceramica', 'Montaj sistem pluvial']
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <span className="text-base bold">Entitate</span>
                <span> up arrow </span>
            </div>
            <div className='flex flex-col'>
                {checkboxs.map((cb: string, index: number) => <Checkbox key={index + cb} title={cb} />)}
            </div>
        </div>
    )
}
