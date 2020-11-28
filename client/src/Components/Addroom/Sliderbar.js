import React, { Component } from "react";
// import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <a className="nav-link active" href="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                Dashboard
              </a>
              <div
                className="collapse"
                id="collapseShops"
                aria-labelledby="headingTwo"
                data-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <a className="nav-link sub_nav_link" href="/admin/shop/list">
                    All Shops
                  </a>
                  <a
                    className="nav-link sub_nav_link"
                    href="/admin/shop/create"
                  >
                    Add Shop
                  </a>
                </nav>
              </div>
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseProducts"
                aria-expanded="false"
                aria-controls="collapseProducts"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-box" />
                </div>
                Rooms
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse"
                id="collapseProducts"
                aria-labelledby="headingTwo"
                data-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <a
                    className="nav-link sub_nav_link"
                    href="/admin/product/list"
                  >
                    All Rooms
                  </a>
                  <a
                    className="nav-link sub_nav_link"
                    href="/admin/product/create"
                  >
                    Delete Rooms
                  </a>
                </nav>
              </div>

              <div
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <a className="nav-link sub_nav_link" href="posts.html">
                    All Posts
                  </a>
                  <a className="nav-link sub_nav_link" href="add_post.html">
                    Add New
                  </a>
                  <a
                    className="nav-link sub_nav_link"
                    href="post_categories.html"
                  >
                    Categories
                  </a>
                  <a className="nav-link sub_nav_link" href="post_tags.html">
                    Tags
                  </a>
                </nav>
              </div>

              <a className="nav-link" href="orders.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-cart-arrow-down" />
                </div>
                Orders
              </a>
              <a className="nav-link" href="customers.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-users" />
                </div>
                Customers
              </a>
              <a className="nav-link" href="offers.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-gift" />
                </div>
                Offers
              </a>

             
              <a className="nav-link" href="updater.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-cloud-upload-alt" />
                </div>
                Updater
              </a>
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseSettings"
                aria-expanded="false"
                aria-controls="collapseSettings"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-cog" />
                </div>
                Setting
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse"
                id="collapseSettings"
                aria-labelledby="headingTwo"
                data-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <a
                    className="nav-link sub_nav_link"
                    href="general_setting.html"
                  >
                    General Settings
                  </a>
                  <a
                    className="nav-link sub_nav_link"
                    href="payment_setting.html"
                  >
                    Payment Settings
                  </a>
                  <a
                    className="nav-link sub_nav_link"
                    href="email_setting.html"
                  >
                    Email Settings
                  </a>
                </nav>
              </div>
              <a className="nav-link" href="reports.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-chart-bar" />
                </div>
                Reports
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
