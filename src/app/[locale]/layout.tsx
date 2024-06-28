import "@/styles/index.scss";
import { DM_Sans, Nunito_Sans, Pacifico } from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const body = DM_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--base-font',
});

const heading = Nunito_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--heading-font',
});

const script = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--script-font',
});

export const metadata = {
  title: "Somi Haiti",
  description : "Strengthening communities through health and support services.",
  metadataBase : new URL("https://somihaiti.org"),
}

export default async  function RootLayout({
  children,
  params:{locale}
}: {
  children: React.ReactNode;
  params : {locale : string};
}) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={` ${body.variable} ${heading.variable} ${script.variable} `}>
      <NextIntlClientProvider messages={messages}>
        <div className="wrapper">
          {children}
        </div>
      </NextIntlClientProvider>
      </body>
    </html>
  )
}
