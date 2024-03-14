import React, { useEffect, useState } from "react";
// import { PhoneIcon, AddIcon, WarningIcon, EmailIcon, LinkIcon, SearchIcon } from '@chakra-ui/icons';
import { Image, Card, CardBody, Stack, Heading, Text, CardFooter, Button, Flex, Box, Grid } from "@chakra-ui/react";

const BASE_URL = `https://blogify-be-1.onrender.com`
function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            try {
                let res = await fetch(`${BASE_URL}/blog`)
                let blogData = await res.json()
                let actualData = blogData.data;
                console.log('blogData :', actualData);
                setData(actualData);
            } catch (error) {
                console.log('Error while fetching the data...');
            }
        }
        getData()
    }, [])

    function BlogCard({ author, content, imgSrc, title }) {
        return (
            <>
                <Card
                    direction={["column", "column", "row"]}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={imgSrc}
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='md'>{title}</Heading>

                            <Text py='2'>
                                {content}
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='green'>
                                Read More
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </>
        )
    }
    return (
        <>

            {/* the flower image */}

            <Box boxSize='1000px' width="100%" height="500px" margin="auto">
                <Image
                    src='https://1.bp.blogspot.com/-CSWOvIFyEgk/WVEWWlcuknI/AAAAAAAA66k/BXejRz8P14oel7A9elDG0ug0h5GOpGiiwCLcBGAs/w1200-h630-p-k-no-nu/AdobeStock_112666398.jpeg'
                    alt='Dan Abramov'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Box>

            <Heading>Your Blogs Here</Heading>

            <Box marginTop="40px" width="95%" marginLeft="3%" padding="20px">
                <Grid gridTemplateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]} gap={["5px", "10px", "15px"]}>
                    {data.map((blog) => <BlogCard title={blog.title} content={blog.content} author={blog.author} imgSrc={blog.imgSr} />)}
                </Grid>
            </Box>




        </>
    )
}
export { Home }