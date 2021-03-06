import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

import Header from "./header";
import Settings from "./settings";

import Modal from "./Modal";
import Toggle from "./Toggle";
import withStorage from "./withStorage";

import GlobalStyles from "./styles/GlobalStyles";
import Container from "./styles/container";

const Layout = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                label
                factor
              }
            }
          }
        }
      }
    `}
  >
    {({ allMarkdownRemark, site }) => {
      const options = allMarkdownRemark.edges.reduce((acc, edge) => {
        const option = {
          value: edge.node.frontmatter.factor,
          label: edge.node.frontmatter.label
        };
        return acc.concat(option);
      }, []);
      return (
        <>
          <GlobalStyles />
          <Helmet title={site.siteMetadata.title}>
            <html lang="en" />
          </Helmet>
          <PageWrapper>
            <Toggle>
              {({ isOn, toggle }) => (
                <>
                  <Header
                    openSettings={toggle}
                    clearOutputTable={props.clearOutputTable}
                  />
                  <Modal show={isOn} close={toggle}>
                    <Settings
                      options={options}
                      updateProductList={props.updateStorage}
                      products={props.data}
                    />
                  </Modal>
                </>
              )}
            </Toggle>
            <Content>
              <main>{children({ products: props.data })}</main>
            </Content>
            <Footer>© {new Date().getFullYear()}</Footer>
          </PageWrapper>
        </>
      );
    }}
  </StaticQuery>
);

export default withStorage(Layout);

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled(Container)`
  padding: 0px 1.0875rem 1.45rem;
  flex: 1 0;
`;

const Footer = styled.footer`
  text-align: center;
`;
