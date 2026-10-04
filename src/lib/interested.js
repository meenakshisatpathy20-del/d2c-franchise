import { useEffect, useState } from 'react'

const KEY = 'd2c-interested'
const EVENT = 'd2c-interested-change'

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

function write(ids) {
  try {
    localStorage.setItem(KEY, JSON.stringify(ids))
  } catch {
    return
  }
  window.dispatchEvent(new Event(EVENT))
}

export function useInterested() {
  const [ids, setIds] = useState(read)

  useEffect(() => {
    const sync = () => setIds(read())
    window.addEventListener(EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const toggle = (id) => {
    const current = read()
    const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    write(next)
    setIds(next)
  }

  const clear = () => {
    write([])
    setIds([])
  }

  return { ids, toggle, clear, has: (id) => ids.includes(id) }
}