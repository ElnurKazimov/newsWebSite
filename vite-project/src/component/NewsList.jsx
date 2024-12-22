import React from 'react'
import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'
import Container from '@mui/material/Container';



const NewsList = () => {


    const [news, setNews] = useState([])


    const BaseUrl = 'https://newsapi.org/v2/everything?q='
    const ApiKey = '1ce201ad543e4939b11b543962c2370b'

    const getNews = async () => {
        const response = await axios.get(`${BaseUrl}world&apiKey=${ApiKey}`)
        setNews(response.data.articles);
        console.log(response)

    }



    useEffect(() => {
        getNews();

    }, [])

    return (
        <>
            <Container>
                <div className='flex flex-wrap gap-8 mt-[50px]'>




                    {

                        news && news.length > 0
                        && news.map((item) => (

                            item.urlToImage != null && (
                                <NewsItem key={item.urlToImage} props={item} images={item.urlToImage} />
                            )


                        )



                        )}
                </div>
            </Container>
        </>
    )
}

export default NewsList