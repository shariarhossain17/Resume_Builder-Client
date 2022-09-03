import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Login from "./Components/Navbar/Login";
import Signup from "./Components/Navbar/Signup";
import AllArticle from "./Pages/CarrerCounceling/AllArticle/AllArticle";
import CarrerHeader from "./Pages/CarrerCounceling/CarrerHeader";
import Stories from "./Pages/CarrerCounceling/InspiringStories/Stories";
import Interview from "./Pages/CarrerCounceling/InterviewPrep/Interview";
import Home from "./Pages/Home/Home";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MessengerCustomerChat from "react-messenger-customer-chat";
import RequireAdmin from "./Pages/Authentication/RequireAdmin";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import RequireExpert from "./Pages/Authentication/RequireExpert";
import RequireNonAdmin from "./Pages/Authentication/RequireNonAdmin";
import CarrerConselling from "./Pages/CarrerCounceling/CarrerConselling";
import CarrerPayment from "./Pages/CarrerCounceling/CarrerPayment";
import CheckoutForm from "./Pages/CarrerCounceling/CheckoutForm";
import CarrerCv from "./Pages/CarrerCounceling/CvWriting/CarrerCv";
import PaymentInformation from "./Pages/CarrerCounceling/PaymentInformation";
import PaymentOption from "./Pages/CarrerCounceling/PaymentOption";
import CarrerResume from "./Pages/CarrerCounceling/ResumeWriting/CarrerResume";
import CoverLatterTemplate from "./Pages/CoverLatterTemplate/CoverLatterTemplate";
import HowWriteCoverLetter from "./Pages/CoverLatterTemplate/CoverLetter/HowWriteCoverLetter";
import CvTemplate from "./Pages/CvTemplate/CvTemplate";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Alladmin from "./Pages/Dashboard/ALL-Admin/Alladmin";
import AllExpert from "./Pages/Dashboard/All-Expert/AllExpert";
import AllUser from "./Pages/Dashboard/All-User/AllUser";
import BookingService from "./Pages/Dashboard/All-User/BookingService/BookingService";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import WriteBlog from "./Pages/Dashboard/ExpertWritter/WriteBlog";
import EditBlog from "./Pages/Dashboard/MyBlog/EditBlog";
import MyBlog from "./Pages/Dashboard/MyBlog/MyBlog";
import UserOrder from "./Pages/Dashboard/UserOrder/UserOrder";
import AdditionalSkills from "./Pages/EditorComponetn/CommonEditorComponent/AdditionalSkills";
import Certifications from "./Pages/EditorComponetn/CommonEditorComponent/Certifications";
import ContactDetails from "./Pages/EditorComponetn/CommonEditorComponent/ContactDetails";
import DragAndDropFile from "./Pages/EditorComponetn/CommonEditorComponent/DragAndDropFile";

import EditorCareerObjective from "./Pages/EditorComponetn/CommonEditorComponent/EditorCareerObjective";
import Education from "./Pages/EditorComponetn/CommonEditorComponent/Education";
import Experience from "./Pages/EditorComponetn/CommonEditorComponent/Experience";
import Languages from "./Pages/EditorComponetn/CommonEditorComponent/Languages";
import Reference from "./Pages/EditorComponetn/CommonEditorComponent/Reference";
import ShouldAddReference from "./Pages/EditorComponetn/CommonEditorComponent/ShouldAddReference";
import Start from "./Pages/EditorComponetn/CommonEditorComponent/Start";
import EditResume from "./Pages/EditorComponetn/EditResume";

import CoverLetter from "./Pages/Home/Templates/CoverLetter";
import Cv from "./Pages/Home/Templates/Cv";
import Resume from "./Pages/Home/Templates/Resume";
import Templates from "./Pages/Home/Templates/Templates";
import ResumeTemplate from "./Pages/ResumeTemplate/ResumeTemplate";

// Dummy templates
import Resume1 from "./Pages/EditorComponetn/Templates/Resume1/Resume1";
import Resume2 from "./Pages/EditorComponetn/Templates/Resume2/Resume2";
import Resume3 from "./Pages/EditorComponetn/Templates/Resume3/Resume3";
import Resume4 from "./Pages/EditorComponetn/Templates/Resume4/Resume4";
import Resume5 from "./Pages/EditorComponetn/Templates/Resume5/Resume5";
import Resume6 from "./Pages/EditorComponetn/Templates/Resume6/Resume6";
import Resume7 from "./Pages/EditorComponetn/Templates/Resume7/Resume7";
// import Resume8 from "./Pages/EditorComponetn/Templates/Resume8/Resume8";
// import Resume9 from "./Pages/EditorComponetn/Templates/Resume9/Resume9";
// import Resume10 from "./Pages/EditorComponetn/Templates/Resume10/Resume10";

import SingleBlog from "./Pages/CarrerCounceling/AllArticle/SingleBlog";
import CoverLetterInput from "./Pages/CoverLatterTemplate/CoverLetter/CoverLetterInput";
import CoverLetterTemplate from "./Pages/CoverLatterTemplate/CoverLetter/CoverLetterTemplate";
import Chat from "./Pages/Dashboard/Chat/Chat/Chat";
import Expert from "./Pages/Dashboard/Expert/Expert";
import EditProfile from "./Pages/Dashboard/Profile/EditProfile";
import Profile from "./Pages/Dashboard/Profile/Profile";
import Quiz from "./Pages/Quiz/Quiz";
import QuizRules from "./Pages/Quiz/QuizRules";
import QuizStart from "./Pages/Quiz/QuizStart";

import { createContext, useState } from "react";
import auth from "./firebase.init";
import UserInformation from "./Hook/UserInformation";
import AddProjects from "./Pages/EditorComponetn/CommonEditorComponent/AddProjects";
import SocialNetwork from "./Pages/EditorComponetn/CommonEditorComponent/SocialNetwork";
import Resume8 from "./Pages/EditorComponetn/Templates/Resume8/Resume8";
import AddQuiz from "./Pages/Quiz/AddQuiz";
import QuizResult from "./Pages/Quiz/QuizResult";
import LeaderBoard from "./Pages/Quiz/LeaderBoard";

const stripePromise = loadStripe(
  "pk_test_51L0e7DJVuUKdOSgodXlRxjzrt9f8fKWzD9Jum98GewskqXtaZ9Mx725bepiQ7zjAuEpcALdbkJEVHlNIG0RTIanM00m74yy2rn"
);

export const userContext = createContext();
function App() {
  const [user] = useState(auth);
  const [users, setUsers] = UserInformation();
  return (
    <div className="app">
      <userContext>
        <Routes>
          {/* Nested Routing for Templates Section of our Homepage */}
          <Route path="/" element={<Home />}>
            <Route index element={<Resume />}></Route>
            <Route path="cv" element={<Cv />}></Route>
            <Route path="coverLetter" element={<CoverLetter />}></Route>
          </Route>
          {/* End of Nested Routing for Templates Section of our Homepage */}

          <Route path="/home" element={<Home />}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login />}></Route>

          {/* nested route career counselling */}
          <Route path="/career-counselling" element={<CarrerHeader />}>
            <Route index element={<CarrerConselling />}></Route>
            <Route
              path="all-article"
              element={
                <RequireAuth>
                  <AllArticle />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="blog/:id"
              element={
                <RequireAuth>
                  <SingleBlog />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="resume-write"
              element={
                <RequireAuth>
                  <CarrerResume />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="cv-write"
              element={
                <RequireAuth>
                  <CarrerCv />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="inspiring-stories"
              element={
                <RequireAuth>
                  <Stories />
                </RequireAuth>
              }
            />
            <Route
              path="interview-preparation"
              element={
                <RequireAuth>
                  <Interview />
                </RequireAuth>
              }
            />
          </Route>

          <Route path="template" element={<Templates />} />
          <Route path="cvTemplate" element={<CvTemplate />}></Route>
          <Route path="/resumeTemplate" element={<ResumeTemplate />}></Route>
          <Route path="/coverLatter" element={<CoverLatterTemplate />}></Route>

          {/* Resume Editor route */}
          <Route
            path="/resume-builder/how-to-start"
            element={<Start />}
          ></Route>
          <Route
            path="/resume-builder/drag-and-drop-file"
            element={<DragAndDropFile />}
          ></Route>
          <Route path="/resume-builder/:_id" element={<EditResume />}>
            <Route index element={<ContactDetails />}></Route>
            <Route path="editor-contact" element={<ContactDetails />}></Route>
            <Route path="social-network" element={<SocialNetwork />}></Route>
            <Route path="editor-experience" element={<Experience />}></Route>
            <Route path="editor-education" element={<Education />}></Route>
            <Route path="certifications" element={<Certifications />}></Route>
            <Route
              path="additional-skills"
              element={<AdditionalSkills />}
            ></Route>
            <Route path="add-projects" element={<AddProjects />}></Route>
            <Route path="languages" element={<Languages />}></Route>
            <Route
              path="career-objective"
              element={<EditorCareerObjective />}
            ></Route>
            <Route
              path="reference/should_add_reference"
              element={<ShouldAddReference />}
            ></Route>
            <Route path="reference" element={<Reference />}></Route>

            {/* <Route path="template1" element={<Template1/>}></Route> */}
            {/* Dummy Templates section route */}
            <Route path="template1" element={<Resume1 />} />
            {/* End of Dummy templates section */}

            {/* Dummy Templates section route */}
            <Route path="template1" element={<Resume1 />} />
            <Route path="template2" element={<Resume2 />} />
            <Route path="template3" element={<Resume3 />} />
            <Route path="template4" element={<Resume4 />} />
            <Route path="template5" element={<Resume5 />} />
            <Route path="template6" element={<Resume6 />} />
            <Route path="template7" element={<Resume7 />} />
            <Route path="template8" element={<Resume8 />} />
            {/* <Route path="template8" element={<Resume8/>} />
          <Route path="template9" element={<Resume9/>} />
          <Route path="template10" element={<Resume10/>} /> */}

            {/* End of Dummy templates section */}
          </Route>

          {/* cover letter route */}
          <Route
            path="/how-write-cover-letter"
            element={<HowWriteCoverLetter />}
          ></Route>

          {/* payment route */}

          <Route
            path="/resume-builder/career-counselling/:id"
            element={<CarrerPayment />}
          >
            <Route index element={<PaymentInformation />}></Route>
            <Route path="method" element={<PaymentOption />}></Route>
            <Route
              path="checkout-form"
              element={
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              }
            ></Route>
          </Route>

          {/* cover letter */}
          <Route
            path="/coverLetterInput"
            element={
              <RequireAuth>
                <CoverLetterInput />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/coverLetter/:id"
            element={
              <RequireAuth>
                <CoverLetterTemplate />
              </RequireAuth>
            }
          ></Route>
          {/* Quiz compo */}
          <Route
            path="/quizStart"
            element={
              <RequireAuth>
                <QuizStart />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/quizRules"
            element={
              <RequireAuth>
                <QuizRules />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/quiz"
            element={
              <RequireAuth>
                <Quiz />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/quizResult/:email"
            element={
              <RequireAuth>
                <QuizResult />
              </RequireAuth>
            }
          ></Route>

          {/* admin dashboard */}
          {/* Dashboard */}

          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<Profile />}></Route>
            <Route path="edit-profile" element={<EditProfile />}></Route>
            <Route path="leaderBoard" element={<LeaderBoard />}></Route>
            <Route
              path="all-user"
              element={
                <RequireAdmin>
                  <AllUser />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="all-admin"
              element={
                <RequireAdmin>
                  <Alladmin />
                </RequireAdmin>
              }
            ></Route>
            <Route path="chat" element={<Chat />}></Route>
            <Route
              path="all-expert"
              element={
                <RequireAdmin>
                  <AllExpert />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="booking-service"
              element={
                <RequireAdmin>
                  <BookingService />
                </RequireAdmin>
              }
            ></Route>
            {/* expert dashboard */}

            <Route
              path="write-blog"
              element={
                <RequireExpert>
                  <WriteBlog />
                </RequireExpert>
              }
            ></Route>
            <Route
              path="my-blog-post"
              element={
                <RequireExpert>
                  <MyBlog />
                </RequireExpert>
              }
            ></Route>
            <Route
              path="edit-blog-post/:id"
              element={
                <RequireExpert>
                  <EditBlog />
                </RequireExpert>
              }
            ></Route>
            {/* user dashboard */}

            <Route
              path="order"
              element={
                <RequireNonAdmin>
                  <UserOrder />
                </RequireNonAdmin>
              }
            ></Route>
            <Route
              path="message"
              element={
                <RequireNonAdmin>
                  <Expert />
                </RequireNonAdmin>
              }
            ></Route>
            <Route
              path="add-review"
              element={
                <RequireNonAdmin>
                  <AddReview />
                </RequireNonAdmin>
              }
            ></Route>
            {/* ashik dashboard */}
            <Route
              path="add-quiz"
              element={
                <RequireAdmin>
                  <AddQuiz />
                </RequireAdmin>
              }
            ></Route>
          </Route>
          <Route path="/chat/expert" element={<Chat />}></Route>
        </Routes>
      </userContext>
      {/* facebook live chat */}
      <MessengerCustomerChat
        pageId="105555438910537"
        appId="1225310258009219"
      />
      {/* <Footer /> */}
      <Toaster />
      {/* <Test/> */}
    </div>
  );
}

export default App;
