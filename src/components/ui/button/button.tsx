interface ButtonProps {
  name: string;
  onClick?: () => void;
  variant: 'solid' | 'outlined';
}

const Button: React.FC<ButtonProps> = (props) => {
  const solidClass =
    'text-sm  flex items-center rounded-full bg-white px-4 p-2 font-sans font-normal leading-tight tracking-tighter text-black';

  const outlinedClass =
    'text-sm border flex items-center rounded-full border-gray-600 bg-transparent px-4 p-2 font-sans font-normal leading-tight tracking-tighter text-white';

  return (
    <button className={props.variant === 'solid' ? solidClass : outlinedClass}>{props.name}</button>
  );
};

export { Button };
