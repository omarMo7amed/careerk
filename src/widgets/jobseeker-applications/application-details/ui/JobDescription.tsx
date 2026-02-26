interface JobDescriptionProps {
  description: string;
}

export function JobDescription({ description }: JobDescriptionProps) {
  return (
    <div>
      <p className="text-sm text-text-secondary mb-2">JOB DESCRIPTION</p>
      <p className=" text-sm leading-relaxed">{description}</p>
    </div>
  );
}
