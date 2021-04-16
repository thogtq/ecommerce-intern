import { useState } from "react";

export default function SomeCompo(props) {
  const Children = props.children;
  const [test, setTest] = useState("Test output");
  return (
    <div>
      <Children test={test} />
    </div>
  );
}
