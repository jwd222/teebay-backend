import User from './components/User'

export default function App() {
  const userId = '56b390d6-604b-47a8-98d2-edeb1e03fbc2'
  return (
    <div>
      <User userId={userId} />
    </div>
  )
}
