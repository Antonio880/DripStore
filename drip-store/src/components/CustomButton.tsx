interface CustomButtonProps {
    children: String;
    onClick?: () => void;
}

export default function CustomButton({ children, ...props }: CustomButtonProps) {
  return (
    <button className={`text-white px-10 flex items-center my-2 bg-primary rounded-md`} {...props}>
      {children}
    </button>
  );
}