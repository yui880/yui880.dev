const BorderBox = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return <div className={`flex w-full flex-col rounded-md border bg-white px-6 py-5 ${className}`}>{children}</div>;
};

export default BorderBox;
