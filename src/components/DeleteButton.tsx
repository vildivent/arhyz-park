import { Button, type ButtonProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { DeleteIcon } from "~/shared/ui/icons";

export default function DeleteButton({
  className,
  ...props
}: Omit<ButtonProps, "className"> & {
  className?: string;
}) {
  return (
    <Button
      className={({ isFocusVisible }) =>
        twMerge(
          "flex flex-col items-center rounded-md text-sm outline-none",
          isFocusVisible && "outline-2 outline-white",
          className,
        )
      }
      {...props}
    >
      <DeleteIcon />
      <span>Удалить</span>
    </Button>
  );
}
