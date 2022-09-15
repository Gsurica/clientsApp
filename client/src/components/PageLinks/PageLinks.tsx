

interface PageLinksProps {
    link: string;
    name: string;
}
export const PageLinks: React.FC<PageLinksProps> = ({ link, name }) => {
    return (
        <a href={link} className={`
        font-bold
        `}>{ name }</a>
    )
}