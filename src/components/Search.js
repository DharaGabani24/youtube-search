import React from "react";

class Search extends React.Component{
    state={title:""}

    onSearchChanged = event => {
        const _title = event.target.value

        console.log(_title)

        this.setState({title:_title})
    }
    onSubmit = event => {
        event.preventDefault()
        console.log(this.state.title)
        this.props.onSearch(this.state.title)

   
    }
    render(){
        return(
            // <div>Search Component</div>
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-controls">
                        <label>Search</label>
                        <input onChange={this.onSearchChanged} id="video-search" type="text" placeholder="Enter Search Keyword"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;