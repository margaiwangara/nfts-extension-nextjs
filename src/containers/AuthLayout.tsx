import { TopBar } from '@components/shared';

type Props = {
  children: React.ReactNode;
  title?: string;
};

function AuthLayout({ children, title }: Props) {
  return (
    <section>
      <TopBar title={title} />
      <section>{children}</section>
    </section>
  );
}

export default AuthLayout;
