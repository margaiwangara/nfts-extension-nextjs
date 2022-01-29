import { Button, AuthBody, IntroText } from '@components/ui';
import AuthLayout from '@containers/AuthLayout';
import styled from 'styled-components';
import VerificationForm from './components/VerificationForm';

function Verification() {
  return (
    <AuthLayout title="Verification">
      <AuthBody>
        <section className="start">
          <IntroText>
            We have sent a 6-digit verification code to the email address{' '}
            <span>johndoe@gmail.com</span>
          </IntroText>
        </section>
        <VerificationForm />
        <div className="line" />
        <Footer>
          <h4>Didn&apos;t receive your code?</h4>
          <Button>Send to different email address</Button>
          <Button style={{ marginTop: '-12px' }}>Resend your code</Button>
        </Footer>
      </AuthBody>
    </AuthLayout>
  );
}

const Footer = styled.section`
  font-size: 14px;
  line-height: 19.12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text[200]};
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  h4 {
    font-weight: 500;
  }
`;

export default Verification;
