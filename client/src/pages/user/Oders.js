import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

function Oders() {
  return (
    <Layout>
        <div className="container-fluid m-3 p-3">
              <div className="row">
                  <div className="col-md-3">
                      <UserMenu />
                  </div>
                  <div className="col-md-9">
                      <div className="card w-75 p-3">
                      <h1>oders</h1>
                      </div>
                  </div>

              </div>
          </div>
  </Layout>
  )
}

export default Oders