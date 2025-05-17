import Link from 'next/link';

export default function Home() {
  return (
    <div className="starry flex h-[100dvh] w-full flex-col items-center justify-center">
      <div className="flex min-h-60 min-w-1/3 flex-col justify-center bg-black text-center text-white">
        <h1 className="mb-8 text-2xl font-semibold">Repair shop</h1>
        <div className="space-y-1">
          <div className="flex justify-center gap-4">
            <p>Contact No. -</p>
            <p>8777777777</p>
          </div>
          <div className="flex justify-center gap-4">
            <p>Address -</p>
            <p>Sodala, Jaipur</p>
          </div>
          <Link href={'https://maps.app.goo.gl/aAosZy8vh5GdAXxa7'} className="underline-offset-2 hover:underline">
            Open in Maps
          </Link>
        </div>
      </div>
    </div>
  );
}
