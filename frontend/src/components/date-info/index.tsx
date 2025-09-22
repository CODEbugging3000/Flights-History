type DateProps = {
  date: string;
};

export function DateInfo({ date }: DateProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-manrope text-xs font-normal">Data</p>
      <h6 className="font-manrope text-base font-semibold text-center">
        {date.replaceAll("-", "/")}
      </h6>
    </div>
  );
}
