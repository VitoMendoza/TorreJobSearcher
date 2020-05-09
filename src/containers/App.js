import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
      super()
      this.state = {
        people: [],
        searchfield: '',
        response: false
      }
      this.name = {term:''}
    }
    
    componentDidMount() {
      fetch('https://search.torre.co/people/_search/?currency=USD%24&page=0&periodicity=hourly&aggregate=true&offset=0&size=20', {
          method: 'POST' 
        })
        .then(response=> response.json())
        .then(responseData => {
            this.setState({ people: responseData.results, 
                            response: true})
    });
    }



    verifyText(myArg) {
        this.setState({response:false});
        if (myArg.term===''){
            fetch('https://search.torre.co/people/_search/?currency=USD%24&page=0&periodicity=hourly&aggregate=true&offset=0&size=20', {
            method: 'POST' 
            })
            .then(response=> response.json())
            .then(responseData => {
                this.setState({ people: responseData.results,
                    response: true})
            });
        }else {
            fetch('https://search.torre.co/people/_search/?currency=USD%24&page=0&periodicity=hourly&aggregate=true&offset=0&size=20', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name:  myArg
            })
          
          })
          .then(response=> response.json())
          .then(responseData => {
              this.setState({ people: responseData.results,
                response: true})
            });
        }
        
        }
  
    onSearchChange = (e) => {
        if (e.target.value.trim==='') {
          this.setState({ searchfield: e.target.value })
          this.name.term = e.target.value;
          this.verifyText(this.name);
        }    
    }

    onkeyPress = (e) => {
        if(e.keyCode === 13){
           this.setState({ searchfield: e.target.value })
           this.name.term = e.target.value;
           this.verifyText(this.name);
        }
     }
  
    render() {
      const { people, searchfield } = this.state;
      const filteredPeople = people.filter(person =>{
        return person.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return(
          <div className='tc'>
            <h1 className='f1'>Find People in Torre</h1>
            <SearchBox searchChange={this.onSearchChange} keyPress={this.onkeyPress}/>
            <Scroll>
              <CardList people={filteredPeople}/>
            </Scroll>
          </div>
        );
    }

}


export default App;