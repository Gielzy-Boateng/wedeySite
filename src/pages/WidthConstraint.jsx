import { cn } from "../utils/cn";

const WidthConstraint = ({ className, children }) => {
  return (
    <div className={cn("max-w-[1230px]  overflow-x-hidden ", className)}>
      {children}
    </div>
  );
};

export default WidthConstraint;
