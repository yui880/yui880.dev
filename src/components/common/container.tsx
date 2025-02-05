import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto flex max-w-[720px] flex-col laptop:max-w-[850px]">{children}</div>;
};

export default Container;
