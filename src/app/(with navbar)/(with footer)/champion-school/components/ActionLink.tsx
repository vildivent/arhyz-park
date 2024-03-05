"use client";

import { Link } from "~/shared/ui/buttons";

export default function ActionLink() {
  return (
    <Link
      className="mx-auto 2xl:px-8 2xl:py-4 2xl:text-xl"
      variant="accent"
      href="tel:+79525656272"
    >
      Записаться
    </Link>
  );
}
