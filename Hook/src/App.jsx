import React from 'react'
import Formreff from './allhook/03-useReff/formreff'
import UiTest from './allhook/04-CustomHook/uiTest'
import Navbar from './allhook/05-contextApi/Navbar'
// import Error from './allhook/01-usestate/error'
// import ArrayState from './allhook/01-usestate/useStateArrTask'
// import UseStateObj from './allhook/01-usestate/useStateObj'
// import UseStateIssue from './allhook/01-usestate/useStateIssue'
// import UseEffectGitFetch from './allhook/02-useEffect/useEffectGitFetch';
// import UseEffectMultiple from './allhook/02-useEffect/useEffectMultiple';
// import Usereff from './allhook/03-useReff/usereff';
// import ShowCurrentPrevVal from './allhook/03-useReff/showCurrentPrevVal';
import NavBar from './allhook/05-contextApi/Navbar';
import ReducerBasics from './allhook/06-useReduser/ReducerBasics';
import UseMemoAndCallBack from './allhook/07-useMemo/useMemoAndUseCallback';
import UiShow from './allhook/08- memo/uiShow';
import UiToggle from './allhook/05-contextApi/Togglethem/UiToggle';
import UiReduser from './allhook/06-useReduser/Concept/UiReduser';
import UiPagination from '../Task/USESTATE/Pagination/UiPagination';
import FormAddUi from '../Task/useStateConcept/usereffConcept/FormAddInput/FormAddUi';
import FormHandling from '../Task/useStateConcept/usereffConcept/FormAddInput/FormHandling';
import MultipleFormContentHandling from '../Task/useStateConcept/usereffConcept/FormAddInput/multipleFormContentHandling';
import Authentication from '../Task/usecontextwithreduse/Authentication';
import UiTimer from '../Task/USESTATE/UiTimer';
import TodoList from '../Task/USESTATE/TodoList';

const App = () => {
  return (
    <div className='container'>
      <h2>Advanced React</h2>
      {/* <ArrayState /> */}
      {/* <UseStateObj /> */}
      {/* <UseStateIssue /> */}
      {/* <UseEffectGitFetch /> */}
      {/* <UseEffectMultiple /> */}
      {/* <Usereff /> */}
      {/* <ShowCurrentPrevVal /> */}
      {/* <Formreff /> */}
      {/* <UiTest /> */}
      {/* <Navbar/> */}
      {/* <ReducerBasics/> */}
      {/* <UseMemoAndCallBack /> */}
      {/* <UiShow /> */}
      {/* <UiToggle /> */}
      {/* <UiReduser /> */}
      {/* <UiPagination /> */}
      {/* <FormAddUi /> */}
      {/* <FormHandling /> */}
      {/* <MultipleFormContentHandling /> */}
      {/* <Authentication /> */}
      {/* <UiTimer /> */}
      <TodoList />
      
    </div>
  )
}

export default App
