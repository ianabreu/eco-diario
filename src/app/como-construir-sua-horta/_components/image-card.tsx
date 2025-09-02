import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ImageCard({ src, alt, caption }: ImageCardProps) {
  return (
    <figure className="w-full overflow-hidden">
      <AspectRatio ratio={16 / 9} className="rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover w-full h-full"
        />
      </AspectRatio>

      {caption && (
        <figcaption className="mt-2 text-center text-xs text-gray-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
