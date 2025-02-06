import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { deleteExistingBlog } from "@/globalStates/actions/blogActions";

const ConfirmDeleteBlog = ({ onClose = () => {} }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.popup?.details);

  const handleDeleteBlog = async (e) => {
    e.preventDefault();
    await dispatch(deleteExistingBlog(details?.id));
    onClose();
  };

  return (
    <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
      <div className="flex justify-center">
        <TrashIcon className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <p className="mb-4 text-gray-500 dark:text-gray-300">
        Are you sure you want to delete this blog?
      </p>
      <form
        onSubmit={handleDeleteBlog}
        className="flex justify-center items-center space-x-4"
      >
        <button
          data-modal-toggle="deleteModal"
          type="button"
          onClick={onClose}
          className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          No, cancel
        </button>
        <button
          type="submit"
          className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          {"Yes, I'm sure"}
        </button>
      </form>
    </div>
  );
};

export default ConfirmDeleteBlog;
