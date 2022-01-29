import { Button, Input, AuthBody, IntroText } from '@components/ui';
import AuthLayout from '@containers/AuthLayout';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Link from 'next/link';

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
        <Formik initialValues={{}} onSubmit={() => {}}>
          {() => (
            <Form className="form">
              <FormHeading>Enter verification code</FormHeading>
              <FormGroup>
                <CustomInput type="text" />
                <CustomInput type="text" />
                <CustomInput type="text" />
                <CustomInput type="text" />
                <CustomInput type="text" />
                <CustomInput type="text" />
              </FormGroup>
              <Button disabled>Continue</Button>
            </Form>
          )}
        </Formik>
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

const FormGroup = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 40.1px);
  gap: 10.82px;
`;

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

const FormHeading = styled.h4`
  font-size: 14px;
  line-height: 19px;
  color: #808080;
  font-weight: 500;
`;

const CustomInput = styled(Input)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
`;

export default Verification;
