
import Dot from "./Dot";
import { render } from "@testing-library/react";
const current=0
const mock = [{id:1},{id:2}]
test("render Dot", () => {
  render(<Dot Info={{ current, mock }} />);
});
