import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function calculatePercentage(amount, total) {
  return Math.floor((amount / total) * 100);
}

export function formatCurrency(amount = 0) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(amount);
}

export const generateCourseName = (course, type = "") => {
  if (type?.toLowerCase()?.includes("bachelor")) {
    return `Bachelor of ${course} `;
  } else if (type?.toLowerCase()?.includes("diploma")) {
    return `Diploma in ${course} `;
  } else if (type?.toLowerCase()?.includes("certificate")) {
    return `Certificate in ${course} `;
  }
};

const days = [
  { id: 1, name: "Monday" },
  { id: 2, name: "Tuesday" },
  { id: 3, name: "Wednesday" },
  { id: 4, name: "Thursday" },
  { id: 5, name: "Friday" },
];

export const groupUnitsByDay = (units) => {
  const daysGroupedByUnits = days.map((day) => {
    // filter the units by the current day
    const dayUnits = units.filter((unit) => (unit?.day || 1) === day.id);

    // map the current day units to an array of unit time and name
    const dayUnitNames = dayUnits.map((unit) => ({
      time: `${unit?.start_time} - ${unit?.end_time}`,
      unit: unit?.unit?.name || "",
    }));

    return { [day.name]: dayUnitNames };
  });

  return daysGroupedByUnits.reduce((acc, dayObj) => {
    const day = Object.keys(dayObj)[0];
    const timeSlots = dayObj[day];

    timeSlots.forEach((timeSlot, index) => {
      if (!acc[index]) {
        acc[index] = {};
        days.forEach((day) => (acc[index][day.name] = ""));
      }
      acc[index][day] = timeSlot;
    });

    return acc;
  }, []);
};

export const getYears = (startYear = 2018) => {
  const endYear = new Date().getFullYear();

  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }
  return years;
};
