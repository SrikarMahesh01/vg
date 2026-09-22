import Image from "next/image";

interface VirtueLogoProps {
  className?: string;
  height?: number;
  width?: number;
  priority?: boolean;
}

export function VirtueLogo({
  className = "",
  height = 36,
  width,
  priority = false,
}: VirtueLogoProps) {
  // Aspect ratio of trimmed VG Logo is 678 x 142 (~4.7746)
  const computedWidth = width ?? Math.round(height * (678 / 142));

  return (
    <Image
      src="/images/vg-logo.png"
      alt="Virtue Software Solutions"
      width={computedWidth}
      height={height}
      priority={priority}
      className={`object-contain ${className}`}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}
