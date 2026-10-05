import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
  const [item, setItem] = useState('')
  function addItem(event) {
    event.preventDefault()
    const value = item.trim()
    if (!value) return
    setItems([...items, value])
    setItem('')
  }
  return <main>
    <header><p className="eyebrow">Browser automation lab</p><h1>Playwright Test Playground</h1></header>
    <section aria-labelledby="counter-title"><h2 id="counter-title">Counter</h2><output aria-label="Current count">{count}</output><div><button onClick={() => setCount(count - 1)}>Decrease</button><button onClick={() => setCount(count + 1)}>Increase</button></div></section>
    <section aria-labelledby="tasks-title"><h2 id="tasks-title">Test queue</h2><form onSubmit={addItem}><label htmlFor="task">Scenario</label><input id="task" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Add a scenario" /><button type="submit">Add</button></form>{items.length === 0 ? <p>No scenarios queued.</p> : <ul>{items.map((value, index) => <li key={`${value}-${index}`}>{value}</li>)}</ul>}</section>
  </main>
}
createRoot(document.getElementById('root')).render(<App />)
