const TableBodyLoader = () => {
  return (
    <tbody className="text-gray-700 text-sm font-light">
      {Array.from({ length: 10 }).map((_, index) => (
        <tr key={index} className="border-b border-gray-200 animate-pulse">
          <td className="py-3 px-6 whitespace-nowrap">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="flex item-center justify-center space-x-4">
              <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
              <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
              <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBodyLoader;
