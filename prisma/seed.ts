import { PrismaClient } from '../src/generated/prisma/client'
import { hashPassword } from '../src/lib/auth'

const prisma = new (PrismaClient as unknown as new () => InstanceType<typeof PrismaClient>)()

async function main() {
  // Seed admin user
  const existing = await prisma.adminUser.findUnique({
    where: { email: 'takma@takma.com.pl' },
  })

  if (!existing) {
    const hashed = await hashPassword('admin123') // Change in production!
    await prisma.adminUser.create({
      data: {
        email: 'takma@takma.com.pl',
        hashedPassword: hashed,
        name: 'Tadeusz',
        role: 'ADMIN',
      },
    })
    console.log('Admin user created: takma@takma.com.pl')
  } else {
    console.log('Admin user already exists')
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
