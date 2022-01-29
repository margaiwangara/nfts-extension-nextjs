import AuthLayout from '@containers/AuthLayout';
import { Button, AuthBody, IntroText, Label, Input } from '@components/ui';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import Link from 'next/link';

function SecureAccount() {
  return (
    <AuthLayout title="Secure your account">
      <CustomAuthBody>
        <section className="start">
          <IntroText style={{ color: '#808080' }}>
            Keep your apps safe from others with access to your computer
          </IntroText>
        </section>
        <Formik initialValues={{}} onSubmit={() => {}}>
          {({}) => (
            <Form className="form">
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input type="password" id="confirmPassword" />
              </FormGroup>

              <Button disabled style={{ alignSelf: 'center' }}>
                Continue
              </Button>
              <p className="agreement">
                By creating a NEAR account, you agree to the NEAR Wallet{' '}
                <Link href="#terms-of-service">
                  <a>Terms of Service</a>
                </Link>{' '}
                and{' '}
                <Link href="#privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </CustomAuthBody>
    </AuthLayout>
  );
}

const CustomAuthBody = styled(AuthBody)`
  .form {
    align-items: flex-start;
  }
`;

const FormGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export default SecureAccount;
