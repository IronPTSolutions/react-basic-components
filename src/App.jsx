import Box from './components/ui/box/Box';
import BtnIcon from './components/ui/btn-icon/BtnIcon';
import Counter from './components/ui/counter/Counter';
import ListGroup from './components/ui/list-group/ListGroup';
import Panel from './components/ui/panel/Panel';
import TasksGroup from './components/ui/tasks-group/TasksGroup';

function App() {
  const items = [
    'Task 1',
    'Task 2',
    'Task 3'
  ]
  const tasks = [
    {
      id: '1',
      text: 'Task 1',
      completed: true
    },
    {
      id: '2',
      text: 'Task 2',
      completed: false
    },
    {
      id: '3',
      text: 'Task 3',
      completed: true
    }
  ]
  return (
    <div className='d-flex flex-column'>
      <Box color='green' size={150}>
        <p><span>A - </span>Hola</p>
      </Box>
      <Box color='red' size={50} />
      <Box />
      <BtnIcon icon='user' text='@username'/>
      <BtnIcon icon='edit' text='Edit profile'/>
      <BtnIcon text='Edit profile'/>
      <Panel header='Header' footer='Footer' mode='danger' title='Title' text='Hola mundo' >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eligendi eaque nulla? Sit saepe perferendis, ea totam, earum repellat excepturi veritatis illo optio autem minus sequi odit beatae, cupiditate recusandae!</p>
      </Panel>
      <Panel header='Header' footer='Footer' title='Title' text='Hola mundo' >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eligendi eaque nulla? Sit saepe perferendis, ea totam, earum repellat excepturi veritatis illo optio autem minus sequi odit beatae, cupiditate recusandae!</p>
      </Panel>
      <ListGroup items={items} />
      <TasksGroup tasks={tasks} />
      <Counter init={10} max={20} />
    </div>
  )
}

export default App;
