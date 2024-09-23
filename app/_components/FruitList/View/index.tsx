import List from "./List";
import Table from "./Table";

const View = () => null;

type TCompoundView = typeof View & {
  List: typeof List;
  Table: typeof Table;
};

Object.assign(View, { List, Table });
export default View as TCompoundView;
