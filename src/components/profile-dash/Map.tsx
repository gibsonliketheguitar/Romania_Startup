import { DropPin } from "../../assets/icons/DropPin";

export default function Map() {
    return (
        <div className='flex flex-col'>
            <div className='text-lg'>State</div>
            <div className='flex flex-row'>
                <DropPin />
                <span>city name</span>
            </div>
            <div>
                Map of image
            </div>
        </div>
    )
}