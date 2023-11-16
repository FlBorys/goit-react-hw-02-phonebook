import { nanoid } from "nanoid"
import { Component } from "react";
import { FilterContainer, FilterLabel, FilterInput, FilterButton } from "./Filter.styled";

export class Filter extends Component {
    state = {
        input: ""
    }

    inputId = nanoid();

    inputChange = event => {
    
        this.setState({ input: event.currentTarget.value });
        
        this.props.onFilter(this.state);
    
    };

  resetFilter = () => {
    this.setState({ input: "" }, () => {
      this.props.resetFilter();
    });
  };

    render() {
        return (
    <FilterContainer>
      <FilterLabel htmlFor={this.inputId}>Find contacts by name</FilterLabel>
                <FilterInput type="text" name="filter" id={this.inputId} onChange={this.inputChange} />
                <FilterButton onClick={this.resetFilter}>Reset filters</FilterButton>
    </FilterContainer>
        )
    }
}