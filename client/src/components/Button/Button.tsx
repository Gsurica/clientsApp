
interface ButtonProps {
    name: string;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ name, onClick, className }) => {
    return (
        <div className={`
        text-lg flex justify-center 
        bg-cyan-300 py-2 hover:bg-cyan-400  
        `}>
            <button onClick={onClick} className={`${className}`}>
                { name }
            </button>
        </div>
    )
}