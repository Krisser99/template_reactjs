import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicPage } from '~/routes'
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicPage.map((route, index) => {
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            const Page = route.component
            return (
              <Route key={index} path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
