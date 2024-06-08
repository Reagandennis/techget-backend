import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { TutorList } from "./tutor/TutorList";
import { TutorCreate } from "./tutor/TutorCreate";
import { TutorEdit } from "./tutor/TutorEdit";
import { TutorShow } from "./tutor/TutorShow";
import { InstitutionList } from "./institution/InstitutionList";
import { InstitutionCreate } from "./institution/InstitutionCreate";
import { InstitutionEdit } from "./institution/InstitutionEdit";
import { InstitutionShow } from "./institution/InstitutionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Dashboard"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Tutor"
          list={TutorList}
          edit={TutorEdit}
          create={TutorCreate}
          show={TutorShow}
        />
        <Resource
          name="Institution"
          list={InstitutionList}
          edit={InstitutionEdit}
          create={InstitutionCreate}
          show={InstitutionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
