import { AboutProdBoost, AboutProdTask } from "./index";

export default function AboutProd() {
  return (
    <>
      <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <AboutProdBoost />
        <AboutProdTask />
      </section>
    </>
  );
}
