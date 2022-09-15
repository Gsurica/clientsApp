import { toUp } from "../../functions"
import { Button } from "../Button/Button"
import { ArrowUp } from "../icons"
import { useAppDispatch } from "../../app/store"
import { openHandle } from "../../app/features/AsideMenu"

export const Footer: React.FC = () => {

    const dispatch = useAppDispatch();

    return (
        <div className={`
            container bg-cyan-200 text-black
        `}>
            <div className={`
                grid grid-cols-3 p-5 
            `}>
                <Button name="Menu" onClick={() => dispatch(openHandle())} />
                <div className={`
                text-xl flex justify-center bg-cyan-300 
                items-center
                `}>
                    Gsurica
                </div>
                <div className={`
                flex justify-center
                `}>
                    <div className={`
                    flex justify-center items-center
                    bg-white rounded-full h-12 w-12
                    animate-bounce
                    `}>
                        <button onClick={() => toUp()}><ArrowUp /></button>
                    </div>
                </div>
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