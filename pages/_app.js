import React from 'react';
import '../scss/index.scss';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import makeStore from '../store';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

class Project extends App {
	render() {
		const { Component, store } = this.props;

    return (
			<Container>
				<Provider store={store}>
					<Head>
						<meta charSet="utf-8" />
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
						<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
						<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
					</Head>
					<Layout>
						<Component />
					</Layout>
				</Provider>
			</Container>
		)
	}
}

export default withRedux(makeStore)(Project);