import './Quiz.css'
import QuizTitle from './QuizTitles/QuizTitle'
import Q1 from './Quizes/Q1'
import Q2 from './Quizes/Q2'
function Quiz (){
    return (
        <div>
            <QuizTitle/>
            <Q1/>
            <Q2/>
        </div>
    )
}
export default Quiz