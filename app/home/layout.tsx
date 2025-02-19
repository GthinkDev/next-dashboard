import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import SideNav from "../ui/dashboard/sidenav";

interface IProps {
  children?: ReactNode;
}

const DashboardLayout: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default memo(DashboardLayout);
