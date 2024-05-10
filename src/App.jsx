
import { ProfileBox } from './Components/ProfileBox'
import {TabsProjects} from '../src/Components/tabs/TabsProjects'

export const App = () => {
  return (
    <div className='md:flex'>
      <ProfileBox/>
      <TabsProjects/>
    </div>
  )
}

