// * Base
import { Formik } from 'formik';

// * Components
import Field from '../Field/Field';
import Button from '../Button/Button';

// * Styles
import styles from './RegistrationForm.module.css';

const INITIAL_VALUES = { email: '', username: '', password: '', phone: '+380' };

const EMAIL_REG_EXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const USERNAME_MIN_LENGTH = 3;

const PASSWORD_MIN_LENGHT = 8;

const RegistrationForm = () => {
  const validators = ({ email, username, password }) => {
    const errors = {};

    if (!email) {
      errors.email = 'Емайл є обовязковим';
    } else if (!EMAIL_REG_EXP.test(email)) {
      errors.email = 'Емейл не валідний';
    }

    if (!username) {
      errors.username = 'Імя є обовязковим';
    } else if (username.length < USERNAME_MIN_LENGTH)
      errors.username = `Ім'я повинно бути не менше ${USERNAME_MIN_LENGTH} символів`;

    if (!password) {
      errors.password = 'Пароль є обовязковим';
    } else if (password.length < PASSWORD_MIN_LENGHT) {
      errors.password = `Пароль має бути не меньше ${PASSWORD_MIN_LENGHT} символів`;
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      // setErrors({email: 'Такий емейл вже існує'})
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Formik
        preventDefault
        initialValues={INITIAL_VALUES}
        validate={validators}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.title}>Form</h3>
            <Field
              title="Email*"
              type="email"
              name="email"
              value={values.email}
              placeholder="Enter the email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email && errors.email}
            />
            <Field
              title="Username*"
              name="username"
              value={values.username}
              placeholder="Enter the username"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username && touched.username && errors.username}
            />
            <Field
              type="password"
              title="Password*"
              name="password"
              value={values.password}
              placeholder="Enter the password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password && errors.password}
            />
            <Field
              title="Phone"
              name="phone"
              value={values.phone}
              placeholder="Enter the phone"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone && touched.phone && errors.phone}
            />
            <Button type="submit" text="Registration" disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
