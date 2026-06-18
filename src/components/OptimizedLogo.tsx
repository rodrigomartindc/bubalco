import { asset } from '../utils/asset';

interface LogoAsset {
  alt: string;
  width: number;
  height: number;
  webp: string;
  fallback: string;
}

interface Props {
  logo: LogoAsset;
  className?: string;
}

export default function OptimizedLogo({ logo, className }: Props) {
  return (
    <picture>
      <source type="image/webp" srcSet={asset(logo.webp)} />
      <img
        src={asset(logo.fallback)}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={className ? `w-auto max-w-full ${className}` : 'w-auto max-w-full'}
        decoding="async"
      />
    </picture>
  );
}
