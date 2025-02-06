import NavigatePage from "../navigatePage";

const SectionHeading = ({ title, url }) => {
  return (
    <div className="w-full py-3 flex justify-between items-center bg-gray-200/50 px-2 mb-2">
      <h2 className="text-gray-800 text-2xl font-bold">
        <span className="inline-block h-5 border border-l-4 border-[#f79e4d] mr-2"></span>
        {title}
      </h2>
      {url && (
        <NavigatePage url={url} className="text-blue-800 underline">
          Duba duka
        </NavigatePage>
      )}
    </div>
  );
};

export default SectionHeading;
