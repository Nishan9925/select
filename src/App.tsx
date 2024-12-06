
import './App.css'
import ButtonComp from './Button'
import Form from './Form';
import MultiSelect from './Select';
// import Select from './Select'
// import Selects from './Selects';
import TagInput from './Test';
// import DropdownInput from './Test';


function App() {

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10rem"}}>
      {/* <ButtonComp /> */}
      {/* <Select /> */}
      <MultiSelect />
      <TagInput/>
      {/* <Selects /> */}
      {/* <Form /> */}
    </div>
  )
}

export default App;
