export default function Card({ data, quizId, quizLength, handleAnswer }) {
    
    return(

       <div className="quiz-card">
        <p>{quizId + 1}/{quizLength}</p>
         <h3>{ data[quizId].question }</h3>
          <ul>
            <li>
{
    data[quizId].options.map(
        (element, index) => {
            return(
                <li key={index}
                    onClick={ () => {handleAnswer(element.isCorrect)} }>{element.answer}</li>
      )
    }
  )
}
                </li>
            </ul>
       </div>
       
  )
}