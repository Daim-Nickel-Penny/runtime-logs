import Image from 'next/image';

interface MediaImage {
  src: string;
  alt: string;
}

const MediaImage: React.FC<MediaImage> = (props) => {
  return (
    <div className="flex w-[640px] justify-center rounded-3xl border border-gray-400/50 p-4">
      <Image
        className="pointer-events-none select-none rounded-3xl border border-gray-400/50"
        src={props.src}
        alt={props.alt}
        width={640}
        height={300}
      />
    </div>
  );
};

export { MediaImage };
