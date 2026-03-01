import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { getBrandCategoryBySlug, getProductsByBrandCategory, getCategoryById, getManufacturerById, getSubcategoriesForCategory } = await import('@/data/products')
    const { brandCategoryContent } = await import('@/data/brand-category-content')

    const slug = 'skanery-kodow-kreskowych-newland'
    const bc = getBrandCategoryBySlug(slug)
    if (!bc) return NextResponse.json({ error: 'Brand category not found', slug })

    const category = getCategoryById(bc.categoryId)
    if (!category) return NextResponse.json({ error: 'Category not found', categoryId: bc.categoryId })

    const manufacturer = getManufacturerById(bc.manufacturerId)
    if (!manufacturer) return NextResponse.json({ error: 'Manufacturer not found', manufacturerId: bc.manufacturerId })

    const products = getProductsByBrandCategory(bc)
    const subcats = getSubcategoriesForCategory(bc.categoryId)
    const content = brandCategoryContent[slug]

    return NextResponse.json({
      ok: true,
      slug,
      bcId: bc.id,
      categoryName: category.name,
      manufacturerName: manufacturer.name,
      productCount: products.length,
      subcatCount: subcats.length,
      hasContent: !!content,
      contentKeys: content ? Object.keys(content) : null,
      faqCount: content?.faq?.length ?? 0,
      bcFaqCount: bc.faq?.length ?? 0,
    })
  } catch (e: unknown) {
    const err = e as Error
    return NextResponse.json({ error: err.message, stack: err.stack?.split('\n').slice(0, 5) }, { status: 500 })
  }
}
