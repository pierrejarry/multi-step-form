import styles from './Step.module.css'
import { useState } from 'react'

interface Step1Props {
    name: string;
    email: string;
    phone: string;
}

const initialValue: Step1Props = {
    name: '',
    email: '',
    phone: ''
}

function Step1() {
    const [step1Form, setStep1Form] = useState(initialValue);

    const handlePlaceholder = (key:string) => {
        switch(key) {
            case 'name':
                return 'e.g. Stephen King';
                break;
            case 'email':
                return 'stephenking@lorem.com';
                break;
            case 'phone':
                return '+1 234 567 8910'
                break;
        }
    }
    
    return (
        <div>
            <h2 className={styles.title}>Personal info</h2>
            <p className={styles.description}>Please provide your name, email address, and phone number.</p>
            <fieldset>
                {Object.keys(initialValue).map(key => (
                    <div key={key}>
                        <label className={styles.label} htmlFor={key}>{key}</label>
                        <input
                            id={key}
                            name={key}
                            className={styles.input}
                            type='text'
                            value={step1Form[key as keyof Step1Props]}
                            placeholder={handlePlaceholder(key)}
                            onChange={(e) => setStep1Form(prev => ({
                                ...prev,
                                [key]: e.target.value
                            }))}
                        />
                    </div>
                ))}
            </fieldset>
        </div>
    )
}

export default Step1