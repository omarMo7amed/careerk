import { Education } from "@/entities/education";

export function sameEducation(left: Education, right: Education) {
  return (
    left.degreeType === right.degreeType &&
    left.description === right.description &&
    left.institutionName === right.institutionName &&
    left.isCurrent === right.isCurrent &&
    left.fieldOfStudy === right.fieldOfStudy &&
    left.endDate === right.endDate &&
    left.gpa === right.gpa &&
    left.startDate === right.startDate
  );
}
