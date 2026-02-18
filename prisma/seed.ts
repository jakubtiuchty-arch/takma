import 'dotenv/config'
import { PrismaClient } from '../src/generated/prisma/client'

const prisma = new (PrismaClient as unknown as new () => InstanceType<typeof PrismaClient>)()

async function main() {
  // Hash password using Web Crypto (same as src/lib/auth.ts)
  const password = 'admin123' // Change in production!
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  )
  const hash = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
    key,
    256
  )
  const saltHex = Array.from(salt).map(b => b.toString(16).padStart(2, '0')).join('')
  const hashHex = Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('')
  const hashedPassword = `${saltHex}:${hashHex}`

  const existing = await prisma.adminUser.findUnique({
    where: { email: 'takma@takma.com.pl' },
  })

  if (!existing) {
    await prisma.adminUser.create({
      data: {
        email: 'takma@takma.com.pl',
        hashedPassword,
        name: 'Tadeusz',
        role: 'ADMIN',
      },
    })
    console.log('Admin user created: takma@takma.com.pl / admin123')
  } else {
    console.log('Admin user already exists')
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
