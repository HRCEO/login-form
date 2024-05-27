import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function user() {
    const user = await db.user.create({
        data: {
          username: 'SungIl',
          email: 'SungIl@nomadcoders.co.kr',
        },
      })
      console.log(user)
}

user()

export default db