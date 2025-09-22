type TextProps = {
    plane: string,
    airline: string
};

export function PlaneAirlineInfo({plane, airline}: TextProps) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="font-extrabold">{plane}</h1>
      <p className=" font-manrope font-normal">{airline}</p>
    </div>
  );
}
