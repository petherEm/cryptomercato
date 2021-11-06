import React from 'react';
import { Route, Link, Routes, Switch } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import { Exchanges } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage />}>
                                
                            </Route>
                            <Route path="/exchanges" element={<Exchanges />}>
                                
                            </Route>
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />}>
                                
                            </Route>
                            <Route path="/crypto/:coinId" element={<CryptoDetails />}>
                                
                            </Route>
                            <Route path="/news" element={<News />}>
                             
                            </Route>
                        </Routes>
                    </div>
                </Layout>
                
            
                <div className="footer"  >
                    <Typography.Title level={5} style={{ color: "white", textAlign: "center"}}>
                        Adapted by <a href="https://piotrmaciejewski.com">Piotr Maciejewski</a><br />
                        from <a href="https://www.completepathtojavascriptmastery.com" target="_blank">JavaScriptMastery</a>
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App;
