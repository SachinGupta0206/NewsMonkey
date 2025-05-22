import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropsTypes from 'prop-types'

export class News extends Component {
  static defaultProps ={
    country: 'us',
    pageSize: 5,
    category: PropsTypes.string,
  }
  static PropsType = {
    country: PropsTypes.string,
    pageSize: PropsTypes.number,
    category: PropsTypes.string,
  }
  constructor(){
    super();
    this.state = {
     data : [],
      loading: false,
      page: 1,
    }
  }
    async componentDidMount(){
      console.log("cdm");
      
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=14039f212c804bceb88ff879ca36741d&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});      
      let data = await fetch(url);
      let parsedData =  await data.json()
      console.log(parsedData);
      this.setState({data: parsedData.articles, 
        totalResults : parsedData.totalResults,
        loading:false
      })
    }

   
     handlePrevClick = async()=>{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=14039f212c804bceb88ff879ca36741d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});      
      let data = await fetch(url);
      let parsedData =  await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
       articles: parsedData.articles,
        loading : false
       })
      
    }
     handleNextClick = async ()=>{
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
      else{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=14039f212c804bceb88ff879ca36741d&page=1${this.state.page +1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
       articles: parsedData.articles,
        loading:false
       })
      }
      
    }


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey -Latest News</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.data.map((element)=>{
          return <div className="col-md-4" key={element.url}>
        <NewsItems title={element.title?element.title:""} description ={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
      </div>
          })}
       
       </div >
         <div className="container d-flex justify-content-between">
          <button disabled ={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}> &larr; Prev</button>
          <button disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize) } type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
         </div>
        </div >
      
    )
  }
}
export default News