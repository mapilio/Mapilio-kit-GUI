const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className="w-full p-2 mt-4 text-white bg-primary transition-all rounded-md hover:bg-blue-800 active:bg-blue-900"
      {...props}
    >
      {props.children}
    </button>
  );
};
export default Button;
