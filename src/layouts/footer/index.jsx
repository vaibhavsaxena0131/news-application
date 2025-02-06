import { memo } from "react";
import { Link } from "react-router-dom";
import NavigatePage from "@/components/navigatePage";
import paths from "@/routes/paths";
import { useSelector } from "react-redux";
let defaultProps = {
  companyName: "news-application",
  socialLinks: [
    {
      name: "Facebook",
      link: "https://facebook.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      link: "https://instagram.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"
          ></path>
        </svg>
      ),
    },
    {
      name: "YouTube",
      link: "https://youtube.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
          ></path>
          <path
            fill="currentColor"
            d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
          ></path>
          <path
            fill="currentColor"
            d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
          ></path>
        </svg>
      ),
    },
  ],
  footerLinks: [
    {
      title: "Samfur",
      links: [
        { label: "Gida", href: paths?.HOME, isExternal: false },
        { label: "Shiga", href: paths?.LOGIN, isExternal: false },
      ],
    },
    {
      title: "Shari’a",
      links: [
        { label: "Manufar Sirri", href: paths?.PRIVACY, isExternal: false },
        { label: "Sharuddan Amfani", href: paths?.TERMS, isExternal: false },
      ],
    },
  ],
  copyright: "Haƙƙin mallaka © Kamfaninku | An tanadi duk haƙƙoƙi.",
};

const Footer = ({
  companyName = defaultProps?.companyName,
  socialLinks = defaultProps?.socialLinks,
  footerLinks = defaultProps?.footerLinks,
  copyright = defaultProps?.copyright,
}) => {
  const { role } = useSelector((state) => state.auth);

  return (
    <footer className="bg-black text-gray-400">
      {/* Footer content */}
      <div id="footer-content" className="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
          <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
            {/* About Section */}
            <div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
              <div className="flex items-center mb-2">
                <span className="text-3xl leading-normal mb-2 font-bold text-gray-100 mt-2">
                  {companyName}
                </span>
              </div>
              <p>
                We build great newspapers, magazines, and news portals using the
                latest technologies and modern designs.
              </p>
              <ul className="space-x-3 flex gap-2 text-gray-100 mt-6 mb-6 lg:mb-0">
                {socialLinks.map((social, index) => (
                  <li key={index} className="inline">
                    <a
                      target="_blank"
                      className="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href={social.link}
                      aria-label={social.name}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Navigation */}
            <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
              <div className="flex flex-wrap flex-row">
                {footerLinks.map((section, idx) => {
                  let sectionLinks = section.links.filter((link) =>
                    role ? link.label !== "Shiga" : link
                  );

                  return (
                    <div
                      key={idx}
                      className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0"
                    >
                      <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
                        {section.title}
                      </h4>
                      <ul>
                        {sectionLinks.map((link, linkIdx) => (
                          <li key={linkIdx} className="py-1 hover:text-white">
                            {link.isExternal ? (
                              <NavigatePage
                                url={link.href}
                                title={link.label}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.label}
                              </NavigatePage>
                            ) : (
                              <Link to={link.href} title={link.label}>
                                {link.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start footer copyright */}
      <div className="footer-dark">
        <div className="container py-4 border-t border-gray-200 border-opacity-10">
          <div className="row">
            <div className="col-12 col-md text-center">
              <p className="d-block my-3">{copyright}</p>
            </div>
          </div>
        </div>
      </div>
      {/* End footer copyright */}
    </footer>
  );
};

export default memo(Footer);
