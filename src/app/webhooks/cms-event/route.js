import { CACHE_TAG_REVIEWS } from "@/src/utils/blogUtils";
import { revalidateTag } from "next/cache";

export async function POST(request) {
    const payload = await request.json();
    console.log('payload:', payload);
    revalidateTag(CACHE_TAG_REVIEWS);
    return new Response(null, { status: 204 })
}