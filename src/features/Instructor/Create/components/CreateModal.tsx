"use client";

import Container from "~/shared/ui/Container";
import ModalDialog from "~/shared/ui/Modal/Modal";
import { Button } from "~/shared/ui/buttons";
import { CloseIcon } from "~/shared/ui/icons";
import InstructorForm from "./InstructorForm";

export default function CreateModal() {
  return (
    <ModalDialog
      trigger={<Button variant="primary">Добавить инструктора</Button>}
    >
      {({ close: closeCreation }) => (
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
                <h1 className="text-center text-2xl">
                  Отменить добавление инструктора?
                </h1>
                <span className="text-center">
                  Все введённые данные будут сброшены
                </span>
                <div className="grid grid-cols-2 gap-5">
                  <Button className="w-full" variant="primary" onPress={close}>
                    Нет
                  </Button>
                  <Button
                    variant="warning"
                    onPress={() => {
                      if (close) close();
                      if (closeCreation) closeCreation();
                    }}
                  >
                    Отменить
                  </Button>
                </div>
              </Container>
            )}
          </ModalDialog>

          <h1 className="text-center text-3xl">Добавить инструктора</h1>
          <InstructorForm close={closeCreation} />
        </Container>
      )}
    </ModalDialog>
  );
}
