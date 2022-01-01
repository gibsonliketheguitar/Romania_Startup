import { Button } from "../../core/Button";

export default function Header() {
    return (
        <div className='flex flex-row'>
            <div className='basis-1/5'>Image</div>
            <div className='basis 2/5 flex flex-col'>
                <div>Name</div>
                <div>Title</div>
                <div>Location</div>
            </div>
            <div className='basis-3/5 flex flex-row'>
                <Button title='Apeleaza' />
                <Button title='Solicita oferta' />
            </div>
        </div>
    )
}