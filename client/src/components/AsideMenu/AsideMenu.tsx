import { PageLinks } from "../PageLinks/PageLinks";
import { RootState, useAppSelector } from "../../app/store";

export const AsideMenu: React.FC = () => {

    const asideMenu = useAppSelector((state: RootState) => state.AsideMenu.isOpen);

    return (
        <>
        { asideMenu ? (
        <div className={`
        absolute bg-cyan-400 right-10 top-20
        p-6
        `}>
            <ul className={`
            flex items-center justify-center flex-col 
            text-white
            `}>
                <li>
                    <PageLinks name="Home" link="/home" />
                </li>
                <li>
                    <PageLinks name="About" link="/about" />
                </li>
            </ul>
        </div>
        ): null }
        </>
    )
}