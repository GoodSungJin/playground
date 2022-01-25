import { ReactNode, useMemo } from "react";
import { CartHistory, HistoryOptions, SelectedItem } from "../recoil/type";
import { RecoilState, useRecoilState } from "recoil";

export default function useCartNavigate(
  cartHistoryState: RecoilState<CartHistory[]>,
  cartRoutes?: CartRoute[]
) {
  const [history, setHistory] = useRecoilState(cartHistoryState);

  const navigate = (name: string, options?: HistoryOptions) => {
    console.log(options, ")))");
    setHistory((prev) => [
      ...prev,
      {
        name,
        options,
      },
    ]);
  };

  const back = () => {
    setHistory((prev) => prev.filter((item, idx) => prev.length - 1 !== idx));
  };

  const route = useMemo(() => {
    if (!cartRoutes) return null;

    return history.length
      ? getRouteElementByName(cartRoutes, history[history.length - 1].name)
      : getDefaultRouteElement(cartRoutes);
  }, [cartRoutes, history]);

  const reset = () => {
    setHistory([]);
  };

  const getSelectedItems = () => {
    console.log(history, "DS<SD<");
    console.log(
      history.reduce(
        (accu, curr) =>
          curr.options?.state.selectedItem
            ? [...accu, curr.options.state.selectedItem]
            : accu,
        [] as SelectedItem[]
      ),
      "2222222"
    );
    return history.reduce(
      (accu, curr) =>
        curr.options?.state.selectedItem
          ? [...accu, curr.options.state.selectedItem]
          : accu,
      [] as SelectedItem[]
    );
  };
  return {
    back,
    route,
    reset,
    navigate,
    getSelectedItems,
    currHistory: history[history.length - 1],
  };
}

interface CartRoute {
  name: string;
  element: ReactNode;
  isDefault?: boolean;
}

const getRouteElementByName = (routes: CartRoute[], name: string) => {
  const route = routes.find((item) => item.name === name);

  return route ? route.element : null;
};

const getDefaultRouteElement = (routes: CartRoute[]) => {
  const route = routes.find((item) => item.isDefault);

  return route ? route.element : null;
};
