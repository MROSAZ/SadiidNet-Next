import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Reliable Hosting and SaaS Solutions for Businesses</title>
          <meta
            name="description"
            content="Discover easy-to-use hosting and a wide range of SaaS solutions at Sadiid.Net. Empower your business with our reliable services, tailored for SMBs. Explore now!"
          />
          <meta
            property="og:title"
            content="Reliable Hosting and SaaS Solutions for Businesses"
          />
          <meta
            property="og:description"
            content="Discover easy-to-use hosting and a wide range of SaaS solutions at Sadiid.Net. Empower your business with our reliable services, tailored for SMBs. Explore now!"
          />
        </Head>
        <div id="Header" data-role="Header" className="home-navbar-container">
          <div id="header" className="home-navbar">
            <img
              alt="image"
              src="/sadiid-high-resolution-logo-transparent-200h.png"
              className="home-image"
            />
            <div className="home-links-container">
              <a href="#features" className="home-link Anchor">
                features
              </a>
              <a href="#services" className="home-link1 Anchor">
                services
              </a>
              <a href="#about-us" className="home-link2 Anchor">
                About Us
              </a>
              <a href="#contact" className="home-link3 Anchor">
                contact
              </a>
            </div>
            <div className="home-cta-container">
              <a
                href="https://erp.sadiid.net"
                target="_blank"
                rel="noreferrer noopener"
                className="home-cta-btn button"
              >
                login
              </a>
              <div data-role="BurgerMenu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-top">
                <img
                  alt="image"
                  src="/default-img.svg"
                  className="home-image1"
                />
                <div data-role="CloseMobileMenu" className="home-container1">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-mid">
                <div className="home-links-container1">
                  <a href="#features" className="home-link4 Anchor">
                    features
                  </a>
                  <a href="#services" className="home-link5 Anchor">
                    services
                  </a>
                  <a href="#about-us" className="home-link6 Anchor">
                    About Us
                  </a>
                  <a href="#contact" className="home-link7 Anchor">
                    contact
                  </a>
                </div>
                <button className="home-cta-btn1 Anchor button">
                  sTART BUILDING
                </button>
              </div>
              <div className="home-bot">
                <div className="home-social-links-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Hero" className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading">
              Fast Hosting, Seamless Solutions, Lasting Success
            </h1>
            <span className="home-text">
              At Sadiid.Net, we&apos;re not just another hosting and SaaS
              provider. We&apos;re your dedicated partner in the digital
              landscape, offering lightning-fast hosting services and a
              comprehensive suite of SaaS solutions tailored for businesses like
              yours. With our cutting-edge technology and unwavering support, we
              pave the way for your online success.
            </span>
            <div className="home-container2">
              <a
                href="https://erp.sadiid.net"
                target="_blank"
                rel="noreferrer noopener"
                className="home-cta-btn2 button"
              >
                Explore Plans
              </a>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1487777571634-48eb9b252b68?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxib29zdCUyNTIwYnVzaW5lc3N8ZW58MHx8fHwxNjk4NjI3ODgwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
            className="home-image2"
          />
        </div>
        <div className="home-section-separator"></div>
        <div id="features" className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text01 Section-Heading">Tell your story</h2>
            <span className="home-text02 Section-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </span>
          </div>
          <div className="home-cards-container">
            <div className="home-feature-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619548683455-23b17c3ddc30?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="home-image3"
              />
              <span className="home-heading1 Card-Heading">Why</span>
              <span className="home-text03 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
            <div className="home-feature-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619547871672-b6562e042c1e?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="home-image4"
              />
              <span className="home-heading2 Card-Heading">What</span>
              <span className="home-text04 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
            <div className="home-feature-card2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619555241737-9c364cf1fbce?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="home-image5"
              />
              <span className="home-heading3 Card-Heading">How</span>
              <span className="home-text05 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
        <div id="services" className="home-services">
          <div className="home-service-card">
            <div className="home-card-content">
              <h3 className="home-text06 BigCard-Heading">Service name</h3>
              <span className="home-text07 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button className="home-button button Anchor">READ MORE</button>
            </div>
          </div>
          <div className="home-service-card1">
            <div className="home-card-content1">
              <h3 className="home-text08 BigCard-Heading">Service name</h3>
              <span className="home-text09 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button type="button" className="home-button1 button Anchor">
                READ MORE
              </button>
            </div>
          </div>
          <div className="home-service-card2">
            <div className="home-card-content2">
              <h3 className="home-text10 BigCard-Heading">Service name</h3>
              <span className="home-text11 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button className="home-button2 Anchor button">READ MORE</button>
            </div>
          </div>
          <div className="home-service-card3">
            <div className="home-card-content3">
              <h3 className="home-text12 BigCard-Heading">Service name</h3>
              <span className="home-text13 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button className="home-button3 button Anchor">READ MORE</button>
            </div>
          </div>
        </div>
        <div id="about-us" className="home-about-us">
          <div className="home-heading-container1">
            <h2 className="home-text14 Section-Heading">
              What&apos;s the story behind our product?
            </h2>
            <span className="home-secondary-text Section-Text">
              {' '}
              Lorem upsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod.
            </span>
            <button className="home-cta-btn3 button Anchor">
              START BUILDING
            </button>
          </div>
          <div className="home-text-container">
            <span className="home-text15 Section-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <span className="home-text16 Section-Text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </span>
          </div>
          <button className="home-cta-btn4 button Anchor">
            START BUILDING
          </button>
        </div>
        <div className="home-section-separator1"></div>
        <div className="home-testimonials">
          <h2 className="home-text17 Section-Heading">
            What are they saying about us?
          </h2>
          <div className="home-cards-container1">
            <div className="home-testimonial-card">
              <div className="home-card-heading">
                <div className="home-name-and-position">
                  <span className="Card-Heading">Will Evans</span>
                  <span className="home-position Card-Text">Position</span>
                </div>
                <div className="home-stars-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon10"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon12"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon14"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon16"
                  >
                    <path d="M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon18"
                  >
                    <path d="M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-text18 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
            <div className="home-testimonial-card1">
              <div className="home-card-heading1">
                <div className="home-name-and-position1">
                  <span className="Card-Heading">Marie Alba</span>
                  <span className="home-position1 Card-Text">Position</span>
                </div>
                <div className="home-stars-container1">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon20"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon22"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon24"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon26"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon28"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-text19 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
            <div className="home-testimonial-card2">
              <div className="home-card-heading2">
                <div className="home-name-and-position2">
                  <span className="Card-Heading">Taylor Sam</span>
                  <span className="home-position2 Card-Text">Position</span>
                </div>
                <div className="home-stars-container2">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon30"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon32"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon34"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon36"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon38"
                  >
                    <path d="M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-text20 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
        <div id="contact" className="home-contact">
          <div className="home-content-container">
            <h2 className="home-text21 Section-Heading">
              This is where to find us
            </h2>
            <div className="home-locations-container">
              <div className="home-location-1">
                <span className="home-heading4">London Office</span>
                <div className="home-adress">
                  <svg viewBox="0 0 1024 1024" className="home-icon40">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="Section-Text">Address</span>
                </div>
                <div className="home-email">
                  <svg viewBox="0 0 1024 1024" className="home-icon42">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="Section-Text">E-mail Address</span>
                </div>
                <div className="home-phone">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon44"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <span className="Section-Text">Phone Number</span>
                </div>
              </div>
              <div className="home-location-2">
                <span className="home-heading5">New York Office</span>
                <div className="home-adress1">
                  <svg viewBox="0 0 1024 1024" className="home-icon46">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="Section-Text">Address</span>
                </div>
                <div className="home-email1">
                  <svg viewBox="0 0 1024 1024" className="home-icon48">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="Section-Text">E-mail Address</span>
                </div>
                <div className="home-phone1">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon50"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <span className="Section-Text">Phone Number</span>
                </div>
              </div>
            </div>
            <div className="home-social-links-container1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon52">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon54">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon56">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
          </div>
          <img alt="image" src="/default-img.svg" className="home-image6" />
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar {
            width: 100%;
            height: 50px;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            min-width: auto;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-image {
            width: auto;
            height: 28px;
            z-index: 100;
            min-width: auto;
            align-self: center;
            object-fit: cover;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            border-radius: 0px;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link1 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link2 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link3 {
            text-decoration: none;
          }
          .home-cta-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cta-btn {
            color: var(--dl-color-gray-white);
            height: 28px;
            font-size: 18px;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 700;
            line-height: 1.55;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 34px;
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgb(58, 38, 239);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-burger-menu {
            display: none;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
          }
          .home-icon {
            width: 36px;
            height: 36px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image1 {
            width: 50px;
            object-fit: cover;
          }
          .home-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
          }
          .home-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .home-link4 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link5 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link6 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link7 {
            text-decoration: none;
          }
          .home-cta-btn1 {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 34px;
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-100);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-bot {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-social-links-container {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon04 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon06 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon08 {
            width: 24px;
            height: 24px;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-hero-text-container {
            width: 485px;
            display: flex;
            align-items: flex-start;
            margin-left: 50px;
            flex-direction: column;
          }
          .home-heading {
            font-size: 48px;
            font-family: 'Roboto';
            font-weight: 700;
            line-height: 1.22;
            margin-bottom: var(--dl-space-space-tripleunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-text {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-cta-btn2 {
            flex: 1;
            color: var(--dl-color-gray-white);
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-style: solid;
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .home-image2 {
            width: 729px;
            object-fit: contain;
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tenunits);
            background-color: rgba(243, 194, 164, 0.23);
          }
          .home-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text01 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text02 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-feature-card {
            width: 30%;
            display: flex;
            position: relative;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-image3 {
            width: 100px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .home-heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text03 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-feature-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-image4 {
            width: 100px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .home-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text04 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-feature-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-image5 {
            width: 100px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .home-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text05 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-services {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-service-card {
            width: 49%;
            display: flex;
            min-height: 500px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-card-content {
            margin: var(--dl-space-space-fiveunits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text06 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text07 {
            color: var(--dl-color-primary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-button {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-service-card1 {
            width: 49%;
            display: flex;
            min-height: 500px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-card-content1 {
            margin: var(--dl-space-space-fiveunits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text08 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text09 {
            color: var(--dl-color-primary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-service-card2 {
            width: 49%;
            display: flex;
            min-height: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-card-content2 {
            margin: var(--dl-space-space-fiveunits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text10 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text11 {
            color: var(--dl-color-primary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-button2 {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-service-card3 {
            width: 49%;
            display: flex;
            min-height: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-card-content3 {
            margin: var(--dl-space-space-fiveunits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text12 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text13 {
            color: var(--dl-color-primary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-button3 {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-about-us {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-heading-container1 {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text14 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-secondary-text {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-cta-btn3 {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text15 {
            color: var(--dl-color-gray-500);
          }
          .home-text16 {
            color: var(--dl-color-gray-500);
          }
          .home-cta-btn4 {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-testimonials {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-text17 {
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-cards-container1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-testimonial-card {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card-heading {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name-and-position {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-position {
            color: var(--dl-color-gray-700);
          }
          .home-stars-container {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon10 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon12 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon14 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon16 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon18 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .home-text18 {
            color: var(--dl-color-gray-500);
            text-align: left;
          }
          .home-testimonial-card1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card-heading1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name-and-position1 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-position1 {
            color: var(--dl-color-gray-700);
          }
          .home-stars-container1 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon20 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon22 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon24 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon26 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon28 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .home-text19 {
            color: var(--dl-color-gray-500);
            text-align: left;
          }
          .home-testimonial-card2 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card-heading2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name-and-position2 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-position2 {
            color: var(--dl-color-gray-700);
          }
          .home-stars-container2 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon30 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon32 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon34 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon36 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon38 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .home-text20 {
            color: var(--dl-color-gray-500);
            text-align: left;
          }
          .home-contact {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-content-container {
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: stretch;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            flex-direction: column;
            justify-content: flex-start;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text21 {
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-locations-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-location-1 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-heading4 {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon40 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-email {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon42 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon44 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-location-2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading5 {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-adress1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon46 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-email1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon48 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-phone1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon50 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-social-links-container1 {
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon52 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon54 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon56 {
            width: 24px;
            height: 24px;
          }
          .home-image6 {
            width: 50%;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .home-image {
              height: auto;
              align-self: stretch;
            }
            .home-cta-container {
              position: relative;
            }
            .home-cta-btn {
              flex: 0;
              color: var(--dl-color-gray-white);
              width: auto;
              display: flex;
              font-size: 18px;
              align-self: stretch;
              box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
              font-style: normal;
              font-family: Exo 2;
              font-weight: 700;
              line-height: 1.55;
              border-radius: var(--dl-radius-radius-radius4);
              text-transform: capitalize;
              text-decoration: none;
              background-color: rgb(2, 177, 89);
            }
            .home-heading {
              font-size: 48px;
              font-family: Roboto;
              font-weight: 700;
              line-height: 1.22;
              text-transform: none;
              text-decoration: none;
            }
            .home-text {
              color: var(--dl-color-gray-500);
            }
            .home-cta-btn2 {
              background-color: rgb(21, 34, 50);
            }
            .home-card-content1 {
              padding-bottom: 40px;
            }
          }
          @media (max-width: 1200px) {
            .home-links-container {
              align-self: stretch;
            }
            .home-cta-btn {
              width: 80px;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column-reverse;
            }
            .home-hero-text-container {
              width: 80%;
              margin-left: 0px;
            }
            .home-cta-btn2 {
              width: 40%;
            }
            .home-image2 {
              width: 80%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-feature-card {
              align-self: center;
            }
            .home-about-us {
              flex-direction: column;
            }
            .home-heading-container1 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-cta-btn3 {
              width: 40%;
              display: none;
            }
            .home-text-container {
              width: 100%;
            }
            .home-cta-btn4 {
              width: 280px;
              display: block;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-locations-container {
              flex-wrap: wrap;
            }
            .home-location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-image6 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .home-links-container {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon {
              fill: var(--dl-color-gray-white);
            }
            .home-heading {
              text-align: center;
            }
            .home-text {
              text-align: center;
            }
            .home-cta-btn2 {
              width: auto;
              align-self: center;
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-feature-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-feature-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-feature-card2 {
              width: 70%;
            }
            .home-card-content {
              margin: 0px;
            }
            .home-card-content1 {
              margin: 0px;
            }
            .home-card-content2 {
              margin: 0px;
            }
            .home-card-content3 {
              margin: 0px;
            }
            .home-about-us {
              align-items: center;
            }
            .home-heading-container1 {
              align-items: center;
            }
            .home-text14 {
              text-align: center;
            }
            .home-secondary-text {
              text-align: center;
            }
            .home-text17 {
              text-align: center;
            }
            .home-cards-container1 {
              align-items: center;
              flex-direction: column;
            }
            .home-testimonial-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-stars-container {
              justify-content: flex-end;
            }
            .home-testimonial-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-stars-container1 {
              justify-content: flex-end;
            }
            .home-testimonial-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-stars-container2 {
              justify-content: flex-end;
            }
            .home-contact {
              padding-right: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .home-content-container {
              width: 100%;
            }
            .home-image6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-cta-btn {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .home-cta-btn1 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-hero-text-container {
              width: 100%;
            }
            .home-image2 {
              width: 100%;
            }
            .home-feature-card {
              width: 100%;
            }
            .home-feature-card1 {
              width: 100%;
            }
            .home-feature-card2 {
              width: 100%;
            }
            .home-service-card {
              width: 100%;
            }
            .home-service-card1 {
              width: 100%;
            }
            .home-service-card2 {
              width: 100%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-service-card3 {
              width: 100%;
            }
            .home-secondary-text {
              text-align: center;
            }
            .home-text17 {
              text-align: center;
            }
            .home-testimonial-card {
              width: 100%;
            }
            .home-testimonial-card1 {
              width: 100%;
            }
            .home-testimonial-card2 {
              width: 100%;
            }
            .home-content-container {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text21 {
              text-align: center;
            }
            .home-locations-container {
              margin-bottom: 0px;
            }
            .home-location-1 {
              margin-right: 0px;
            }
            .home-social-links-container1 {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
