import type { OptimizedImage } from '../data/images';
import { asset } from '../utils/asset';

interface Props {
  image: OptimizedImage;
  className?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
}

export default function OptimizedPicture({
  image,
  className,
  fetchPriority,
  loading = 'lazy',
}: Props) {
  const srcSet = image.sources
    .map((source) => `${asset(source.path)} ${source.width}w`)
    .join(', ');

  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={image.sizes} />
      <img
        src={asset(image.fallback)}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        sizes={image.sizes}
      />
    </picture>
  );
}
