import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'

class Homepage extends Component {

    state={
        result:[]
    }

    
    
    render() {
      
        return (
            <div>
                <CSVReader onFileLoaded={(data, fileInfo) =>{ this.setState({result:data})}} />
            {console.log("this  is  the   data===>",this.state.result)}
            </div>
            
        );
    }
}

export default Homepage;
