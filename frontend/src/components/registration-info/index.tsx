
type RegProps = {
    reg: string
};

export function RegInfo({reg}: RegProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-manrope text-xs font-normal ">Matrícula</p>
      <h6 className="font-extrabold">{reg}</h6>
    </div>
  );
}