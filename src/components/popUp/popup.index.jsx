import { Fragment, Suspense } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { popupClose } from "@/globalStates/actions/PopupAction";
import * as Pages from "./popupComponents";
import AlertPopup from "../alert/alertPopup";

function PopupComponent() {
  const {
    open,
    type,
    crossIcon,
    className = "",
    details,
  } = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  const ClosePopup = () => {
    dispatch(popupClose());
  };

  const renderComponebt = () => {
    switch (type) {
      case "CONFIRM_DELETE_BLOG_POPUP":
        return <Pages.ConfirmDeleteBlog onClose={ClosePopup} />;
      case "ALERT_POPUP":
        return (
          <AlertPopup
            message={details?.message}
            type={details?.type}
            onClose={ClosePopup}
          />
        );
      default:
        break;
    }
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={ClosePopup}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" /> */}
          <div className="fixed inset-0 bg-black/30" />
        </TransitionChild>

        <div className="fixed inset-0 z-[50] w-screen overflow-y-auto m-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                className={`transform overflow-hidden rounded-lg min-w-4 min-h-16 transition-all bg-white text-left ${className}`}
              >
                <XMarkIcon
                  className={`${crossIcon ? "" : "hidden"} absolute right-4 top-3.5 hover:border hover:text-zinc-900 text-zinc-400 hover:border-zinc-300 hover:rounded-full p-2 h-10 w-10 cursor-pointer z-10`}
                  aria-hidden="true"
                  onClick={ClosePopup}
                />
                <Suspense>{renderComponebt()}</Suspense>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default PopupComponent;
