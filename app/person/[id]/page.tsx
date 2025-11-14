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
    <div className="flex flex-col min-h-screen px-10 py-20 space-y-5 items-start font-sans dark:bg-black">
      <div className="w-full bg-gray-200 p-2 rounded-md shadow-md dark:bg-gray-200 space-y-5">
        <img
          src={personalInfo.squareImage}
          alt={personalInfo.squareImage}
          className="mb-4 h-48 rounded object-cover"
        />
        <div className="space-y-3">
          <h3 className="font-bold text-2xl">{personalInfo.name}</h3>
          <div>NetWorth: {personalInfo.netWorth} </div>
          <div>Country: {personalInfo.country}</div>
          {personalInfo.industries.map((industry: string, index: number) => (
            <div key={index}>Industry: {industry}</div>
          ))}
          <div>{personalInfo.bio}</div>
        </div>
      </div>
      <div className="w-full bg-gray-200 p-2 rounded-md shadow-md dark:bg-gray-200 space-y-5">
        <h2 className="font-bold text-2xl">Financial Assets</h2>
        <div className="max-w-fit grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {personalInfo.financialAssets.map((item: any, index: number) => (
            <div
              className="border-1 border-gray-500 rounded-md p-2 w-44"
              key={index}
            >
              <p>Ticker: {item.ticker}</p>
              <p>Shares: {item.sharePrice}</p>
              <p>Exchange: {item.exchange}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
