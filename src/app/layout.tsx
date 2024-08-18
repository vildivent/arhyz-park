import { type Metadata } from "next";
import { cookies } from "next/headers";
import { env } from "~/env";
import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { montserratAlternates, russoOne } from "./fonts";
import { ClientProviders } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXTAUTH_URL),
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/logo.jpg" },
    { rel: "icon", url: "/favicon.svg" },
  ],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`relative flex min-h-svh flex-col items-center overflow-x-hidden bg-white font-p text-white ${montserratAlternates.variable} ${russoOne.variable}`}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ClientProviders ymid={[+env.YANDEX_METRIKA_ID]}>
            {children}
          </ClientProviders>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
