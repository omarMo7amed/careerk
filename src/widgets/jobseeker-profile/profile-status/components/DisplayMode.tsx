import { Activity, Laptop, Tag, DollarSign, Clock } from "lucide-react";
import { Badge, AvailabilityBadge } from "@/shared";
import { Row } from "./Row";
import { JOB_TYPE_LABELS, WORK_PREFERENCE_LABELS } from "@/entities/job-seeker";
import { useProfileStatusContext } from "../model/ProfileStatusContext";

export function DisplayMode() {
  const { viewProfileStatus } = useProfileStatusContext();
  const profileStatus = viewProfileStatus;

  return (
    <div className="flex flex-col gap-4">
      {profileStatus.availabilityStatus && (
        <Row icon={<Activity className="w-4 h-4" />} label="Availability">
          <AvailabilityBadge status={profileStatus.availabilityStatus} />
        </Row>
      )}
      {profileStatus.workPreference && (
        <Row icon={<Laptop className="w-4 h-4" />} label="Work Preference">
          <Badge variant="info" size="sm">
            {WORK_PREFERENCE_LABELS[profileStatus.workPreference]}
          </Badge>
        </Row>
      )}
      {profileStatus.preferredJobTypes.length > 0 && (
        <Row icon={<Tag className="w-4 h-4" />} label="Job Types">
          {profileStatus.preferredJobTypes.map((type) => (
            <Badge key={type} variant="default" size="sm">
              {JOB_TYPE_LABELS[type]}
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
