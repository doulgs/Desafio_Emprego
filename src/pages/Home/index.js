import { Header } from "../../components/Header";
import { HeroBanner } from "../../components/HeroBanner";
import { OtherModels } from "../../components/OtherModels";
import { HomeContainer } from "../../styles/pages/HomeStyles";
import OtherForm from "../../components/OtherForm";
import OtherPeople from "../../components/OtherPeople";
import OtherPrices from "../../components/OtherPrices";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HeroBanner />
      <OtherModels />
      <OtherPeople />
      <OtherPrices />
      <OtherForm />
    </HomeContainer>
  );
}
