
import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { UserContext} from './App';

const schema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup
    .number()
    .typeError('Phone Number must be a number')
    .positive('Phone Number must be positive')
    .integer('Phone Number must be an integer')
    .required('Phone Number is required'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .positive('Age must be positive')
    .integer('Age must be an integer')
    .required('Age is required'),
  favoriteLanguage: yup.string().required('Favorite Language is required'),
}).required();

type FormInputs = yup.InferType<typeof schema>;

function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setUserData(data);
    navigate('/display');
  };

  return (
    <div style={{
      backgroundColor: '#00CED1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '80%',
        maxWidth: '600px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="fullName" style={{ display: 'block', marginBottom: '5px' }}>Full Name:</label>
            <input {...register('fullName')} style={{
              width: 'calc(100% - 22px)',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box',
            }} />
            <p style={{
                color:"red"
            }}>{errors.fullName?.message}</p>
          </div>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input type="email" {...register('email')} style={{
              width: 'calc(100% - 22px)',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box',
            }} />
            <p style={{
                color:"red"
            }}>{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '5px' }}>Phone Number:</label>
            <input type="number" {...register('phoneNumber')} style={{
              width: 'calc(100% - 22px)',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box',
            }} />
            <p style={{
                color:"red"
            }} >{errors.phoneNumber?.message}</p>
          </div>
          <div>
            <label htmlFor="age" style={{ display: 'block', marginBottom: '5px' }}>Age:</label>
            <input type="number" {...register('age')} style={{
              width: 'calc(100% - 22px)',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box',
            }} />
            <p style={{
                color:"red"
            }}>{errors.age?.message}</p>
          </div>
          <div>
            <label htmlFor="favoriteLanguage" style={{ display: 'block', marginBottom: '5px' }}>Favorite Programming Language:</label>
            <select {...register('favoriteLanguage')} style={{
              width: 'calc(100% - 22px)',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box',
            }}>
              <option value="">Select Language</option>
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
            </select>
            <p style={{
                color:"red"
            }}>{errors.favoriteLanguage?.message}</p>
          </div>
          <button type="submit" style={{
            backgroundColor: '#00008B',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
          }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;