import styles from "./Quadratic.module.css";
import {useState} from "react";
import Answer from "../Answer";

const Quadratic = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [counted, setCounted] = useState(false)

    const inputChanged = (event, setter) => {
        setCounted(false);
        setter(event.target.value);
    }

    return (
        <div className={styles.content}>
            <form onSubmit={ e => {
                e.preventDefault();
                setCounted(true);
            }} className={styles.quadraticForm}>
                <input type="text" style={{width : `${(a.toString().length*16)}px`}} className={styles.equationInput} onChange={ e => inputChanged(e, setA)}/>x<sup className={styles.degree}>2</sup>
                <span className={styles.separator}>+</span>
                <input type="text" style={{width : `${(b.toString().length*16)}px`}} className={styles.equationInput} onChange={e => inputChanged(e, setB)}/>x
                <span className={styles.separator}>+</span>
                <input type="text" style={{width : `${(c.toString().length*16)}px`}} className={styles.equationInput} onChange={e => inputChanged(e, setC)}/>
                <button className={styles.resultButton}>Посчитать</button>
            </form>
            {counted ? <Answer a={a} b={b} c={c}/>: null}
        </div>
    );
};

export default Quadratic;
