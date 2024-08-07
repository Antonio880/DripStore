interface CustomButtonProps {
  children: string;
  onClick?: () => void;
  classname?: string;
}

export default function CustomButton({
  children,
  classname = "",
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={`text-white tracking-widest px-10 flex items-center my-2 py-2 font-bold bg-primary transition hover:bg-[#b33672] rounded-md ${classname}`}
      {...props}
    >
      {children}
    </button>
  );
}
