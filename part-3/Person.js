
function Person({ name, age, hobbies }) {
  const eighteenOrOlder = age > 17;

  return (
    <div>
      <h3>{ name.slice(0, 6) }</h3>
      <p>Learn some information about this person</p>
      <h3>{ eighteenOrOlder ? "Please go vote!" : "You must be 18" }</h3>
      <ul>
        { hobbies.map(h => <li>{ h }</li>) }
      </ul>
    </div>
  )
}