import { MainContent } from "../../components/MainContent";
import { Title } from "../../components/Title";

export const ProjectsSection = () => {
  return (
    <>
      <Title>Projects</Title>
      <MainContent
        company={
          <a href="https://github.com/TulioPintoNeto/equilibrio-app/">
            <i className="fab fa-linkedin" /> TulioPintoNeto/equilibrio-app
          </a>
        }
        content={
          <p className="mb-0 description text-justify">
            This is a passion project I crafted for a friend, highlighting my
            use of Firebase for authentication and database management.
          </p>
        }
        endDate={new Date()}
        includeDuration
        initialDate={new Date("2023-06-03")}
        title="Gym Management - Firebase"
      />
    </>
  );
};
