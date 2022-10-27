import React, { Component } from "react";
import axios from "axios";


import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
      portfolioToEdit:{}
    };
    this.handleNewFormSubmission =
      this.handleNewFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
    this.handleEditFormSubmission=this.handleEditFormSubmission.bind(this);

  }


clearPortfolioToEdit(portfolioItem){
  this.setState({
    portfolioToEdit: {}
  })

}
  handleEditClick(portfolioItem) {
    this.setState({
      portfolioToEdit: portfolioItem
    })
  }
  handleDeleteClick(portfolioItem) {
    axios.delete(
      `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
      { withCredentials: true }
    ).then(response => {
        this.setState({
        portfolioItems: this.state.portfolioItems.filter(item=> {
            return item.id !== portfolioItem.id;
        })
    });
    return response.data;
    
  })
        // filter is used similar to map, but it keeps al of the items except for the parameters set for it.
        
        .catch(error => {
            console.log("error from delete", error);
        });
 };
  
 handleEditFormSubmission(){

  this.getPortfolioItems()
 }
  
 handleNewFormSubmission(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems),
    });
  }
  handleFormSubmissionError(error) {
    console.log("error in handleFormSubmission", error);
  }

  getPortfolioItems() {
    axios
      .get("https://mikepizza.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items],
        });
      })
      .catch((error) => {
        console.log("errror in getPortfolioItems", error);
      });
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }
  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            handleEditFormSubmission={this.handleEditFormSubmission}

            clearPortfolioToEdit={this.clearPortfolioToEdit}
            portfolioToEdit={this.state.portfolioToEdit}

          />
        </div>
        <div className="right-column">
          <PortfolioSidebarList
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.portfolioItems}
            handleEditClick={this.handleEditClick}
          />
        </div>
      </div>
    );
  }
}
