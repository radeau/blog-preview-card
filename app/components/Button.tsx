interface Props {
    children?: React.ReactNode;
    color: string;
  }

const Button: React.FC<Props> = ({children,color}) => {
    return (
        <button className="font-extrabold h-full py-1 px-4 rounded"
        style={{
            backgroundColor: color
            }}>
        {children}
        </button>
    )
}

export default Button;