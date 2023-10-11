import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import FormComponent from './components/FormComponent/FormComponent';
import ListItem from './components/listItems/ListItems';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HelloWorld />,
    },
    {
      path: "/form",
      element: <FormComponent />,
    },
    {
      path: "/list",
      element: <ListItem />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
