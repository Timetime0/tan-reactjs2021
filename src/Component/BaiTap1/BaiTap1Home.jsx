import React, { Component } from 'react'
import CardList from './CardList'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import Information from './Information'

export class BaiTap1Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <div className="container">
                    <Information/>
                    <CardList/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default BaiTap1Home
