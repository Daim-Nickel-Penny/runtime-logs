import { icons, type LucideIcon } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number | string;
}

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const LucideIcon: LucideIcon = icons[name];

  if (!LucideIcon) {
    console.error(`Icon "${name}" does not exist in lucide-react.`);
    return null;
  }

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
