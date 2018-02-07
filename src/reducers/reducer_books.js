// this reducer will return an array of book objects
// for now, we are just returning a hard coded object that's not retrieving
  // from application state
export default function () {
  return [
    { title: 'Javascript: The Good Parts' },
    { title: 'Harry Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' }
  ]
}
