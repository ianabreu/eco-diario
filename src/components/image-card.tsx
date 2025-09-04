import Image, { ImageProps } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageCardProps extends ImageProps {
  caption?: string;
  aspectRatio?: number;
}

export function ImageCard({
  src,
  alt,
  caption,
  aspectRatio = 16 / 9,
  ...props
}: ImageCardProps) {
  return (
    <figure className="w-full overflow-hidden">
      <AspectRatio ratio={aspectRatio} className="rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover w-full h-full bg-white"
          {...props}
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
