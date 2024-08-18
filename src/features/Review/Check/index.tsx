"use client";

import { useRouter } from "next/navigation";
import { Button } from "~/shared/ui/buttons";
import { CheckIcon } from "~/shared/ui/icons";
import { api } from "~/trpc/react";

export default function ReviewCheck({
  id,
  checked,
}: {
  id: string;
  checked: boolean;
}) {
  const { mutate, isLoading } = api.review.check.useMutation();
  const router = useRouter();
  return (
    <Button
      variant={checked ? "primary" : "accent"}
      className="ml-auto h-10 w-10 rounded-full p-2"
      isDisabled={isLoading}
      onPress={() =>
        mutate(
          { id, checked: !checked },
          {
            onSuccess() {
              router.refresh();
            },
          },
        )
      }
    >
      {checked ? (
        <div className="text-2xl">!</div>
      ) : (
        <CheckIcon width={20} height={20} />
      )}
    </Button>
  );
}
