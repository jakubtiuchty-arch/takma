import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import UsedDeviceForm from '../UsedDeviceForm'
import { zapiszUzywke } from '../actions'

export const dynamic = 'force-dynamic'

export default async function EdycjaUzywkiPage({ params }: { params: { id: string } }) {
  const sztuka = await prisma.usedDevice.findUnique({ where: { id: params.id } })
  if (!sztuka) notFound()

  return (
    <div>
      <Link href="/admin/uzywane" className="text-sm text-gray-500 hover:text-gray-700">← Urządzenia używane</Link>
      <h1 className="text-2xl font-bold text-gray-900 mt-2 mb-1">{sztuka.name}</h1>
      <p className="text-sm text-gray-500 mb-6">
        /uzywane/{sztuka.slug}
        {sztuka.orderNumber && <> · sprzedany w zamówieniu {sztuka.orderNumber}</>}
      </p>
      <UsedDeviceForm
        sztuka={sztuka}
        onSubmit={async (form: FormData) => {
          'use server'
          await zapiszUzywke(sztuka.id, form)
        }}
      />
    </div>
  )
}
