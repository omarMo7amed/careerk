import Image from "next/image";

interface CompanyIconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

function CompanyIcon({ src, alt, width, height, className }: CompanyIconProps) {
  return (
    <div className={`absolute  ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width || 48}
        height={height || 48}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}

export default CompanyIcon;
