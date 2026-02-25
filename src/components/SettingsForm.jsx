import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SettingsContext } from '../context/SettingsContext';
import Button from "../components/Button";

const Schema = Yup.object().shape({
  difficulty: Yup.string().oneOf(['easy','medium','hard']).required('Required'),
  elements: Yup.number().min(4).max(12).required('Required'),
  speed: Yup.number().min(1).max(5).required('Required')
});

export default function SettingsForm({ onClose }) {
  const { settings, setSettings } = useContext(SettingsContext);

  return (
    <div className="settings-card" style={{ padding: 16, maxWidth: 320 }}>
      <h3 style={{ marginBottom: 16 }}>Налаштування гри</h3>

      <Formik
        initialValues={settings}
        validationSchema={Schema}
        onSubmit={(values) => {
          setSettings(values);
          onClose?.();
        }}
      >
        {({ values }) => (
          <Form style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Difficulty */}
            <div>
              <label style={{ display: "block", marginBottom: 4 }}>Рівень складності</label>
              <Field as="select" name="difficulty" style={{ width: "100%" }}>
                <option value="easy">Легкий</option>
                <option value="medium">Середній</option>
                <option value="hard">Важкий</option>
              </Field>
              <ErrorMessage name="difficulty" component="div" className="err" />
            </div>

            {/* Elements */}
            <div>
              <label style={{ display: "block", marginBottom: 4 }}>Кількість елементів</label>
              <Field
                type="number"
                name="elements"
                min="4"
                max="12"
                style={{ width: "100%" }}
              />
              <ErrorMessage name="elements" component="div" className="err" />
            </div>

            {/* Speed */}
            <div>
              <label style={{ display: "block", marginBottom: 4 }}>Швидкість (1–5)</label>
              <Field type="range" name="speed" min="1" max="5" style={{ width: "100%" }} />
              <div style={{ marginTop: 4 }}>
                Поточна швидкість: <b>{values.speed}</b>
              </div>
              <ErrorMessage name="speed" component="div" className="err" />
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <Button type="submit">Зберегти</Button>
              <Button type="button" onClick={onClose}>Скасувати</Button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
}
