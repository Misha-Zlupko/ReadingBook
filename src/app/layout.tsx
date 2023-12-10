import { HeaderComponent } from "@/components/HeaderComponent";

import type { Metadata } from "next";

import "../../styles/main.scss";
import { MainButtonComponent } from "@/components/MainButtonComponent";
import { FormRegistrationComponent } from "@/components/FormRegistrationComponent";

export const metadata: Metadata = {
  title: "Reading",
  description: "Reading Book",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
