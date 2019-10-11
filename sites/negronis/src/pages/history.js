import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';

export const query = graphql`
  query {
    image: file(name: { eq: "negroni-geoff-peters" }) {
      cloudinary: childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`;

const History = ({ data }) => (
  <Layout>
    <Image fluid={data.image.cloudinary.fluid} alt="Negroni." />
    <h1>The History of the Negroni</h1>
    <p>
      The Negroni is a variation on a classic coctail called an Americano, which
      is a mix of Campari, sweet vermouth, and club soda.
    </p>
    <p>
      In 1919, Count Camillo Negroni was on the hunt for a stiff drink. His work
      as a rodeo clown in the American Wild West had given him a taste for
      stronger stuff than the average Italian bartender had to offer.
    </p>
    <p>
      At the count’s request, a Florence bartender swapped out the club soda in
      the Americano for gin, and the result has lived on with the count’s name
      since.
    </p>
    <h2>The recent rise in popularity for Negronis</h2>
    <p>
      Recently, the Negroni has grown in popularity due to a resurgence in the
      popularity of craft cocktails, a revival of interest in gin, and some
      clever marketing from Campari, who acquired the Wild Turkey distillery in
      2009 and declared 2011 “The Year of the Negroni” to expand its US
      marketing efforts.
    </p>
    <hr />
    <p>
      <small>
        Photo by{' '}
        <a rel="nofollow" href="https://www.flickr.com/people/54359128@N00">
          Geoff Peters
        </a>{' '}
        from Vancouver, BC, Canada -{' '}
        <a
          rel="nofollow"
          href="https://www.flickr.com/photos/54359128@N00/3383453027/"
        >
          Negroni (drink)
        </a>
        ,{' '}
        <a
          href="https://creativecommons.org/licenses/by/2.0"
          title="Creative Commons Attribution 2.0"
        >
          CC BY 2.0
        </a>
        ,{' '}
        <a href="https://commons.wikimedia.org/w/index.php?curid=9572176">
          Link
        </a>
      </small>
    </p>
  </Layout>
);

export default History;
