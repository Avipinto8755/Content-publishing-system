import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          Pinto <i className="bi bi-fan"></i> App <br />
          <br /> About
        </>
      }
      description=" A website has been developed which can create different cards in all the fields it chooses, advertising different professionals and businesses as well as managing them in the easiest and fastest way.
      The website was developed in 2023 and is updated from time to time."
    />
  );
};

export default About;
