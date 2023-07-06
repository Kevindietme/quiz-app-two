const imageUri = process.env.PUBLIC_URL + '/images/';

export default function Card({ data, quizId, quizLength, handleAnswer }) {
    
    return(

       <div className="quiz-card">
        <h2>Guess the Movie <span>({quizId + 1}/{quizLength})</span></h2>
        <img src={imageUri + data[quizId].image} alt={data[quizId].title} />
         {/* <h3>{ data[quizId].question }</h3> */}
          <ul>
            
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
                
            </ul>
       </div>
       
  )
}