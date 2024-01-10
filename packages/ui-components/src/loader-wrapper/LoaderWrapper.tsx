import { FCWithChildren } from "../common/types";

const LoaderWrapper: FCWithChildren = ({ children }) => (
  <div
    className="animate-pulse w-full"
    onClick={(event) => event.stopPropagation()}
  >
    {children}
    <span className="sr-only">Loading...</span>
  </div>
);

export default LoaderWrapper;
