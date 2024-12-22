import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';








const NewsItem = ({ props }) => {

    const { title, content, publishedAt, url, urlToImage } = props




    return (

        <>





            <Card sx={{ width: '330px', height: '320px' }} className='relative cursor-pointer'>
                <CardMedia
                    sx={{ height: 180, }}
                    image={urlToImage}
                    title={title}

                />

                <CardContent>

                    <Typography variant="button" sx={{ color: 'black' }} >
                        <a href={url} target='_blank' >{title}</a>
                    </Typography>
                    <br />
                </CardContent>
                <span className='font-mono text-[16px] absolute bottom-2 right-2 bg-white'>{publishedAt.substring(0, 10)}</span>


            </Card>






        </>
    )
}

export default NewsItem