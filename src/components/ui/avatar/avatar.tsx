import Image from "next/image";

interface Avatar {
  src: string;
  alt: string;
  size: "sm" | "md" | "lg";
}

const Avatar: React.FC<Avatar> = (props) => {
  return (
    <>
      <Image
        src={props.src}
        alt={props.alt || "image"}
        quality={70}
        width={25}
        height={25}
        className="rounded-full"
      />
    </>
  );
};

export { Avatar };
