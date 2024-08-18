"use client";

import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";
import { YMInitializer } from "react-yandex-metrika";

export function ClientProviders({
  children,
  ymid,
}: {
  children: React.ReactNode;
  ymid: number[];
}) {
  const router = useRouter();

  return (
    <RouterProvider navigate={(path) => router.push(path)}>
      {children}
      <YMInitializer accounts={ymid} options={{ webvisor: true }} />
    </RouterProvider>
  );
}
