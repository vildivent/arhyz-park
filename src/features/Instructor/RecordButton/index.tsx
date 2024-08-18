"use client";

import Container from "~/shared/ui/Container";
import ModalDialog from "~/shared/ui/Modal/Modal";
import { Button, TextLink } from "~/shared/ui/buttons";
import { CloseIcon } from "~/shared/ui/icons";
import { cn } from "~/shared/utils/cn";

export default function RecordButton({
  href,
  children,
  triggerType = "common",
  className,
}: {
  href: string;
  children: React.ReactNode;
  triggerType?: "big" | "common";
  className?: string;
}) {
  return (
    <ModalDialog
      isDismissable
      trigger={
        <Button
          className={cn(
            triggerType === "big" && "mx-auto 2xl:px-8 2xl:py-4 2xl:text-xl",
            className,
          )}
        >
          {children}
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
          <p className="text-center text-lg">
            Записываясь, вы соглашаетесь с{" "}
            <TextLink
              variant="dark"
              href="/Договор-оферта_АрхызПарк.pdf"
              target="_blank"
            >
              договором-офертой
            </TextLink>
          </p>
          <div className="grid grid-cols-2 gap-5">
            <Button className="w-full" variant="primary" onPress={close}>
              Отмена
            </Button>
            <Button
              className="w-full"
              variant="accent"
              onPress={() => {
                window.open(href);
                close();
              }}
            >
              Записаться
            </Button>
            {/* <Link href={href} target="_blank" variant="accent" onPress={close}>
              Записаться
            </Link> */}
          </div>
        </Container>
      )}
    </ModalDialog>
  );
}
