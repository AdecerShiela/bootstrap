import React, { Component } from 'react';
import logo from './logo.svg';
import'bootstrap/dist/css/bootstrap.css';
import {
  Button,ButtonGroup,Form,FormGroup,ControlLabel,FormControl,HelpBlock,Checkbox,Radio,Grid,Col,Row
} from 'react-bootstrap';



class App extends Component {
  
  state = {
    nickname:"",
    name:"",
    color:"",
    movies:[],
    gender:"",
    artist:[],
    genderV:""
    
    
  }
  
  onChange = (fieldName)=>{
    return(event)=>{
      var state=this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
      var targetArray = this.state[fieldName];
      if (targetArray.indexOf(event.target.value)>=0)
      targetArray.splice(
        targetArray.indexOf(event.target.value),
        1
      );
      else
      targetArray.push(event.target.value);
      
      
      var state = this.state;
      state[fieldName]=targetArray;
      this.setState(state);
    }
  };
  
  
  render() {
    return (
      <div className="container">
        <div className="page-header">
        <h2>Student Survey!!</h2>
        </div>
        <p className="jumbotron">
        
        <Grid>
        <Row>
        <Col md={6}>
        
        <Form>
        
        <FormGroup>
        <ControlLabel>Name Please......</ControlLabel>
        <FormControl type="text"  
        placeholder="Name here..."
        value={this.state.name}
        onChange={this.onChange('name')}
        /> 
           
      
           
       <HelpBlock>use to identify you </HelpBlock>   
        </FormGroup>
     
    
       <FormGroup>
        <ControlLabel>Choose Favorite Color</ControlLabel>
        <FormControl componentClass="select"  
        placeholder="color"
         value={this.state.color}
        onChange={this.onChange('color')}
        > 
         
        <option value="red">Red</option>  
        <option value="green">Green</option>  
        <option value="blue">Blue</option>  
       
        </FormControl>
       <HelpBlock>use to identify you </HelpBlock>   
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite Movie</ControlLabel>
        <Checkbox value="Harry Potter"
        checked={this.state.movies.indexOf('Harry Potter')>=0 ? true:false}
        onChange={this.checkboxChange('movies')}>
        Harry Potter
        </Checkbox>
        <Checkbox value="Train to Busan"
         checked={this.state.movies.indexOf('Train to Busan')>=0 ? true:false}
        onChange={this.checkboxChange('movies')}>
         Train to Busan
        </Checkbox>
        <Checkbox value="The Walking Dead" 
        checked={this.state.movies.indexOf('The Walking Dead')>=0 ? true:false}
        onChange={this.checkboxChange('movies')}>
        The Walking Dead
         </Checkbox>
        
      
          
        
        
          
        
        
     
            
       
        
        
        
        
        

        </FormGroup>
         
         <FormGroup>
         <ControlLabel>Gender</ControlLabel>
         <Radio name="gender"  value="Male"
         onChange={this.onChange('gender')}>Male
         </Radio>
         
         <Radio name="gender" value="Female"
          onChange={this.onChange('gender')}>Female
         
     </Radio>
        
            
       
         
         
         
         
        
        </FormGroup>
        
        
            
         
     <FormGroup>
        <ControlLabel>NickName......</ControlLabel>
        <FormControl type="text"  
        placeholder="NickName"
        value={this.state.Nickname}
        onChange={this.onChange('Nickname')}
        /> 
           
      
           
       <HelpBlock>use to know you </HelpBlock>   
        </FormGroup>
     
     
     <FormGroup>
        <ControlLabel>Favorite Artist</ControlLabel>
        <Checkbox value="Kathryn Bernardo" 
        checked={this.state.artist.indexOf('Kathryn Bernardo')>=0 ? true:false}
        onChange={this.checkboxChange('artist')}>
        Kathryn Bernardo
         </Checkbox>
        
        
          <Checkbox value="Zack Efron" 
        checked={this.state.artist.indexOf('Zack Efron')>=0 ? true:false}
        onChange={this.checkboxChange('artist')}>
        Zack Efron
         </Checkbox>
         
         
        
              
        <Checkbox value="James Reid" 
        checked={this.state.artist.indexOf('James Reid')>=0 ? true:false}
        onChange={this.checkboxChange('artist')}>
        James Reid
         </Checkbox>
        
        
        
           
        <Checkbox value="Daniel Padilla" 
        checked={this.state.artist.indexOf('Daniel Padilla')>=0 ? true:false}
        onChange={this.checkboxChange('artist')}>
       Daniel Padilla
         </Checkbox>
         </FormGroup>
        
        
        
        <FormGroup>
         <ControlLabel>Other Gender</ControlLabel>
        
        
        <Radio name="genderV" value="Gay"
          onChange={this.onChange('genderV')}>Gay
         </Radio>
         
         
            
         <Radio name="genderV" value="Bisexual"
          onChange={this.onChange('genderV')}>Bisexual
         </Radio>
         
         
            
         <Radio name="genderV" value="Transgender"
          onChange={this.onChange('genderV')}>Transgender
         </Radio>
         </FormGroup>
         
         
        
          
          </Form>
          
           <ButtonGroup>
          <Button bsStyle="info">
          <span className="glyphicon glyphicon-heart"></span>
          Info Button</Button>
          
          
         
         <Button bsStyle="primary">Primary Button</Button>
         
          <Button bsStyle="warning">Warning Button</Button>
          <Button bsStyle="danger">Danger Button</Button>
          </ButtonGroup>
        
        </Col>
        <Col md={6}>
        
        <strong>Name is: {this.state.name}</strong><br/>
         
          <strong>Color is: {this.state.color}</strong><br/>
           <strong>Movies are: {
             this.state.movies.map((item,i)=>{
               return <div>
               <span className="label label-primary">{item}</span>
               </div>
             })}</strong><br/>
           <strong>Gender is: {this.state.gender}</strong><br/>
           
          <br/>
             
             <strong>NickName is: {this.state.Nickname}</strong><br/>
                <strong>Other Gender are: {this.state.genderV}</strong><br/>
              <strong>Favorite Artist are: {
             this.state.artist.map((item,i)=>{
               return <div>
               <span className="label label-primary">{item}</span>
               </div> 
               
               
               
             })
             
            }</strong><br/>
            
        
        </Col>
        </Row>
        </Grid>
      
        
        </p>
       </div>
        
          
        
        
        
        
        
    
         
        
        
       
        
        
        
      
     
    );
  }
}

export default App;
