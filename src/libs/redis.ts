import redis from "@/services/redis";

export async function increaseViews(entity: string, _id: string) {
    const key = `${entity}:${_id}:views`;
    await redis.incr(key);
}
