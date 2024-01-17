
import Add from './components/add'
import List from './components/list'
import ReduxProvider from './ReduxProvider';
export default function Home() {
  return (
    <main>
      <ReduxProvider>
        <Add/>
        <List/>
     </ReduxProvider>
    </main>
  )
}
