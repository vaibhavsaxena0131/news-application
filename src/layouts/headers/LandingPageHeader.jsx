import { Fragment, memo, useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import HamburgerButton from "@/components/buttons/hamburgerButton";
import NavigatePage from "@/components/navigatePage";
import { useDispatch } from "react-redux";
import { fetchLocationCategory } from "@/globalStates/actions/cateGoryAction";

const LandingPageHeader = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // const { categoryName } = useParams();
  const [linkList, setLinkList] = useState([]);

  const fetchCategory = async (id) => {
    let category = await dispatch(fetchLocationCategory(id));
    if (category?.status === 200 && category?.data?.success) {
      return category?.data?.data;
    } else {
      return [];
    }
  };

  // Load categories when component mounts
  useEffect(() => {
    fetchCategory(0).then((result) => {
      setLinkList(result);
    });
    // eslint-disable-next-line
  }, []);

  const handleHideMobileTab = (event) => {
    const clickedElement = event.target;
    let targetedID = clickedElement.closest("[id]")?.getAttribute("id");
    let id = linkList.map((link) => link?.category_code);
    if (id.includes(targetedID) && open) {
      setOpen(false);
    }
  };

  return (
    <div className="bg-white h-full w-full">
      {/* Mobile menu */}
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed top-[7rem] inset-0 z-40 flex">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-700 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-700 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div
                  className="space-y-3 border-t border-gray-200 px-4 py-6 z-20"
                  onClick={handleHideMobileTab}
                >
                  {/* Mobile menu items */}
                  {linkList.map((link) => (
                    <div key={`mobile-nav-link-${link?.category_code}`}>
                      <NavigatePage
                        url={
                          link.category_code === "home"
                            ? "/"
                            : `news/${link?.category_code}`
                        }
                        key={link?.id}
                        id={link.category_code}
                        className="px-4 py-2 font-medium w-full block"
                      >
                        {link?.name}
                      </NavigatePage>
                    </div>
                  ))}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header className="fixed w-full bg-black text-white z-40 shadow-sm">
        <nav aria-label="Top" className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Mobile menu button */}

            {/* Logo */}
            <div className="flex items-center">
              <NavigatePage
                id="logo"
                url="/"
                className="flex justify-center items-center cursor-pointer"
              >
                <span className="text-2xl font-bold">News</span>
              </NavigatePage>
            </div>

            <HamburgerButton
              barclass="bg-white"
              fill="#ffffff"
              setToggelMenu={setOpen}
              isOpen={open}
            />

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-end space-x-4">
                <button className="hidden lg:flex gap-2 items-center px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-400">
                  <span className="animate-slow-ping w-3 h-3 bg-red-500 rounded-full"></span>
                  KAI-TSAYE TV
                </button>
                <button className="hidden lg:inline-block px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-400">
                  KAI-TSAYE RADIO
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-2 border-t border-gray-200 bg-gray-100 text-gray-700 border-b-2 border-gray-700">
          <nav aria-label="Top" className="container mx-auto px-4">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:py-2 gap-2">
              {linkList.map((link) => (
                <NavigatePage
                  url={
                    link.category_code === "home"
                      ? "/"
                      : `news/${link?.category_code}`
                  }
                  key={`nav-link-${link?.id}`}
                  className="px-4 py-2 font-medium"
                >
                  {link?.name}
                </NavigatePage>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default memo(LandingPageHeader);
