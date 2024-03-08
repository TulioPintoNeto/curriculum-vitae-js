import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const Title = ({ children }: Props) => {
  return <h5 className="w-100 border-bottom border-secondary text-start pb-2 mt-3 mb-1">{children}</h5>;
};
