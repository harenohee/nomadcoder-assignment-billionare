import type { Metadata } from "next";
import Link from "next/link";
import { fetchAllBillionaires } from "@/app/api/api";

export const metadata: Metadata = {
  title: "Home",
};

interface Billionaires {
  name: string;
  id: string;
  squareImage: string;
  netWorth: number;
  industries: never;
}
const getBillionaireList = async () => {
  const response = await fetchAllBillionaires();
  if (response) {
    return response;
  }
};

export default async function Home() {
  const billionareList = await getBillionaireList();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {billionareList.map((billionaire: Billionaires) => (
          <Link
            key={billionaire.id}
            href={`/person/${billionaire.id}`}
            className="rounded-lg bg-white p-4 shadow-md dark:bg-zinc-800"
          >
            <img
              src={billionaire.squareImage}
              alt={billionaire.squareImage}
              className="mb-4 h-48 w-full rounded object-cover"
            />
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {billionaire.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
