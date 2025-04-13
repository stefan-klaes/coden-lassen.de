"use client";

export default function Age() {
  const birthday = new Date("1993-01-13");
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const monthDifference = today.getMonth() - birthday.getMonth();
  const isBirthdayPassed =
    monthDifference > 0 ||
    (monthDifference === 0 && today.getDate() >= birthday.getDate());
  const finalAge = isBirthdayPassed ? age : age - 1;
  return <span>{finalAge}</span>;
}
