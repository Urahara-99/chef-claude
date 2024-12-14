import FormAction from './components/FormAction'
import FormSubmit from './components/FormSubmit'
import Header from './components/Header'
import Main from './components/Main'
import Rough from './components/Rough'
import jokesData from "./data"


export default function App() {
  const jokeElements = jokesData.map(joke => {
      return (
          <Rough 
              key={joke.id}
              setup={joke.setup} 
              punchline={joke.punchline} 
          />
      )
  })
  return (
      <div>
          {jokeElements}
      </div>
  )
}
