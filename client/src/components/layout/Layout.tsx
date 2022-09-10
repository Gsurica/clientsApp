import { ReactNode } from "react";


interface LayoutProps {
    header?: ReactNode;
    children: any;
    footer?: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ header, children, footer }) => {
    return (
        <div>
            { header }
            { children }
            { footer }
        </div>
    )
}