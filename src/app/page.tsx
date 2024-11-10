import HomeClient from "@/components/HomeClient";
import { AppPlayer } from "@/interfaces";

const url = process.env.NEXT_PUBLIC_API_URL + '/players'

export const dynamic = 'force-dynamic'

export default async function Home() {

  const result = await fetch(url, { method: 'GET', next: { revalidate: 0} })

  if(!result.ok) return <p>Sorry an error occurred</p>

  const players: AppPlayer[] = await result.json()

  return (
    <div>
      <main>
        <HomeClient players={players} />
      </main>
    </div>
  );
}
