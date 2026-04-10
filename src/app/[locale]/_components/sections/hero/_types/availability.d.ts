type Availability = {
  id: number;
  documentId: string;
  isAvailable: boolean;
  workType: "full-time" | "part-time" | "remote";
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
};
