"use client";

import { useRouter } from "next/navigation";
import Container from "~/shared/ui/Container";
import ModalDialog from "~/shared/ui/Modal/Modal";
import Spinner from "~/shared/ui/Spinner";
import { Button } from "~/shared/ui/buttons";
import { CloseIcon, DeleteIcon } from "~/shared/ui/icons";
import { api } from "~/trpc/react";

export default function DeleteModal({ id }: { id: string }) {
  const router = useRouter();
  const { mutate, isLoading } = api.review.delete.useMutation();
  return (
    <ModalDialog
      isDismissable
      trigger={
        <Button
          variant="warning"
          className="ml-auto h-10 w-10 rounded-full p-2"
        >
          <DeleteIcon width={24} height={24} />
        </Button>
      }
    >
      {({ close }) => (
        <Container>
          <Button
            variant="primary"
            className="ml-auto h-10 w-10 rounded-full p-2"
            onPress={close}
          >
            <CloseIcon />
          </Button>
          <h1 className="text-center text-3xl">Удалить отзыв?</h1>
          <div className="grid grid-cols-2 gap-5">
            <Button className="w-full" variant="primary" onPress={close}>
              Нет
            </Button>
            <Button
              variant="warning"
              isDisabled={isLoading}
              onPress={() => {
                mutate(
                  { id },
                  {
                    onSuccess() {
                      close?.();
                      router.refresh();
                    },
                  },
                );
              }}
            >
              Удалить
              {isLoading && <Spinner variant="light" />}
            </Button>
          </div>
        </Container>
      )}
    </ModalDialog>
  );
}
