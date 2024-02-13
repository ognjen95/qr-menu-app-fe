import { formatDistance, parseISO, isToday, isYesterday } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { CSSProperties } from "react";

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

export const addBucketPrefix = (url: string): string => {
  const bucketUrl = process.env.NEXT_PUBLIC_IMG_URL ?? "";

  if (!url) return "";

  return `${bucketUrl}${url}`;
};

export const removeBucketPrefix = (url: string): string => {
  const bucketUrl = process.env.NEXT_PUBLIC_IMG_URL ?? "";

  if (!url) return "";

  return url.replace(bucketUrl, "");
};

export const removeEmptyFields = (
  obj: CSSProperties | undefined | null
): Record<string, unknown> => {
  if (!obj) return {};

  const result: Record<string, unknown> = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key] as unknown;
    if (value !== null && value !== undefined && value !== "") {
      result[key] = value;
    }
  });

  return result;
};
