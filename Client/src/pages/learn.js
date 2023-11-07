import React, { Component } from 'react';
import Navbar from "../Mycomps/Navbar";
import Footerc from "../Mycomps/Footer";
import "../stylesheets/learn.css";

class StockMarketLearn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessons: [
        {
          id: 1,
          title: 'Introduction to Stock Markets',
          
          link: 'https://www.investopedia.com/terms/s/stockmarket.asp',
        },
        {
          id: 4,
          title: 'How to invest in Stocks',
          
          link: 'https://www.investopedia.com/articles/basics/06/invest1000.asp',
        },
        {
          id: 5,
          title: 'Introduction to Stocks and Markets',
          
          link: 'https://zerodha.com/varsity/module/introduction-to-stock-markets/',
        },
        {
          id: 2,
          title: 'Stock Market Analysis',
          
          link: 'https://www.investopedia.com/terms/s/stock-analysis.asp#:~:text=Stock%20analysis%20involves%20comparing%20a,growing%2C%20stable%2C%20or%20deteriorating.',
        },
        {
          id: 3,
          title: 'Investing Strategies',
         
          link: 'https://www.fool.com/how-to-invest',
        },
        // Add more lessons as needed
      ],
      financeLinks: [
        {
          title: 'Finance Basics',
          url: 'https://www.khanacademy.org/college-careers-more/personal-finance',
        },
        {
          title: 'What are Financial Resources',
          url: 'https://online.york.ac.uk/financial-resources-what-are-they-and-how-are-they-managed/',
        },
        {
          title: 'Financial Planning',
          url: 'https://smartasset.com/financial-advisor/financial-planning-explained',
        },
        {
          title: 'Understanding Stocks',
          url: 'https://dfi.wa.gov/financial-education/information/basics-investing-stocks#:~:text=Stocks%20are%20a%20type%20of,shares%20on%20the%20stock%20market.',
        },
        {
          title: 'Stock Market Books',
          url: 'https://www.investopedia.com/terms/b/bondmarket.asp#:~:text=Bond%20Market%20vs.-,Stock%20Market,to%20any%20return%20of%20capital.',
        },
        // Add more finance-related links
      ],
      financeBooks: [ // Added a section for Finance related Books
      {
        title: 'The Intelligent Investor',
        author: 'Benjamin Graham',
        description: 'This classic book is often referred to as the "bible of value investing." It offers timeless wisdom on how to approach the stock market.',
      },
      {
        title: 'A Random Walk Down Wall Street',
        author: 'Burton G. Malkiel',
        description: 'This book introduces the concept of the efficient market hypothesis and explores various investment strategies.',
      },
     
      
      {
        title: 'Stocks for the Long Run',
        author: 'Jeremy J. Siegel',
        description: 'This book offers a historical perspective on the performance of stocks as an asset class over the long term.',
      },
      
      {
        title: 'Common Stocks and Uncommon Profits',
        author: 'Philip Fisher',
        description: 'Fisher discusses his investment philosophy and criteria for selecting outstanding companies.',
      },
      {
        title: 'How to Make Money in Stocks',
        author: 'William J. O\'Neil',
        description: 'O\'Neil introduces his approach to stock trading, emphasizing technical analysis and chart patterns.',
      },
      {
        title: 'The Essays of Warren Buffett: Lessons for Corporate America',
        author: 'Warren Buffett and Lawrence A. Cunningham',
        description: 'This book compiles the annual letters to shareholders from Warren Buffett, providing valuable insights into his investment philosophy.',
      },
     
     
    ],
      youtubeLinks: [
        {
          title: 'Stock Market Basics',
          url: 'https://www.youtube.com/watch?v=Xn7KWR9EOGQ',
        },
        {
          title: 'How to Start Investing',
          url: 'https://www.youtube.com/watch?v=3UF0ymVdYLA',
        },
        {
          title: 'Advanced Stock Analysis',
          url: 'https://www.youtube.com/watch?v=eynxyoKgpng',
        },
        // Add more YouTube links
      ],
      popularSites: [
        {
          title: 'Yahoo Finance',
          url: 'https://finance.yahoo.com/',
        },
        {
          title: 'Bloomberg',
          url: 'https://www.bloomberg.com/markets',
        },
        {
          title: 'CNBC',
          url: 'https://www.cnbc.com/business/',
        },
        {
          title: 'NASDAQ',
          url: 'https://www.nasdaq.com/',
        },
        {
          title: 'Investing',
          url: 'investing.com',
        },
        // Add more popular stock-related websites
      ],
    };
  }

 
  render() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'LMRoman, serif', // Set the font to "LMRoman"
      color: 'white',
      textAlign: 'center', // Align everything to the center
    };
    const blackContainerStyle = {
      background: 'black',
      width: '100%',
      padding: '10px',
      textAlign: 'center',
    };

    const blackHeadingStyle = {
      fontSize: '42px',
      marginBottom:'20px' ,
      marginTop:'0px' ,
      
     fontfamily: 'Montserrat', 
      height:'20px' ,
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    };
    
    const headerStyleBlack = {
      background: 'black',  
      
      width: '100%',
     
      alignItems: 'center' ,
      height:'50px' , 
      fontSize: '32px', // Increase the font size for headings to 32px
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      
    };
    
    const headerStyleDarkGrey = {
      background: 'darkgrey',
      fontSize: '32px', // Increase the font size for headings to 32px
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    };

    const lessonContainerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    };

    const lessonStyle = {
      padding: '12px',
      width: '30%',
      textAlign: 'center',
      margin: '10px',
      font: 'LMRoman, serif', // Set the font to "LMRoman"
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    };
  
    const linkStyle = {
      fontSize: '22px',
      color: '#007bff',
      textDecoration: 'none',
    };
    
    const horizontalBookListStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    };

    const horizontalBookItemStyle = {
      width: '30%',
      textAlign: 'center',
      margin: '20px',
      font: 'LMRoman, serif',
    };

    const bigHeadingStyle = {
      fontSize: '38px', // Increase the font size for headings to 32px
      marginBottom: '4px', // Add some spacing below headings
      fontWeight: 'bold', // Make headings bold
      textDecoration: 'underline', // Add underline to headings
    };


    return (
    <div>
      <Navbar />
      <div>
        <header style={blackContainerStyle}>
          <h1 style={blackHeadingStyle}>LEARN</h1>
        </header>
        <div style={containerStyle}>
          <header style={headerStyleBlack}>
            <h1 style={bigHeadingStyle}>Stock Market Learning</h1>
          </header>
          <div className="lessons" style={horizontalBookListStyle}>
            {this.state.lessons.map((lesson) => (
              <div key={lesson.id} style={lessonStyle}>
                <h2 style={horizontalBookListStyle}>
                  <a href={lesson.link} style={linkStyle} target="_blank" rel="noopener noreferrer">
                    {lesson.title}
                  </a>
                </h2>
                <p style={{ fontSize: '18px' }}>{lesson.content}</p>
              </div>
            ))}
          </div>
          <div className="finance-links">
            <header style={headerStyleBlack}>
              <h2 style={{ fontSize: '24px', ...bigHeadingStyle }}>Finance Resources</h2>
            </header>
            <div style={horizontalBookListStyle}>
              {this.state.financeLinks.map((link, index) => (
                <div key={index} style={horizontalBookItemStyle}>
                  <h2 style={horizontalBookListStyle}></h2>
                  <a href={link.url} style={linkStyle} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="finance-books">
            <header style={headerStyleBlack}>
              <h2 style={{ fontSize: '24px', ...bigHeadingStyle }}>Finance Related Books</h2>
            </header>
            <div style={horizontalBookListStyle}>
              {this.state.financeBooks.map((book, index) => (
                
                <div key={index} style={horizontalBookItemStyle}>
                  <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{book.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="youtube-links">
            <header style={headerStyleBlack}>
              <h2 style={{ fontSize: '24px', ...bigHeadingStyle }}>YouTube Learning</h2>
            </header>
            <div style={horizontalBookListStyle}>
              {this.state.youtubeLinks.map((link, index) => (
                <div key={index} style={horizontalBookItemStyle}>
                  <a href={link.url} style={linkStyle} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="popular-sites">
            <header style={headerStyleBlack}>
              <h2 style={{ fontSize: '24px', ...bigHeadingStyle }}>Popular Stock-Related Websites</h2>
            </header>
            <div style={horizontalBookListStyle}>
              {this.state.popularSites.map((site, index) => (
                
                <div key={index} style={horizontalBookItemStyle}>
                  <a href={site.url} style={linkStyle} target="_blank" rel="noopener noreferrer">
                    {site.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footerc />
    </div>
    );
  }
}

export default StockMarketLearn;