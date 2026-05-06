import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            totalPages: 1   // ✅ CHANGE 1: safe default
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=apple&from=2026-05-04&to=2026-05-04&sortBy=popularity&apiKey=652da9e2e3d1411bbd83f1038129153f&pageSize=25";

        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles || [],   // ✅ CHANGE 2: safe fallback
            totalPages: parsedData.totalResults
                ? Math.ceil(parsedData.totalResults / 25)
                : 1
        });
    }

    handlepreviousclick = async () => {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2026-05-04&to=2026-05-04&sortBy=popularity&apiKey=652da9e2e3d1411bbd83f1038129153f&page=${this.state.page - 1}&pageSize=25`;

        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles || [],   // ✅ CHANGE 3
            totalPages: parsedData.totalResults
                ? Math.ceil(parsedData.totalResults / 25)
                : this.state.totalPages
        });
    }

    handlenextclick = async () => {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2026-05-04&to=2026-05-04&sortBy=popularity&apiKey=652da9e2e3d1411bbd83f1038129153f&page=${this.state.page + 1}&pageSize=25`;

        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles || [],   // ✅ CHANGE 4
            totalPages: parsedData.totalResults
                ? Math.ceil(parsedData.totalResults / 25)
                : this.state.totalPages
        });
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Top headlines</h2>

                <div className='row'>
                    {this.state.articles?.map((element) => (   // ✅ CHANGE 5: safe map
                        <div className='col-md-3 gap-2' key={element.url}>
                            <Newsitems
                                title={element.title ? element.title : ""}
                                description={
                                    element.description
                                        ? element.description.slice(0, 130)
                                        : "the detail of this news is not available at this time."
                                }
                                imageUrl={element.urlToImage}
                            />
                        </div>
                    ))}
                </div>

                <div className='container d-flex justify-content-between m-5'>
                    <button
                        disabled={this.state.page <= 1}
                        className='btn btn-dark link'
                        onClick={this.handlepreviousclick}
                    >
                        previous
                    </button>

                    <button
                        disabled={this.state.page >= this.state.totalPages}
                        className='btn btn-dark link'
                        onClick={this.handlenextclick}
                    >
                        next
                    </button>
                </div>
            </div>
        )
    }
}