import Card from "./card";
import React from "react";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCard: ['active','','','','','']
        }
        this.onClickPicture = this.onClickPicture.bind(this)
    }

    onClickPicture(newActive) {
        this.setState({activeCard: newActive})
    }


   render() {
       return (
           <div className='container'>
               <Card
                   activePanel={this.state.activeCard}
                   index={0}
                   onClickHandler={this.onClickPicture}
                   text='Wildlife'
                   url='https://images.unsplash.com/photo-1643732660623-4b7868af1216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'/>
               <Card
                   activePanel={this.state.activeCard}
                   index={1}
                   onClickHandler={this.onClickPicture}
                   text='Autumn'
                   url='https://images.unsplash.com/photo-1643722571244-91033408e1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
               <Card
                   activePanel={this.state.activeCard}
                   index={2}
                   onClickHandler={this.onClickPicture}
                   text='Lakeside Winter'
                   url='https://images.unsplash.com/photo-1643721859448-4d241d04448b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
               <Card
                   activePanel={this.state.activeCard}
                   index={3}
                   onClickHandler={this.onClickPicture}
                   text='The Dock'
                   url='https://images.unsplash.com/photo-1643718132395-9359e4615236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
               <Card
                   activePanel={this.state.activeCard}
                   index={4}
                   onClickHandler={this.onClickPicture}
                   text='Snowy Mountain Road'
                   url='https://images.unsplash.com/photo-1643653773680-eb00565bcbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
               <Card
                   activePanel={this.state.activeCard}
                   index={5}
                   onClickHandler={this.onClickPicture}
                   text='Bridges'
                   url='https://images.unsplash.com/photo-1643574914412-409598704135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'/>
           </div>
       )
   }
}

export default Layout;