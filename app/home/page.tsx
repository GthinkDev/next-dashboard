import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Dashboard: FC<IProps> = (props) => {
  const {} = props;
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default memo(Dashboard);
