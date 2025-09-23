import clsx from "clsx";

type PagProps = {
  atual: number;
  limit: number;
  total: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ atual, limit, total, onPageChange }: PagProps) {
  return (
    <div className="gap-3">
      <button
        style={{ backgroundColor: "var(--secondary-color)" }}
        className="p-2 align-middle items-center rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
        disabled={atual === 1}
        onClick={() => onPageChange(atual - 1)}
      >
        {" "}
        Anterior{" "}
      </button>
      <span>
        {" "}
        Página {atual} de {total}{" "}
      </span>
      <button
        style={{ backgroundColor: "var(--secondary-color)" }}
        className={"p-2 hover:scale-105 align-middle items-center rounded-xl cursor-pointer transition-all duration-300 ease-in-out"}
        disabled={atual === total}
        onClick={() => onPageChange(atual + 1)}
      >
        Próxima
      </button>
    </div>
  );
}
