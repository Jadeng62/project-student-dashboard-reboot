export function birthdayFormat(student) {
  const birthMonths = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const [month, day, year] = student.dob.split("/");

  const monthName = birthMonths[parseInt(month)];

  return `${monthName} ${day}, ${year}`;
}

export function graduationTrack(student) {
  return (
    student.certifications.resume &&
    student.certifications.linkedin &&
    student.certifications.github &&
    student.certifications.mockInterview
  );
}
