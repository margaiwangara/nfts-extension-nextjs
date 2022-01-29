import styled from 'styled-components';
import { Button, Input } from '../ui';
import Link from 'next/link';

type Props = {
  page: 'register' | 'verify' | 'create' | 'secure';
};

function AuthForm({ page }: Props) {
  return (
    <AuthFormWrapper>
      <section className="start">
        <NavPill>Email</NavPill>
        <NavPill active>Phone</NavPill>
      </section>
      <section className="center">
        <Input type="email" placeholder="johndoe@gmail.com" />
      </section>
      <section className="end">
        <Button disabled>Continue</Button>
        <p className="agreement">
          by clicking continue you must agree to near labs{' '}
          <Link href="#terms-and-conditions">
            <a>Terms & Conditions</a>
          </Link>{' '}
          and{' '}
          <Link href="#privacy-policy">
            <a>Privacy Policy</a>
          </Link>
        </p>
      </section>
      <section className="footer">
        <h5 className="footer-intro">Already have a NEAR account?</h5>
        <Button black>Log in with NEAR</Button>
      </section>
    </AuthFormWrapper>
  );
}

const AuthFormWrapper = styled.section`
  --grey: #828282;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .start {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .center {
    display: flex;
    flex-direction: column;
  }

  .end {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    .agreement {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.text[300]};
      text-align: center;
      line-height: 16.39px;

      a {
        color: ${({ theme }) => theme.colors.blue[200]};
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    border-top: solid 1px ${({ theme }) => theme.colors.text[600]};
    margin-top: 20px;

    .footer-intro {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text[200]};
      font-size: 14px;
    }
  }
`;

const NavPill = styled.button<{ active?: boolean }>`
  background-color: transparent;
  padding: 6px 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text[200]};
  cursor: pointer;
  font-size: 14px;
  border: solid 1px
    ${({ theme, active }) => (active ? theme.colors.text[500] : 'transparent')};
`;

export default AuthForm;
