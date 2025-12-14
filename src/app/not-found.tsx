import Link from 'next/link'
import { Button } from '@/components/ui'
import { HomeIcon, SearchIcon } from '@/components/ui/Icons'

export default function NotFound() {
  return (
    <div className="container-main py-16 lg:py-24">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-8xl font-bold text-primary-100 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Strona nie została znaleziona
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button leftIcon={<HomeIcon size={18} />}>Strona główna</Button>
          </Link>
          <Link href="/katalog">
            <Button variant="secondary" leftIcon={<SearchIcon size={18} />}>
              Przeglądaj katalog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
