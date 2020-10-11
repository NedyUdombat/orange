import React from "react";
import styled from "styled-components";

import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

import profileImage from "../../assets/Mask Group.png";

const ProfileContainer = styled.div`
  /* border: 1px solid #7fcd91; */
  /* border-radius: 10px; */

  .card-header-text {
    position: absolute;
    width: 116px;
    height: 36px;
    left: 30px;
    top: 526px;

    /* font-family: Poppins;
font-style: normal; */
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    color: #5b5656;
  }

  .table-card-container {
    /* border: 1px solid #7fcd91; */
    width: 1000px;
    /* height: 447px; */
    border-radius: 4px;
    margin-top: 4.5rem;
    /* margin-left: 1rem; */
  }

  .details-card-table {
    width: 1191px;
    /* border: 0.5px solid #7fcd91; */
    border-left: none;
    border-right: none;
  }

  .details-card-table h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #5b5656;
  }
`;

const Profile = (props) => {
  return (
    <>
      <SideBar />
      <ProfileContainer
        className="mx-8 relative md:ml-64 bg-white flex flex-col md:flew-wrap"
        style={{ marginLeft: "18rem", marginRight: "2rem", height: "40vw" }}
      >
        {/* <h1 className="card-header-text">Details</h1> */}
        <div
          className="table-card-container w-full xl:w-9/12 mb-12 xl:mb-0 pr-4"
          style={{ marginTop: "9rem" }}
        >
          <NavBar />
          {/* <div className="py-10" style={{ paddingLeft: "1rem" }}>
          <p>Decription:</p>
          <h5>
            The project is to ascetain the custlomer satisfaction level of the
            clients of SAPS
          </h5>
        </div> */}
          <div>
            <table className="details-card-table table-fixed ml-4">
              {/* <thead> */}
              <tr>
                <td className="w-2/4">
                  <div className="">
                    <img
                      alt=""
                      src={profileImage}
                      //   style={{ position: "relative", left: "10rem" }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-2/4">
                  <div className="">
                    <h5>Sandra Omilo</h5>
                    <p>sandra.omilo@vlp.com</p>
                  </div>
                </td>
                <td className="py-6 w-2/4">
                  <div>
                    <p>Phone Number:</p>
                    <h4>08045578995</h4>
                  </div>
                </td>
                <td className="py-6 w-2/4">
                  <div>
                    <p>E-mail:</p>
                    <h4>Yasminolabanjo@gmail.com </h4>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-2/4">
                  <div className="">
                    <p>Executive sponsor:</p>
                    <h4>Pearl Bawa</h4>
                  </div>
                </td>
                <td className="py-6 w-2/4">
                  <div>
                    <p>Phone Number:</p>
                    <h4>08054478965 </h4>
                  </div>
                </td>
                <td className="py-6 w-2/4">
                  <div>
                    <p>E-mail:</p>
                    <h4>earlbawa@gmail.com</h4>
                  </div>
                </td>
              </tr>
              {/* </thead> */}
            </table>
          </div>
        </div>
      </ProfileContainer>
    </>
  );
};

export default Profile;
