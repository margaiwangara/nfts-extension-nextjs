import AuthLayout from '@containers/AuthLayout';
import styled from 'styled-components';
import { Button, Input, AuthBody } from '@components/ui';
import Link from 'next/link';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import LoginWithNear from '@components/shared/LoginWithNear';

const RegisterWithEmailSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
});

const RegisterWithPhoneSchema = Yup.object().shape({
  phone: Yup.string().required('Phone number is required'),
});

function Register() {
  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email');
  return (
    <AuthLayout>
      <AuthBody>
        <section className="start">
          <NavPill
            active={activeTab === 'email'}
            onClick={() => setActiveTab('email')}
          >
            Email
          </NavPill>
          <NavPill
            active={activeTab === 'phone'}
            onClick={() => setActiveTab('phone')}
          >
            Phone
          </NavPill>
        </section>
        <Formik
          initialValues={{
            email: '',
            phone: '',
          }}
          validationSchema={
            activeTab === 'email'
              ? RegisterWithEmailSchema
              : RegisterWithPhoneSchema
          }
          onSubmit={() => {}}
        >
          {({ errors, values, setValues }) => (
            <Form className="form">
              {activeTab === 'email' ? (
                <Input
                  type="email"
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  placeholder="Email Address"
                />
              ) : (
                <Input
                  type="tel"
                  value={values.phone}
                  onChange={(e) =>
                    setValues({ ...values, phone: e.target.value })
                  }
                  placeholder="Ex (337) 378 8383"
                />
              )}
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
            </Form>
          )}
        </Formik>
        <div className="line" />
        <LoginWithNear />
      </AuthBody>
    </AuthLayout>
  );
}

const NavPill = styled.button<{ active?: boolean }>`
  background-color: transparent;
  border: solid 1px
    ${({ active, theme }) => (active ? theme.colors.text[500] : 'transparent')};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme, active }) =>
    active ? theme.colors.text[200] : theme.colors.text[300]};
  border-radius: 10px;
  padding: 6px 12px;
  cursor: pointer;
`;

export default Register;
