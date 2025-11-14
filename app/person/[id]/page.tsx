import { fetchBillionaireDetail } from "@/app/api/api";

const getDetailBillionaire = async (id: string) => {
  const response = await fetchBillionaireDetail(id);
  if (response) return response;
};

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id);
  const personalInfo = await getDetailBillionaire(id);
  return (
    <div className="flex flex-col min-h-screen px-10 py-20 items-start  bg-zinc-50 font-sans dark:bg-black">
      <div>
        <img
          src={personalInfo.squareImage}
          alt={personalInfo.squareImage}
          className="mb-4 h-48 w-full rounded object-cover"
        />
        <h3 className="font-bold text-2xl">{personalInfo.name}</h3>
        <span>NetWorth: {personalInfo.netWorth}</span>
        <span>Country: {personalInfo.country}</span>
        {personalInfo.industries.map((industry: string, index: number) => (
          <div key={index}>Industry {industry}</div>
        ))}
      </div>
      <div>{personalInfo.bio}</div>
    </div>
  );
};

export default DetailPage;
