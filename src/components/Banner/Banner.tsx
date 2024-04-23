type BannerProps = React.ComponentProps<"div">;

export const Banner = ({ children, ...props }: BannerProps) => {
  return (
    <div className="bg-cover bg-center flex h-659 w-full" {...props}>
      <div className="flex flex-col break-words md:ml-44 ml-10 translate-y-1/4 absolute z-1 md:w-456 w-250">
        {children}
      </div>
    </div>
  );
};
