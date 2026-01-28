const RoyalDivider = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
      <div className="w-2 h-2 rotate-45 bg-primary/70" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
    </div>
  );
};

export default RoyalDivider;
