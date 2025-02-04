import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="laptop:max-w-[850px] mx-auto flex max-w-screen-md flex-col">{children}</div>;
};

export default Container;
