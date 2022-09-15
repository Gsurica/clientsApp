import { useAppDispatch } from "../../app/store";
import { openHandle } from "../../app/features/AsideMenu";
import { Button } from "../Button/Button";

export const Header: React.FC = () => {

    const dispatch = useAppDispatch();

    return (
        <div className={`
            container bg-cyan-200 text-black
        `}>
            <div className={`
                grid grid-cols-3 p-5 
            `}>
                <div className={`
                text-xl flex justify-center bg-cyan-300 
                items-center
                `}>
                    Gsurica
                </div>
                <div className={`
                text-2xl flex justify-center bg-cyan-300 items-center
                `}>
                    Clients
                </div>
                <Button name="Menu" onClick={() => dispatch(openHandle())} />
            </div>
            <div className={`
            flex items-center justify-center
            p-3 text-xl
            `}>
                <p>Manage your clients with speedy...</p>
            </div>
        </div>
    )
}