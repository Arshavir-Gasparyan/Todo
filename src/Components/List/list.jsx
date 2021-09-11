import Button from "../Input/Button/Button";
import Input from "../Input/Input";

export default function List({
  value,
  edit,
  delate,
  onDelate,
  onEdit,
  onChange,
  readOnly,
  save,
  onSave,
}) {
  return (
    <div>
      <Input readOnly={readOnly} value={value} onChange={onChange} />
      <Button text={edit} handleClick={onEdit} />
      <Button text={save} handleClick={onSave} />
      <Button text={delate} handleClick={onDelate} />
    </div>
  );
}
