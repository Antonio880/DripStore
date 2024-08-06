interface CustomButtonProps {
    children: String;
    onClick?: () => void;
}

export default function CustomButton({ children, ...props }: CustomButtonProps) {
  return  (
    <button className={`text-white px-10 flex items-center my-2 py-2 font-bold bg-primary transition hover:bg-[#b33672] rounded-md`} {...props}>
      {children}
    </button>
  );
}