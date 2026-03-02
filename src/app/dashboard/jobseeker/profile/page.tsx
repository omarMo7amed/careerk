import { JobSeekerProfileWidget } from "@/widgets/jobseeker-profile/jobseeker-widget";

export default function JobseekerProfilePage() {
  return <JobSeekerProfileWidget isOwner />;
}

/**
 * Remember ya omar (basic idea)
 * i will need a four endpoint to get profile :
 * GET /api/job-seekers/me => profile info + summary + contact info ...
 * GET /api/job-seekers/me/experience => experience list
 * GET /api/job-seekers/me/education => education list
 * GET /api/job-seekers/me/skills => skills list
 *
 *
 * yallllllllllllllllllahwy
 */
