import { ReactNode } from "react";
import { AsideMenu } from "../AsideMenu/AsideMenu";

interface LayoutProps {
    header?: ReactNode;
    children: any;
    footer?: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ header, children, footer }) => {
    return (
        <div className={`
        relative
        `}>
            { header }
            <AsideMenu />
            { children }
            { footer }
        </div>
    )
}