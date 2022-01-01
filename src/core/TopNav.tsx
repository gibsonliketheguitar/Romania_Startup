export default function TopNav() {
    return (
        <nav className="flex flex-row items-between">
            <HomeAction />
            <Authentication />
        </nav>
    )
}

const HomeAction = () => {
    return (
        <div>
            <span>Logo</span>
            <span>MULTIDOM</span>
            <span>Mesteri</span>
        </div>
    )
}

const Authentication = () => {
    return (
        <div className='flex flex-row'>
            <button> Autentificare</button>
            <button> Inregistrare</button>
        </div>
    )
}