import { Drive, DropBox, Box } from "./SVG";

export const STORAGE_LIST = [
  {
    icon: Drive,
    name: "Google Drive",
    menu: true,
    storageLimit: 15,
    usedStorage: 10,
    percentage: function () {
      return Math.trunc((this.usedStorage / this.storageLimit) * 100);
    },
    color: "warning",
  },
  {
    icon: DropBox,
    name: "Drop Box",
    menu: true,
    storageLimit: 15,
    usedStorage: 12,
    percentage: function () {
      return Math.trunc((this.usedStorage / this.storageLimit) * 100);
    },
    color: "info",
  },
  {
    icon: Box,
    name: "Box",
    menu: true,
    storageLimit: 15,
    usedStorage: 3,
    percentage: function () {
      return Math.trunc((this.usedStorage / this.storageLimit) * 100);
    },
    color: "success",
  },
];
