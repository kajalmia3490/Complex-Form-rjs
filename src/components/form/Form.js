import Button from '../button/Button';
import Checkbox from '../checkbox/Checkbox';
import Header from '../header/Header';
import Input from '../input/Input';
import Radio from '../radio/Radio';
import Select from '../select/Select';
import './Form.css'
import React from 'react';

const Form = () => {
    return (
        <div className='container'>
            <Header />
            <form>

                <div className='formGroup'>
                    <Input
                        label='First Name:'
                        placeholder='Enter first name'
                        type='text'
                        name='firstName'
                    />
                    <Input
                        label='Last Name:'
                        placeholder='Enter last name'
                        type='text'
                        name='lastName'
                    />
                </div>

                <div className='formGroup'>
                    <Input
                        label='Phone:'
                        placeholder='Enter phone number'
                        type='number'
                        name='number'
                    />
                    <Input
                        label='Email:'
                        placeholder='Enter email address'
                        type='email'
                        name='email'
                    />
                </div>

                <div className='formBlock'>
                    <label className='lab'># Short Bio:</label>
                    <textarea
                        className='bio'
                        type='textarea'
                    />
                </div>
                
                <div className='selectGroup'>
                    <Select />
                </div>

                <div className='radioGroup'>
                    <h1># Select your Gender:</h1>
                    <Radio
                        label=' Male'
                        name='gender'
                        type='radio'
                    />
                    <Radio
                        label=' Female'
                        name='gender'
                        type='radio'
                    />
                    <Radio
                        label=' Other'
                        name='gender'
                        type='radio'
                    />
                </div>

                <div className='formGroup'>
                    <Input
                        label='Password:'
                        placeholder='Enter password'
                        type='password'
                        name='password'
                    />
                    <Input
                        label='Confirm Password'
                        placeholder='Confirm password'
                        name='password'
                        type='password'
                    />
                </div>
                
                <div className='checkBox'>
                    <Checkbox
                        type='checkbox'
                        name='checkbox'
                        label=' I agree all term and conditions.'
                    />
                </div>
                
                <div className='btnGroup'>
                    <Button
                        type='submit'
                        name='button'
                        value='Reset'
                        className='btn'
                    />
                    <Button
                        type='submit'
                        name1='button'
                        value1='Submit'
                        className='btn2'
                    />
                </div>
            </form>
        </div>
    );
};

export default Form;