interface IButton {
    title: string,
    width?: number,
    height?: number,
}
export const Button = ({ title, height, width }: IButton) => {
    const h = !height ? 'h-12' : height
    const w = !width ? 'auto' : width
    return (
        <div className={`${h} ${w} text-base`}></div>
    )
}