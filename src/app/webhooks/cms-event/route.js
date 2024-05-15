import { revalidateTag } from "next/cache";

export async function POST(request) {
    const payload = await request.json();
    console.log('payload:', payload);
    revalidateTag('blog');
    return new Response(null, { status: 204 })
}