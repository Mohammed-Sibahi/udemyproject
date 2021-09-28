// each component used must be imported
import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";

import { getAllBlogs } from "lib/api";
// A function that displays index page
export default function Home({ blogs }) {
  //we can define props in 2 ways: Home(props, message) or Home({message})
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        {/*<Col md="10">
          <CardListItem />
        </Col>*/}
        { blogs.map(blog => 
      
        <Col key={blog.slug} md="4">
          <CardItem 
          title={blog.title}
          subtitle={blog.subtitle} 
          />
        </Col>
        )
        }
      </Row>
    </PageLayout>
  );
}

// this function is called during the build (build time)
// provides props to your page
// it will create static page
export async function getStaticProps() {
  console.log('Calling getStaticProps');
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    },
  };
}
