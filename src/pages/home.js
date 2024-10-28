import { AboutUs, Admission, Carousel, Courses } from "@/components";
import Layout from "@/layout";

export default function Home() {
  return (
    <>
      <Layout>
        {/* Carousel */}
        <Carousel
          title={"Our Philosophy"}
          subTitle={"Nurturing Potential Building Character"}
        >
          <Courses />
        </Carousel>

        {/* About us */}
        <AboutUs />

        {/* Admission */}
        <Admission />

        {/* News and updates */}
        {/* <News/> */}

        {/* Questions */}
        {/* <Questions/> */}
      </Layout>
    </>
  );
}
