import { Suspense } from "react";
import { notFound } from "next/navigation";

import { fetchCatById } from "@/lib/api/cats";
import CatByIdLoaded from "@/pages/CatByIdLoaded";
import CatByIdLoading from "@/pages/CatByIdLoaded/loading";

export interface CatIdParamsProps {
  params: Promise<{ catId: string }>;
  searchParams: Promise<{ name?: string }>;
}

export default async function CatById({
  params,
  searchParams,
}: CatIdParamsProps) {
  const { catId } = await params;
  const { name } = await searchParams;

  const cat = await fetchCatById(catId, name);

  if (!cat) {
    notFound();
  }

  return (
    <section>
      <Suspense fallback={<CatByIdLoading />}>
        <CatByIdLoaded cat={cat} />
      </Suspense>
    </section>
  );
}
