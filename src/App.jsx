import FormAction from './components/FormAction'
import FormSubmit from './components/FormSubmit'
import Header from './components/Header'
import Main from './components/Main'
import PropsMaking from './components/PropsMaking'
import jokesData from "./data"


export default function App() {
  const jokeElements = jokesData.map(joke => {
      return (

    < PropsMaking
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
