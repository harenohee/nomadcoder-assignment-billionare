const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export interface Billionaire {
//   id: string;
//   name: string;
//   squareImage: string;
//   netWorth: number;
//   industries: string[];
// }

// export interface BillionaireDetail extends Billionaire {
//   country: string;
//   description: string;
//   bio: string[];
// }

export async function fetchAllBillionaires() {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error("Failed to fetch billionaires");
  }
  return await response.json();
}

export async function fetchBillionaireDetail(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch billionaire with id: ${id}`);
  }
  return await response.json();
}
