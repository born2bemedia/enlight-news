import { CACHE_TAG_REVIEWS } from "@/src/utils/blogUtils";
import { revalidateTag } from "next/cache";

export default async function handler(req, res) {
  console.log('Received method:', req.method);
  try {
    const payload = await req.json();
    
    
    await revalidateTag(CACHE_TAG_REVIEWS);
    console.log("Cache revalidation triggered for:", CACHE_TAG_REVIEWS);
    return res.status(204).end(); // Send an empty response with 204 No Content status
  } catch (error) {
    console.error("Failed to process request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
