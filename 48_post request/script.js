const createToDo = async(todo)=> {
    let options =  ({
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo),
    
    })
    let p = await fetch('https://jsonplaceholder.typicode.com/posts',options)
         let response = await p.json()
         return response
}

const getTodo = async (id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let r= response.json()
      return r;
}
const mainFunc = async()=>{
    let todo = {
            title: 'harry',
            body: 'singh',
            userId: 1
    }
    let todor = await createToDo(todo)
    console.log(todor)
    console.log(getTodo(1))
}
mainFunc()
