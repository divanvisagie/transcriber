import App, { Container } from "next/app"
import * as React from "react"

export default class MyApp extends App {
  public static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <nav>
          <ul className="org-bar org-color-dark">
            <li>
              <a id="main-logo" href="#">
                <svg height="17" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.9 20" enableBackground="new 0 0 55.9 20" xmlSpace="preserve">
                  <g>
                    <rect x="0" y="0.4" fill="#FFFFFF" width="6.9" height="19.6" />
                    <rect x="19.6" y="0.4" fill="#FFFFFF" width="6.9" height="19.6" />
                    <rect x="35.1" y="0.4" fill="#FFFFFF" width="6.9" height="19.6" />
                    <ellipse fill="#FFFFFF" cx="30.8" cy="3.9" rx="3.9" ry="3.9" />
                    <path
                      fill="#FFFFFF"
                      d="M50.5,11.1c-0.4-0.7-0.4-1.1,0-1.8l5.4-8.9h-7.5c0,0-4.5,7.4-5.2,8.4c-0.6,1-0.6,1.7,0,2.7
		c0.6,1.1,5.1,8.4,5.1,8.4h7.5C55.9,20,50.6,11.2,50.5,11.1z"
                    />
                    <path fill="#FFFFFF" d="M15.5,3.5c-0.4-1.8-1.9-3.1-3.8-3.1l0,0H7.3L11.7,20h7.5L15.5,3.5z" />
                  </g>
                </svg>
                Transkribering
              </a>
            </li>

            <li>
              <svg width="26" height="26" aria-hidden="true">
                <use xlinkHref="#icon-user-40px" />
              </svg>
              Stefan Ogden
            </li>
          </ul>
        </nav>
        <Component {...pageProps} />
      </Container>
    )
  }
}
