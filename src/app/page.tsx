import Container from "@/components/Container";
import ProductCard from "@/components/product/ProductCard"

export default function Home() {
  return (
    <div className="py-32">
      <Container cn="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        < ProductCard />
      </Container>
    </div>
  );
}
