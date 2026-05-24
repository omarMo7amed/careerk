import Image from "next/image";

interface AvatarProps {
  profileImageUrl?: string | null;
  firstName?: string;
}

function Avatar({ profileImageUrl, firstName = "U" }: AvatarProps) {
  const initials = firstName?.charAt(0).toUpperCase() || "U";

  return (
    <div className="w-16 h-16 rounded-full bg-bg-surface border-2 border-border flex items-center justify-center overflow-hidden">
      {profileImageUrl ? (
        <Image
          src={profileImageUrl}
          alt={firstName || "Profile"}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="font-bold text-2xl text-primary">{initials}</span>
      )}
    </div>
  );
}

export { Avatar };
