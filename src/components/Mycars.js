import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        voitures : [
            {name: 'Ford', color: 'red', year: 2021},
            {name: 'Mercedes', color: 'green', year: 1960},
            {name: 'Peugeoit', color: 'yellow', year: 1889},
        ],

        title : 'Mon Catalogue Voitures'
    }

    addTenYear = ()=>{
        const updateState = this.state.voitures.map((param) => {
            return param.year -= 10 
        })

        this.setState({
            updateState
        })
    }

    getAge = (year) =>{
        const now  = new Date().getFullYear();
        const age = now - year;

        //ans 
        let frenchYearStr;

        if(age === 0){
            frenchYearStr = '';
        }else if(age ===1){
            frenchYearStr = 'an';
        }else{
            frenchYearStr = 'ans';
        }

        return `${age}  ${frenchYearStr}`;
    }

    render() {
        const year = new Date().getFullYear();
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.addTenYear}>+10 ans </button>
                
                {
                    this.state.voitures.map((voiture, index)=>{
                        return (
                            <Car name={voiture.name} key={index} color={voiture.color} year={this.getAge(voiture.year)}/>
                        );
                    })
                }
            </div>
           
        )
    }
}

export default Mycars