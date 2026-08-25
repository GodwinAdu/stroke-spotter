import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getAuthToken, verifyToken } from "@/lib/auth";

const f = createUploadthing();

export const ourFileRouter = {
  media: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => {
      const token = await getAuthToken();
      if (!token) throw new Error("Unauthorized");

      const payload = verifyToken(token);
      if (!payload) throw new Error("Unauthorized");

      return { userId: payload.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
