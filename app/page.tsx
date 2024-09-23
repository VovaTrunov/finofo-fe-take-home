import Container from "@/app/_components/Container";

export default async function Home() {
  const response = await fetch("https://www.fruityvice.com/api/fruit/all");
  const fruits = await response.json();

  if (!response.ok || !fruits) {
    return <div>Error fetching data</div>;
  }

  return (
    <main className="flex h-screen overflow-hidden">
      <Container fruits={fruits} />
    </main>
  );
}
