import { Banner } from "@/components";

export default function SobreNos() {
  return (
    <Banner style={{ backgroundImage: "url('/Img1.svg')" }}>
      <h2 className="md:text-2xl text-base font-bold antialiased">
        Confie em nós para representar seus interesses com paixão,
        profissionalismo e comprometimento.
      </h2>
      <div className="border border-white my-3 antialiased"></div>
      <p className="font-Lato font-normal md:text-lg text-sm mb-3">
        Confie em nós para representar seus interesses com paixão,
        profissionalismo e comprometimento. Somos um escritório de atuação full
        service, 360º, adaptando, entendendo e acolhendo cada cliente com sua
        respectiva demanda.
      </p>
      <p className="font-Lato font-normal md:text-lg text-sm">
        Profissionais altamente qualificados e especializados em diversas áreas
        do direito, o Dr. Gustavo Santos Ribeiro possui vasta experiência em
        responsabilidade civil, direito do consumidor e isenção de imposto de
        renda em casos de doença grave;acolhendo cada cliente com sua respectiva
        demanda.
      </p>
    </Banner>
  );
}
