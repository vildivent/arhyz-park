"use client";

import Container from "~/shared/ui/Container";
import ModalDialog from "~/shared/ui/Modal/Modal";
import { Button } from "~/shared/ui/buttons";
import { CloseIcon, EditIcon } from "~/shared/ui/icons";
import { type Instructor } from "~/trpc/shared";
import InstructorForm from "./InstructorForm";

export default function EditModal({ instructor }: { instructor: Instructor }) {
  return (
    <ModalDialog
      trigger={
        <Button
          variant="primary"
          className="ml-auto h-10 w-10 rounded-full p-2"
        >
          <EditIcon width={24} height={24} />
        </Button>
      }
    >
      {({ close: closeEdit }) => (
        <Container>
          <ModalDialog
            isDismissable
            trigger={
              <Button
                variant="primary"
                className="ml-auto h-10 w-10 rounded-full p-2"
              >
                <CloseIcon />
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
                <h1 className="text-center text-3xl">
                  Отменить редактирование?
                </h1>
                <span>Все изменения будут сброшены</span>
                <div className="grid grid-cols-2 gap-5">
                  <Button className="w-full" variant="primary" onPress={close}>
                    Нет
                  </Button>
                  <Button
                    variant="warning"
                    onPress={() => {
                      if (close) close();
                      if (closeEdit) closeEdit();
                    }}
                  >
                    Отменить
                  </Button>
                </div>
              </Container>
            )}
          </ModalDialog>

          <h1 className="text-center text-3xl">Редактирование инструктора</h1>
          <InstructorForm close={closeEdit} instructor={instructor} />
        </Container>
      )}
    </ModalDialog>
  );
}
