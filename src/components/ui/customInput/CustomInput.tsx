import { TextInput } from "flowbite-react";
import { ChangeEventHandler } from "react";

type IProps = {
  onChange: ChangeEventHandler;
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  defaultValue?: string | number;
};

export function CustomInput({
  onChange,
  name,
  className,
  type,
  placeholder,
  defaultValue,
  id,
}: IProps) {
  return (
    <TextInput
      onChange={onChange}
      className={className}
      name={name}
      id={id}
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      required
    />
  );
}
