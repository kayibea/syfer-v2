// export const get

export const makeId = (): string => Math.random().toString(36).slice(2, 10);

export const formatFileSize = (bytes: number): string => {
  if (bytes < 0) throw new Error("File size cannot be negative");

  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
};
