import getSession from "@/lib/session";

export const saveUserIdToSession = async (userId: number) => {
  const session = await getSession();
  session.id = userId;
  await session.save();
};
