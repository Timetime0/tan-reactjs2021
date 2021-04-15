import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import Product from './Product'



export default class BaiTap1 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <Product/>
                <Footer/>
            </div>
        )
    }
}

/** 
// class sau khi kế thừa class component thì được gọi là component
// viết trong phương thức render (){
    return (

    )
}


// tái sử dụng (giống nhau về css và html)
// Để quản lý và dễ mở rộng
// 
*/