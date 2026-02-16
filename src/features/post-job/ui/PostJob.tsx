import { Button } from "@/shared";

export function PostJob({ variant }: { variant?: "primary" | "secondary" }) {
  return <Button variant={variant}>Post a Job</Button>;
}
