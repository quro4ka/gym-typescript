import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      className="rounded-md bg-secondary-400 px-10 py-2 hover:bg-primary-500 hover:text-white"
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
