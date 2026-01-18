import { useState } from 'react';
import styles from './Sidebar.module.css'

interface Step {
    id: number;
    title: string;
    description: string;

}

const stepsList: Step[] = [
    {
        id: 1,
        title: "Step 1",
        description: "Your info"
    },
    {
        id: 2,
        title: "Step 2",
        description: "Select plan"
    },
    {
        id: 3,
        title: "Step 3",
        description: "Add-ons"
    },
    {
        id: 4,
        title: "Step 4",
        description: "Summary"
    }
]

function Sidebar() {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <aside className={styles.sidebar}>
            <ol className={styles.stepList}>
                {stepsList.map(step =>
                    <li key={step.id} className={`${styles.stepItem} ${activeStep === step.id ? styles.active : ''}`}>
                        <button className={styles.stepContent} onClick={() => setActiveStep(step.id) }>
                            <span className={styles.stepTitle}>{step.title}</span>
                            <span className={styles.stepDescription}>{step.description}</span>
                        </button>
                    </li>
                )}


            </ol>
        </aside>
    )
}

export default Sidebar