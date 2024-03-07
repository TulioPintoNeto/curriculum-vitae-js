import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const Title = ({ children }: Props) => {
  return <h5 className="py-2 w-100">{children}</h5>;
};
