import React, { PropsWithChildren } from "react";

const Badge: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-slate-50 border text-slate-600 border-solid border-gray-200 leading-none rounded-full text-xs flex items-center justify-center px-2 py-1">
      {children}
    </div>
  );
};

export default Badge;
