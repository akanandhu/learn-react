import React from 'react'
import axios from 'axios';



function axiosPage() {
    const callFunction = () => {
        axios
        .all([
          axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`),
          axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)

        ])
        
        .then(axios.spread((todos, posts)=> console.log(posts)))
        .catch((err) => console.log('error'))
    }

  return (
    <div>
      <button onClick={callFunction}>Click Me</button>
    </div>
  )
}

export default axiosPage
