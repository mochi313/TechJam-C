import { Title } from "../../components/header"
import { Quiz, QuizAfter, QuizBefore } from "../../components/quiz"
import ms from "./page.module.css"

export default function Home() {
    return <div>
        <Title title="健康クイズ"/>
        <Quiz />
    </div>
}
