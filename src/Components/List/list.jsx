import Button from "../Input/Button/Button";
import Input from "../Input/Input";

export default function List({ value, edit, delate }) {
  return (
    <div>
      <Input value={value} />
      <Button text={edit} />
      <Button text={delate} />
    </div>
  );
}
