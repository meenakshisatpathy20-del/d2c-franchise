import { useState } from 'react'
import { supabase } from './lib/supabase'

export default function App() {
  const [log, setLog] = useState('')

  // Test 1: a dealer submitting — should SUCCEED
  async function testInsert() {
    const { error } = await supabase.from('franchise_leads').insert({
      full_name: 'Test Dealer',
      phone: '9876543210',
      email: 'test@example.com',
      city: 'Patna',
      state: 'Bihar',
      preferred_model: '1000 sqft',
      consent: true,
    })
    setLog(error ? '❌ Insert failed: ' + error.message : '✅ Insert worked — check Table Editor')
  }

  // Test 2: a stranger trying to read leads — should get NOTHING
  async function testRead() {
    const { data, error } = await supabase.from('franchise_leads').select('*')
    if (error) return setLog('Read error: ' + error.message)
    setLog(`🔒 Public read returned ${data.length} rows (0 = data is protected)`)
  }

  // Test 3: bad phone number — database should REJECT
  async function testBadPhone() {
    const { error } = await supabase.from('franchise_leads').insert({
      full_name: 'Spammer',
      phone: '12345',
      email: 'x@y.com',
      city: 'Delhi',
      state: 'Delhi',
      consent: true,
    })
    setLog(error ? '✅ Bad phone rejected: ' + error.message : '❌ Bad phone was accepted')
  }

  return (
    <main className="section min-h-dvh">
      <img src="/images/logo-d2c-mall.webp" alt="D2C Mall" className="h-12 w-auto" />
      <h1 className="mt-8 text-3xl font-extrabold">Database security test</h1>

      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={testInsert} className="btn-primary">1. Submit test lead</button>
        <button onClick={testRead} className="btn-green">2. Try reading as public</button>
        <button onClick={testBadPhone} className="btn-outline">3. Submit bad phone</button>
      </div>

      <p className="glass mt-8 rounded-2xl p-5 font-medium">{log || 'Click a button…'}</p>
    </main>
  )
}