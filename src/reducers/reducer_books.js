// this reducer will return an array of book objects
// for now, we are just returning a hard coded object that's not retrieving
  // from application state
export default function () {
  return [
    { title: 'Javascript: The Good Parts', pages: 101 },
    { title: 'Harry Potter', pages: 39 },
    { title: 'The Dark Tower', pages: 85 },
    { title: 'Eloquent Ruby', pages: 1 }
  ]
}
