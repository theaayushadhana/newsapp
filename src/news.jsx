// // // src/News.js

// // import React, { useState, useEffect } from 'react';
// // import { Container, Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material';

// // const News = () => {
// //   const [articles, setArticles] = useState([]);

// //   useEffect(() => {
// //     fetchNews();
// //   }, []);

// //   const fetchNews = async () => {
// //     const apiKey = '3541743f05994988ab1b84e9349eb917'; 
// //     const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// //     try {
// //       const response = await fetch(apiUrl);
// //       const data = await response.json();
// //       setArticles(data.articles);
// //     } catch (error) {
// //       console.error('Error fetching news:', error);
// //     }
// //   };

// //   return (
// //     <Container>
// //       <Typography variant="h3" align="center" gutterBottom>
// //         Latest News
// //       </Typography>
// //       <Grid container spacing={3}>
// //         {articles.map((article, index) => (
// //           <Grid item xs={12} sm={6} md={4} key={index}>
// //             <Card>
// //               <CardContent>
// //                 <Typography variant="h6" gutterBottom>
// //                   {article.title}
// //                 </Typography>
// //                 <Typography variant="body2" color="textSecondary">
// //                   {article.description}
// //                 </Typography>
// //               </CardContent>
// //               <CardActions>
// //                 <Button size="small" color="primary" href={article.url} target="_blank">
// //                   Read More
// //                 </Button>
// //               </CardActions>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //   );
// // };

// // export default News;

// // src/News.js

// // import React, { useState, useEffect } from 'react';
// // import { Container, Grid, Typography, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';

// // const News = () => {
// //   const [articles, setArticles] = useState([]);

// //   useEffect(() => {
// //     fetchNews();
// //   }, []);

// //   const fetchNews = async () => {
// //     const apiKey = '3541743f05994988ab1b84e9349eb917'; 
// //     const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// //     try {
// //       const response = await fetch(apiUrl);
// //       const data = await response.json();
// //       setArticles(data.articles);
// //     } catch (error) {
// //       console.error('Error fetching news:', error);
// //     }
// //   };

// //   return (
// //     <Container>
// //       <Typography variant="h3" align="center" gutterBottom>
// //         Latest News
// //       </Typography>
// //       <Grid container spacing={3}>
// //         {articles.map((article, index) => (
// //           <Grid item xs={12} sm={6} md={4} key={index}>
// //             <Card>
// //               {article.urlToImage && (
// //                 <CardMedia
// //                   component="img"
// //                   height="200"
// //                   image={article.urlToImage}
// //                   alt={article.title}
// //                 />
// //               )}
// //               <CardContent>
// //                 <Typography variant="h6" gutterBottom>
// //                   {article.title}
// //                 </Typography>
// //                 <Typography variant="body2" color="textSecondary">
// //                   {article.description}
// //                 </Typography>
// //               </CardContent>
// //               <CardActions>
// //                 <Button size="small" color="primary" href={article.url} target="_blank">
// //                   Read More
// //                 </Button>
// //               </CardActions>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //   );
// // };

// // export default News;


// // src/News.js

// // import React, { useState, useEffect } from 'react';
// // import { Container, Grid, Typography, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';

// // const News = () => {
// //   const [articles, setArticles] = useState([]);

// //   useEffect(() => {
// //     fetchNews();
// //   }, []);

// //   const fetchNews = async () => {
// //     const apiKey = '3541743f05994988ab1b84e9349eb917'; // Replace with your NewsAPI key
// //     const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=${apiKey}`;

// //     try {
// //       const response = await fetch(apiUrl);
// //       const data = await response.json();
// //       setArticles(data.articles);
// //     } catch (error) {
// //       console.error('Error fetching news:', error);
// //     }
// //   };

// //   return (
// //     <Container>
// //       <Typography variant="h3" align="center" gutterBottom>
// //         हिन्दी समाचार
// //       </Typography>
// //       <Grid container spacing={3}>
// //         {articles.map((article, index) => (
// //           <Grid item xs={12} sm={6} md={4} key={index}>
// //             <Card>
// //               {article.urlToImage && (
// //                 <CardMedia
// //                   component="img"
// //                   height="200"
// //                   image={article.urlToImage}
// //                   alt={article.title}
// //                 />
// //               )}
// //               <CardContent>
// //                 <Typography variant="h6" gutterBottom>
// //                   {article.title}
// //                 </Typography>
// //                 <Typography variant="body2" color="textSecondary">
// //                   {article.description}
// //                 </Typography>
// //               </CardContent>
// //               <CardActions>
// //                 <Button size="small" color="primary" href={article.url} target="_blank">
// //                   पूरी खबर पढ़ें
// //                 </Button>
// //               </CardActions>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //   );
// // };

// // export default News;


// // src/News.js

// // import React, { useState, useEffect } from 'react';
// // import { Container, Grid, Typography, Card, CardContent, CardActions, Button, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, AppBar, Toolbar, Link, IconButton } from '@mui/material';
// // import { GitHub, LinkedIn } from '@mui/icons-material';

// // const News = () => {
// //   const [articles, setArticles] = useState([]);
// //   const [selectedArticle, setSelectedArticle] = useState(null);

// //   useEffect(() => {
// //     fetchNews();
// //   }, []);

// //   const fetchNews = async () => {
// //     const apiKey = '3541743f05994988ab1b84e9349eb917'; // Replace with your NewsAPI key
// //     const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=${apiKey}`;

// //     try {
// //       const response = await fetch(apiUrl);
// //       const data = await response.json();
// //       setArticles(data.articles);
// //     } catch (error) {
// //       console.error('Error fetching news:', error);
// //     }
// //   };

// //   const openFullDescription = (article) => {
// //     setSelectedArticle(article);
// //   };

// //   const closeFullDescription = () => {
// //     setSelectedArticle(null);
// //   };

// //   return (
// //     <>
// //       <AppBar position="static" color="primary">
// //         <Toolbar>
// //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //             हिन्दी समाचार
// //           </Typography>
// //           <IconButton
// //             color="inherit"
// //             component={Link}
// //             href="https://github.com/yourusername"
// //             target="_blank"
// //             rel="noopener"
// //           >
// //             <GitHub />
// //           </IconButton>
// //           <IconButton
// //             color="inherit"
// //             component={Link}
// //             href="https://www.linkedin.com/in/yourusername"
// //             target="_blank"
// //             rel="noopener"
// //           >
// //             <LinkedIn />
// //           </IconButton>
// //         </Toolbar>
// //       </AppBar>

// //       <Container>
// //         <Typography variant="h3" align="center" gutterBottom>
// //           Latest News
// //         </Typography>
// //         <Grid container spacing={3}>
// //           {articles.map((article, index) => (
// //             <Grid item xs={12} sm={6} md={4} key={index}>
// //               <Card>
// //                 {article.urlToImage && (
// //                   <CardMedia
// //                     component="img"
// //                     height="200"
// //                     image={article.urlToImage}
// //                     alt={article.title}
// //                   />
// //                 )}
// //                 <CardContent>
// //                   <Typography variant="h6" gutterBottom>
// //                     {article.title}
// //                   </Typography>
// //                   <Typography variant="body2" color="textSecondary" component="p">
// //                     {article.description}
// //                   </Typography>
// //                 </CardContent>
// //                 <CardActions>
// //                   <Button size="small" color="primary" onClick={() => openFullDescription(article)}>
// //                     View Full Description
// //                   </Button>
// //                 </CardActions>
// //               </Card>
// //             </Grid>
// //           ))}
// //         </Grid>

// //         {/* Dialog to display full article description */}
// //         <Dialog open={selectedArticle !== null} onClose={closeFullDescription} fullWidth maxWidth="md">
// //           {selectedArticle && (
// //             <>
// //               <DialogTitle>{selectedArticle.title}</DialogTitle>
// //               <DialogContent>
// //                 <Typography variant="body1">
// //                   {selectedArticle.description}
// //                 </Typography>
// //               </DialogContent>
// //               <DialogActions>
// //                 <Button onClick={closeFullDescription} color="primary">
// //                   Close
// //                 </Button>
// //               </DialogActions>
// //             </>
// //           )}
// //         </Dialog>

// //         {/* Footer */}
// //         <AppBar position="static" color="primary" sx={{ marginTop: 'auto' }}>
// //           <Toolbar>
// //             <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
// //               &copy; 2024 Your Company Name. All rights reserved.
// //             </Typography>
// //             <Link href="/terms" color="inherit" sx={{ marginRight: 2 }}>
// //               Terms of Use
// //             </Link>
// //             <Link href="/privacy" color="inherit" sx={{ marginRight: 2 }}>
// //               Privacy Policy
// //             </Link>
// //             <Link href="/contact" color="inherit">
// //               Contact Us
// //             </Link>
// //           </Toolbar>
// //         </AppBar>
// //       </Container>
// //     </>
// //   );
// // };

// // export default News;


// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Typography, Card, CardContent, CardActions, Button, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, AppBar, Toolbar, Link, IconButton } from '@mui/material';
// import { GitHub, LinkedIn } from '@mui/icons-material';

// const News = () => {
//   const [articles, setArticles] = useState([]);
//   const [selectedArticle, setSelectedArticle] = useState(null);

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const fetchNews = async () => {
//     const apiKey = '3541743f05994988ab1b84e9349eb917'; // Replace with your NewsAPI key
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=${apiKey}`;

//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setArticles(data.articles);
//     } catch (error) {
//       console.error('Error fetching news:', error);
//     }
//   };

//   const openFullDescription = (article) => {
//     setSelectedArticle(article);
//   };

//   const closeFullDescription = () => {
//     setSelectedArticle(null);
//   };

//   return (
//     <>
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
//             हिन्दी समाचार
//           </Typography>
//           <IconButton
//             color="inherit"
//             component={Link}
//             href="https://github.com/theaayushadhana/devAayushAdhana"
//             target="_blank"
//             rel="noopener"
//           >
//             <GitHub sx={{ color: 'black', width: '100%' }} />
//           </IconButton>
//           <IconButton
//             color="inherit"
//             component={Link}
//             href="https://www.linkedin.com/in/developer-aayush-368378315/"
//             target="_blank"
//             rel="noopener"
//           >
//             <LinkedIn sx={{ color: 'black', width: '100%' }} />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Container>
//         <Typography variant="h3" align="center" gutterBottom>
//           Latest News
//         </Typography>
//         <Grid container spacing={3}>
//           {articles.map((article, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card>
//                 {article.urlToImage && (
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={article.urlToImage}
//                     alt={article.title}
//                   />
//                 )}
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom>
//                     {article.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {article.description}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" color="primary" onClick={() => openFullDescription(article)}>
//                     View Full Description
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Dialog to display full article description */}
//         <Dialog open={selectedArticle !== null} onClose={closeFullDescription} fullWidth maxWidth="md">
//           {selectedArticle && (
//             <>
//               <DialogTitle>{selectedArticle.title}</DialogTitle>
//               <DialogContent>
//                 <Typography variant="body1">
//                   {selectedArticle.description}
//                 </Typography>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={closeFullDescription} color="primary">
//                   Close
//                 </Button>
//               </DialogActions>
//             </>
//           )}
//         </Dialog>

//         {/* Footer */}
//         <AppBar position="static" color="primary" sx={{ marginTop: 'auto' }}>
//           <Toolbar>
//             <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
//               &copy; 2024 creators Aayush Adhana
//             </Typography>
//             <Link href="/terms" color="inherit" sx={{ marginRight: 2 }}>
//               Terms of Use
//             </Link>
//             <Link href="/privacy" color="inherit" sx={{ marginRight: 2 }}>
//               Privacy Policy
//             </Link>
//             <Link href="/contact" color="inherit">
//               Contact Us
//             </Link>
//           </Toolbar>
//         </AppBar>
//       </Container>
//     </>
//   );
// };

// export default News;
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Card, CardContent, CardActions, Button, CardMedia, AppBar, Toolbar, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const apiKey = '3541743f05994988ab1b84e9349eb917'; // Replace with your NewsAPI key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            हिन्दी समाचार
          </Typography>
          <IconButton
            color="inherit"
            component={Link}
            href="https://github.com/theaayushadhana/devAayushAdhana"
            target="_blank"
            rel="noopener"
          >
            <GitHub sx={{ color: 'black', width: '100%' }} />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href="https://www.linkedin.com/in/developer-aayush-368378315/"
            target="_blank"
            rel="noopener"
          >
            <LinkedIn sx={{ color: 'black', width: '100%' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Latest News
        </Typography>
        <Grid container spacing={3}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                {article.urlToImage && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.urlToImage}
                    alt={article.title}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={article.url}
                    target="_blank"
                    rel="noopener"
                  >
                    पूरी खबर पढ़ें
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <AppBar position="static" color="primary" sx={{ marginTop: 'auto' }}>
          <Toolbar>
            <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
              &copy; 2024 creators Aayush Adhana
            </Typography>
            <Link href="/terms" color="inherit" sx={{ marginRight: 2 }}>
              Terms of Use
            </Link>
            <Link href="/privacy" color="inherit" sx={{ marginRight: 2 }}>
              Privacy Policy
            </Link>
            <Link href="/contact" color="inherit">
              Contact Us
            </Link>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default News;
