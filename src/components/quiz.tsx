"use client"
import { useState } from "react"
import ms from "./quiz.module.css"
import { motion } from "framer-motion"

export const QuizAfter = ({onClick}:{
    onClick:(bool:boolean) => void
}) => {
    return <div>
        <div className={ms.main}>
            <p style={{fontSize:"24px",fontWeight:"bold",textAlign:"center"}}>骨を折った時に行く病院は次のうちどれ？</p>
        </div>
        <div className={ms.container}>
            <div className={ms.option} onClick={() => onClick(false)}><p>A</p><p>形成外科</p></div>
            <div className={ms.option} onClick={() => onClick(false)}><p>B</p><p>外科</p></div>
            <div className={ms.option} onClick={() => onClick(true)}><p>C</p><p>整形外科</p></div>
            <div className={ms.option} onClick={() => onClick(false)}><p>D</p><p>脳外科</p></div>
        </div>
    </div>
}

export const QuizBefore = ({onClick}:{
    onClick:() => void
}) => {
    return <div>
        <div className={`${ms.main} ${ms.main2}`} onClick={onClick}>
            <p style={{fontSize:"40px",fontWeight:"bold",textAlign:"center"}}>スタート</p>
        </div>
        <div className={`${ms.main} ${ms.des}`}>
            <p>クイズに正解すると、<br />レベルが上がりポイントがもらえます。<br />ポイントはショップにて商品と交換可能です。</p>
        </div>
    </div>
} 

export const Quiz = () => {
    const [answerCorrect, setAnswerCorrect] = useState<boolean | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleAnswer = (isCorrect: boolean) => {
        setAnswerCorrect(isCorrect);
        setIsAnswered(true);
        console.log(answerCorrect,isAnswered)

        // 3秒後に結果をリセット
        setTimeout(() => {
            setIsAnswered(false);
            setAnswerCorrect(null);
        }, 3000);
    };
    const [toggle,setToggle] = useState<boolean>(false)
    return <>
        {toggle && <QuizAfter onClick={handleAnswer}/>}
        {!toggle && <QuizBefore onClick={() => setToggle(true)}/>}
        <motion.div
            className={`${ms.result} ${answerCorrect === true ? `${ms.correct}` : answerCorrect === false ? `${ms.incorrect}` : ''}`}
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: isAnswered ? 1 : 0, scale: isAnswered ? 2 : 0 ,translateX: isAnswered ? "-50%" :  "-50%", translateY: isAnswered ? "-50%" : "-50%"}}
            transition={{ duration: 0.5 }}
        >
            {answerCorrect === true ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="80" height="80" strokeWidth="4">
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
        </svg> : answerCorrect === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="80" height="80" strokeWidth="4">
  <path d="M18 6l-12 12"></path>
  <path d="M6 6l12 12"></path>
</svg> : ''}
        </motion.div>
    </>
}
