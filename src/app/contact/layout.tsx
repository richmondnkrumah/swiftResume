import { ResumeStoreProvider } from "@/providers/ResumeStoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ResumeStoreProvider>{children}</ResumeStoreProvider>
    </>
  );
}
