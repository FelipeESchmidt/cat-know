export interface CatIdParamsProps {
  params: Promise<{ catId: string }>;
}

export default async function CatId({ params }: CatIdParamsProps) {
  const { catId } = await params;

  return (
    <section className="mb-16 bg-black">
      <div>
        <h1>CAT PAGE</h1>
        <p>CAT ID: {catId}</p>
      </div>
    </section>
  );
}
