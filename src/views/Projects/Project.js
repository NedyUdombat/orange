import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";

import { getSingleProject, deleteProject } from "../../reducers/project";

import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Summary from "./Summary";
import Survey from "./Survey";
import Team from "./Team";
import ExecutionPlan from "./ExecutionPlan";
import Budget from "./Budget";

const SapsProjectContainer = styled.div`
  .sapsHeader {
    font-style: normal;
    font-size: 36px;
    line-height: 54px;
    color: #a4d4ae;
  }

  .sapsTable {
    width: 1000px;
    border: 0.5px solid #7fcd91;
    border-left: none;
    border-right: none;
  }

  .borderLine {
    height: 85.19px;
    border-right: 1px solid #7fcd91;
  }

  .borderLineLeft {
    height: 85.19px;
    border-left: 1px solid #7fcd91;
  }

  .deleteProjectText {
    position: relative;
    right: -58.8rem;
    top: -21px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    /* margin-right: -200px; */
    color: #dc4343;
    transform: matrix(1, 0.01, -0.01, 1, 0, 0);
  }

  .react-tabs__tab-list {
    margin-left: 2rem !important;
  }
`;

const Project = props => {
  const {
    history,
    project,
    projects,
    deleteProject,
    match: {
      params: { id }
    }
  } = props;
  const [newProjectView, setNewProjectView] = React.useState(false);

  React.useEffect(() => {
    const fetchSingleProject = async () => {
      await props.getSingleProject(id);
    };

    fetchSingleProject();
  }, []);

  const toggleNewProjectView = () => {
    setNewProjectView(!newProjectView);
  };

  return (
    <>
      <SideBar toggleNewProjectView={toggleNewProjectView} history={history} />
      <div className="relative md:ml-64 bg-white">
        <NavBar />
        {/* <div> */}
        <SapsProjectContainer className="relative bg-white md:pt-32 pb-32 pt-12">
          <Tabs>
            <TabList>
              <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                Summary
              </Tab>
              <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                Survey
              </Tab>
              <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                Team
              </Tab>
              <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                Execution plan
              </Tab>
              <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                Budget
              </Tab>
            </TabList>

            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <TabPanel className="w-full xl:w-8/12 mb-12 xl:mb-0 pr-4">
                <Summary
                  project={project}
                  history={history}
                  deleteProject={deleteProject}
                  projects={projects}
                />
              </TabPanel>
            </div>
            <TabPanel>
              <Survey />
            </TabPanel>
            <TabPanel>
              <Team />
            </TabPanel>
            <TabPanel>
              <ExecutionPlan />
            </TabPanel>
            <TabPanel>
              <Budget />
            </TabPanel>
          </Tabs>
        </SapsProjectContainer>
        {/* </div> */}
      </div>
    </>
  );
};

const mapStateToProps = ({
  project: { isLoading, status, project, projects }
}) => ({
  isLoading,
  status,
  project,
  projects
});

export default connect(mapStateToProps, { getSingleProject, deleteProject })(
  Project
);
