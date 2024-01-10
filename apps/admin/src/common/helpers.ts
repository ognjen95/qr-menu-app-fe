import { formatDistance, parseISO, isToday, isYesterday } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const getExtensionFromFileType = (fileType: string): string =>
  fileType.replace(/(.*)\//g, "");

export const renameFile = (file: File, name: string) => {
  const blob = new Blob([file], { type: file.type });
  const renamedFile = new File([blob], name, { type: file.type });

  return renamedFile;
};

export const countTimePassedFromNow = (date: Date) => {
  if (isToday(date)) {
    return "Today";
  }

  if (isYesterday(date)) {
    return "Yesterday";
  }

  return formatDistance(new Date(), date);
};

export const dateToUtcDate = (date: Date) => {
  const utcIsoString = date.toISOString();

  const parsedISOString = parseISO(utcIsoString);

  return utcToZonedTime(parsedISOString, "UTC");
};
