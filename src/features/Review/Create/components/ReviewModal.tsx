"use client";

import Container from "~/shared/ui/Container";
import ModalDialog from "~/shared/ui/Modal/Modal";
import { Button } from "~/shared/ui/buttons";
import ReviewForm from "./ReviewForm";
import { useSearchParams } from "next/navigation";
import { CloseIcon } from "~/shared/ui/icons";

export default function ReviewModal() {
  const params = useSearchParams();
  const create = params.get("create");
  return (
    <ModalDialog
      trigger={<Button>Оставить отзыв</Button>}
      isDismissable
      defaultOpen={!!create}
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
          <h1 className="text-center text-3xl">Оставить отзыв</h1>
          <ReviewForm />
        </Container>
      )}
    </ModalDialog>
  );
}
