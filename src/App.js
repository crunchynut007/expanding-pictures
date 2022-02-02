import './App.css';
import Card from "./components/card";


function App() {
  return (
    <div className="body-wrap">
        <div className='container'>
            <Card text='Wildlife' url='https://images.unsplash.com/photo-1643732660623-4b7868af1216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'/>
            <Card text='Autumn' url='https://images.unsplash.com/photo-1643722571244-91033408e1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
            <Card text='Lakeside Winter' url='https://images.unsplash.com/photo-1643721859448-4d241d04448b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
            <Card text='The Dock' url='https://images.unsplash.com/photo-1643718132395-9359e4615236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
            <Card text='Snowy Mountain Road' url='https://images.unsplash.com/photo-1643653773680-eb00565bcbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
            <Card text='Bridges' url='https://images.unsplash.com/photo-1643574914412-409598704135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'/>
        </div>
    </div>
  );
}

export default App;