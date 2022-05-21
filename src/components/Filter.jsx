import { useStateContext } from "../state";
import { RadioGroup } from "@headlessui/react";

const Option = ({ checked, valueLabel }) => (
  <div className={`value${checked ? " current" : ""}`}>{valueLabel}</div>
);

function Filter() {
  let [top, setTop] = useStateContext();
  return (
    <div id="top">
      <div id="filter">
        <RadioGroup value={top} onChange={setTop}>
          <RadioGroup.Option value="5">
            {({ checked }) => <Option checked={checked} valueLabel="05" />}
          </RadioGroup.Option>
          <RadioGroup.Option value="10">
            {({ checked }) => <Option checked={checked} valueLabel="10" />}
          </RadioGroup.Option>
          <RadioGroup.Option value="20">
            {({ checked }) => <Option checked={checked} valueLabel="20" />}
          </RadioGroup.Option>
          <RadioGroup.Option value="30">
            {({ checked }) => <Option checked={checked} valueLabel="30" />}
          </RadioGroup.Option>
        </RadioGroup>
      </div>
    </div>
  );
}

export default Filter;
