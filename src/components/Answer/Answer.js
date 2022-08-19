import styles from "./Answer.module.css";
import cn from "classnames";

const Answer = ({a, b, c}) => {

    const calcX = (a = 0, b = 0, c = 0) => {
        const discriminant = (b*b) - (4 * a * c);
        if(discriminant < 0){
            console.log("Корней нет");
            return discriminant
        }else{
            const x1 = (-b + Math.sqrt(discriminant))/(2 * a);
            const x2 = (-b - Math.sqrt(discriminant))/(2 * a);
            return {
                x1,
                x2,
                discriminant
            };
        }
    }

   let answer = calcX(a,b,c);
    console.log(answer);

    const contentAnswer = (
        <>
            Решение:
            <div className={styles.formula}>
                {answer.discriminant} = {b}<sup>2</sup> - ({4*a*c})
            </div>
            <div className={cn(styles.formula, styles.hasFraction)}>
                x<sub>1,2</sub>= <div className={styles.fraction}><span>-({b}) ± √{answer.discriminant}</span><span>{2*a}</span></div>
            </div>
            <div className={styles.hasResolve}>
                <div>x<sub>1</sub> = <div className={styles.fraction}>{answer.x1}</div></div>
                <div>x<sub>2</sub>= <div className={styles.fraction}>{answer.x2}</div></div>
            </div>
        </>
    )

    return (
        <div className={styles.Answer}>
            <div className={styles.theoretical}>
                Формула:
                <div className={styles.formula}>
                    D = b<sup>2</sup> - 4ac
                </div>
                <div className={cn(styles.formula, styles.hasFraction)}>
                    x<sub>1,2</sub>= <div className={styles.fraction}><span>-b ± √D</span><span>2a</span></div>
                </div>
            </div>

            <div className={styles.solve}>
                { answer.discriminant > 0 ?  contentAnswer : "Нет решений :("}
            </div>
        </div>
    );
};

export default Answer;
