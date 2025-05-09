import { CardItemLoading } from "@/components/CardItem/loading";

import mainStyles from "../../app/page.module.css";

export function CatByIdLoading() {
  return (
    <main className={mainStyles.page}>
      <div className={mainStyles.container}>
        <h1 className={mainStyles.title}>CatKnow</h1>
        <CardItemLoading asGiant />
      </div>
    </main>
  );
}
