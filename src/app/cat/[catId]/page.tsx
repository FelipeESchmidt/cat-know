import { notFound } from "next/navigation";

import { fetchCatById } from "@/lib/api/cats";

export interface CatIdParamsProps {
  params: Promise<{ catId: string }>;
  searchParams?: { name?: string };
}

export default async function CatId({
  params,
  searchParams,
}: CatIdParamsProps) {
  const { catId } = await params;
  const fallbackName = searchParams?.name;

  let cat: any = null;

  try {
    cat = await fetchCatById(catId);
  } catch (e) {
    console.error("Failed to fetch cat", e);
    notFound();
  }

  if (!cat) {
    notFound();
  }

  const imageUrl = cat.url;
  const name = fallbackName || cat.breeds?.[0]?.name || "Unknown";

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
}
