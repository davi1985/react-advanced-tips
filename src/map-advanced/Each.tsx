import { Children, ReactNode } from "react";

type ItemType<T> = T;

type RenderFunction<T> = (item: ItemType<T>) => ReactNode;

type EachProps<T> = {
  render: RenderFunction<T>;
  of: ItemType<T>[];
};

export const Each = <T,>({ render, of }: EachProps<T>) =>
  Children.toArray(of.map((item) => render(item)));
