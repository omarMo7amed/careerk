import Image from "next/image";
import { UserAvatarProps } from "../types/userAvatar";
import { getInitialsFromFullName } from "../lib/getInitialsFromFullName";
import { getProfileColor } from "../lib/getProfileColor";

export function UserAvatar({
  id,
  name,
  profileImageUrl,
  size = 10,
}: UserAvatarProps) {
  const initials = getInitialsFromFullName(name);
  const color = getProfileColor(id);
  if (profileImageUrl) {
    return (
      <Image
        src={profileImageUrl}
        alt={name || "avatar"}
        width={size}
        height={size}
        className={`rounded-full `}
      />
    );
  }
  return (
    <div
      className={`rounded-full flex items-center justify-center font-semibold`}
      style={{
        background: color.bg,
        borderColor: color.border,
        color: color.solid,
        width: size,
        height: size,
      }}
      aria-hidden
    >
      {" "}
      {initials}{" "}
    </div>
  );
}
