import '../globals.css';

// FROM THE DOCSThe <Layout /> component receives a children prop. This child can either be
// a page or another layout. In your case, the pages inside /dashboard will automatically be
// nested inside a <Layout />
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
