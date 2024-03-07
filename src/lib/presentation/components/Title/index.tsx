import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const Title = ({ children }: Props) => {
  return <h5 className="w-100 border-bottom border-secondary">{children}</h5>;
};
