import React from 'react';
import './App.css';

// https://127.0.0.1:8000/
const API = 'scrap/';


class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        itemReviews:[],
        search_string:'',
         /* activeItem:{
            id:null,
            product:'',
            customer:'',
            heading:'',
            rating:0,
            comment:'',
        }, */
      }
      //this.fetchReviews = this.fetchReviews.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getCookie = this.getCookie.bind(this)
  };

  getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
/*
  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews(){
    let url = 'https://127.0.0.1:8000/api/laptop'
    console.log('Fetching...yes')
    fetch(url + this.state.search_string)
    .then(response => response.json())
    .then(data =>
      this.setState({
        itemReviews:data
      })
    )
  }
*/

  handleChange(e){
    var value = e.target.value
    this.setState({
    search_string:value
    })
    // console.log(this.state.search_string)
  }
/*
fetch(API, {
      method: 'POST',
      headers: {
       'content-type': 'application/json',
       'X-CSRFToken': csrftoken,
      },
      //body: {"search_string": this.state.search_string}
      body: JSON.stringify({search_string: this.state.search_string})
    }).then(response => response.json())
    .then(data =>
      this.setState({
        itemReviews:data
      })
    )

fetch(url)
    .then(response => response.json())
    .then(data =>
      this.setState({
        itemReviews:data
      })
    )

    headers: {
       'content-type': 'application/json',
       'X-CSRFToken': csrftoken,
    },
*/
  handleSubmit(e){
    e.preventDefault()
    let keyword = (this.state.search_string).replace("%20", "")
    var csrftoken = this.getCookie('scrftoken')
    let url = API + keyword
    console.log('ITEM', (this.state.search_string).replace("%20", ""))
    fetch(url)
    .then(response => response.json())
    .then(data =>
      this.setState({
        itemReviews:data
      })
    ).catch(function(error){
      console.log('ERROR:', error)

    })
  }

  render(){
    var reviews = this.state.itemReviews
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form-wrapper">
          <input onChange={this.handleChange} className="form-control" type="text" placeholder="Search a product" name="search_string"/>
          <input className="btn btn-primary center-item" type="submit" placeholder="Search"/>
          </form>

          <div className="review-wrapper flex-wrapper"><span style={{flex: 1}}>Product</span>
            <span style={{flex: 1}}>Customer</span><span style={{flex: 1}}>Rating</span>
            <span style={{flex: 1}}>heading</span><span style={{flex: 1}}>Comment</span></div>

          <div className="review-wrapper">
            {reviews.map(function(review, index){
                return(
                    <div key={index} className="review-wrapper flex-wrapper">
                        <div style={{flex: 1}}>
                            <span>{review.product}</span>
                        </div>
                        <div style={{flex: 1}}>
                            <span>{review.customer}</span>
                        </div>
                        <div style={{flex: 1}}>
                            <span>{review.rating}</span>
                        </div>
                        <div style={{flex: 1}}>
                            <span>{review.heading}</span>
                        </div>
                        <div style={{flex: 1}}>
                            <span>{review.comment}</span>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>
      )
    }
  }

  export default App