import type { syferModes } from "constants/app";

export type SyferMode = (typeof syferModes)[number];

export type Setting = {
  passphrase: string;
  syferMode: SyferMode;
  hardwareConcurrency: number;
};

export type fileQueueItem = {
  id: string;
  file: File;
  status: FileStatus;
  progress: number;
};

export enum FileStatus {
  Pending = "Pending",
  Processing = "Processing",
  Completed = "Completed",
  Failed = "Failed",
  // Canceled = "Canceled",
  // Paused = "Paused",
  Delisted = "Delisted",
}
