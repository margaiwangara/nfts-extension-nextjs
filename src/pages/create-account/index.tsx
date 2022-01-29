import AuthLayout from '@containers/AuthLayout';
import { Button, Input, AuthBody, IntroText, Label } from '@components/ui';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import LoginWithNear from '@components/shared/LoginWithNear';

function CreateAccount() {
  return (
    <AuthLayout title="Create NEAR Account">
      <CustomAuthBody>
        <section className="start">
          <CustomIntroText>
            Enter an Account ID to use with your NEAR account. Your Account ID
            will be used for all NEAR operations, including sending and
            receiving assets.
          </CustomIntroText>
        </section>
        <Formik initialValues={{}} onSubmit={() => {}}>
          {({}) => (
            <Form className="form">
              <FormGroup>
                <Label htmlFor="fullName">Full Name</Label>
                <Input type="text" placeholder="Ex. John Doe" id="fullName" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="accountId">Account ID</Label>
                <section className="input-group">
                  <CustomInput type="text" placeholder="yourname" />
                  <button className="readonly-btn">.near</button>
                </section>
              </FormGroup>
              <Button style={{ alignSelf: 'center' }} disabled>
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
        <div className="line" />
        <LoginWithNear />
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

  .input-group {
    display: grid;
    grid-template-columns: 1fr 81px;

    .readonly-btn {
      border-radius: 0 10px 10px 0;
      background-color: transparent;
      border: solid 1px ${({ theme }) => theme.colors.text[500]};
      padding: 11.5px 20px;
      font-weight: 500;
      font-size: 16px;
      color: #000000;
      text-align: center;
    }
  }
`;

const CustomInput = styled(Input)`
  border-radius: 10px 0 0 10px;
  border-right-color: transparent;
`;
const CustomIntroText = styled(IntroText)`
  color: #808080;
`;

export default CreateAccount;
