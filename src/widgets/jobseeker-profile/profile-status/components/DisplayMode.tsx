import { Activity, Laptop, Tag, DollarSign, Clock } from "lucide-react";
import { Badge } from "@/shared";
import { Row } from "./Row";
import { useProfileStatusContext } from "../model/ProfileStatusContext";
import { AvailabilityBadge } from "@/entities/job-seeker/components/AvailabilityBadge";
import { jobTypeLabels } from "@/entities/company-job";
import {
  AVAILABILITY_STATUS_LABELS,
  WORK_PREFERENCE_LABELS,
} from "@/entities/job-seeker";

export function DisplayMode() {
  const { viewProfileStatus } = useProfileStatusContext();
  const profileStatus = viewProfileStatus;

  return (
    <div className="flex flex-col gap-4">
      {profileStatus.availabilityStatus && (
        <Row icon={<Activity className="w-4 h-4" />} label="Availability">
          <AvailabilityBadge
            status={
              AVAILABILITY_STATUS_LABELS[
                profileStatus.availabilityStatus
              ] as string
            }
          />
        </Row>
      )}
      {profileStatus.workPreference && (
        <Row icon={<Laptop className="w-4 h-4" />} label="Work Preference">
          <Badge variant="info" size="sm">
            {
              WORK_PREFERENCE_LABELS[
                profileStatus.workPreference as keyof typeof WORK_PREFERENCE_LABELS
              ]
            }
          </Badge>
        </Row>
      )}
      {profileStatus.preferredJobTypes.length > 0 && (
        <Row icon={<Tag className="w-4 h-4" />} label="Job Types">
          {profileStatus.preferredJobTypes.map((type) => (
            <Badge key={type} variant="default" size="sm">
              {jobTypeLabels[type as keyof typeof jobTypeLabels]}
            </Badge>
          ))}
        </Row>
      )}
      {profileStatus.expectedSalary != null && (
        <Row icon={<DollarSign className="w-4 h-4" />} label="Expected Salary">
          <span className="text-sm font-semibold text-foreground">
            ${profileStatus.expectedSalary.toLocaleString()} / year
          </span>
        </Row>
      )}
      {profileStatus.noticePeriod && (
        <Row icon={<Clock className="w-4 h-4" />} label="Notice Period">
          <span className="text-sm text-foreground">
            {profileStatus.noticePeriod}
          </span>
        </Row>
      )}
    </div>
  );
}
