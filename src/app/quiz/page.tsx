import { BaseLayout } from "../../components/baselayout"
import { Title } from "../../components/header"
import { Quiz, QuizAfter, QuizBefore } from "../../components/quiz"
import ms from "./page.module.css"

export default function Home() {
    return <BaseLayout>
    <div>
        <Title title="健康クイズ"/>
        <Quiz />
    </div>
</BaseLayout>
}
