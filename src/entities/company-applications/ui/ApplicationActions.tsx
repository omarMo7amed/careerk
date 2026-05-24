import { DownloadButton } from "@/entities/cv";
import {
  CandidateSocialLinks,
  ContactButton,
  ViewProfile,
} from "@/entities/job-seeker";

interface Props {
  linkedinUrl: string | null | undefined;
  githubUrl: string | null | undefined;
  cvUrl: string | null | undefined;
  email: string;
  id: string;
}

export function ApplicationActions({
  linkedinUrl,
  githubUrl,
  cvUrl,
  email,
  id,
}: Props) {
  return (
    <div className="flex flex-col gap-3 pt-2 border-t border-border">
      <div className="flex items-center justify-between gap-2">
        <CandidateSocialLinks linkedinUrl={linkedinUrl} githubUrl={githubUrl} />
        <div className="flex items-center gap-2">
          <DownloadButton />
          <ContactButton email={email} />
          <ViewProfile id={id} />
        </div>
      </div>
    </div>
  );
}
