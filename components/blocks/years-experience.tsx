"use client";

export default function YearsExperience() {
  const start = new Date("2016-01-13");
  const today = new Date();
  const years = today.getFullYear() - start.getFullYear();
  const monthDifference = today.getMonth() - start.getMonth();
  const isBirthdayPassed =
    monthDifference > 0 ||
    (monthDifference === 0 && today.getDate() >= start.getDate());
  const finalYears = isBirthdayPassed ? years : years - 1;
  return <span>{finalYears}</span>;
}
