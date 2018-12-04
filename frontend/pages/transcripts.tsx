import * as React from "react"

const Transcripts = () => (
  <main className="org-grid">
    <style jsx={true}>{`
      body {
        overflow: hidden;
      }

      main {
        position: relative;
      }

      main hr {
        color: rgba(0, 0, 0, 0.05);
      }

      #main-logo {
        font-size: 1.4em;
        font-weight: 300;
      }

      .trans-list {
        position: relative;
        width: 400px;
        min-height: 100vh;
      }

      .trans-list .org-bar {
        padding-bottom: 6px;
      }

      .trans-list table {
        table-layout: auto;
      }

      @media (max-width: 930px) {
        .trans-list {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          z-index: 2;
        }

        /* move content view to the right of list view []->[] */
        .trans-content {
          position: absolute;
          left: 100%;
        }
      }

      .trans-content {
        background: white;
        min-height: 100vh;
        width: auto;
        flex: 1;
      }

      .trans-list table,
      .trans-content table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
      }

      .trans-list table th {
        font-weight: normal;
      }

      .trans-item {
        cursor: pointer;
      }

      .trans-item--selected {
        background: rgba(0, 0, 0, 0.1);
        border-left: 0.5em solid var(--org-color-primary);
      }

      .trans-item:active,
      .trans-item:hover {
        background: rgba(0, 0, 0, 0.2);
        transition: 0.2s;
      }
      .trans-list table th:first-of-type,
      .trans-list table td:first-of-type,
      .trans-content table td:first-of-type {
        padding: 0.6em;
        padding-left: 4em;
      }

      .trans-content table td:first-of-type {
        width: 100px;
        color: var(--org-color-primary);
      }

      #new-trans {
        position: absolute;
        bottom: 60px;
        left: calc(50% - 25px);
      }
    `}</style>
    <div className="trans-list org-color-shade org-shadow-l org-color-base">
      <div className="org-bar">
        <h2 className="org-text-l">Transkripsjoner</h2>
      </div>
      <hr />
      <table className="org-table">
        <thead>
          <tr>
            <th>Klippnavn</th>
            <th>Data</th>
            <th>Varighet</th>
          </tr>
        </thead>
        <tbody>
          <tr className="trans-item trans-item--selected">
            <td>Velkommen!</td>
            <td>16.11.2018</td>
            <td>00:00:35</td>
          </tr>
        </tbody>
      </table>
      <button id="new-trans" className="org-btn org-btn--primary org-btn--round">
        <svg width="40" height="40" aria-hidden="true">
          <use xlinkHref="#icon-pluss" />
        </svg>
      </button>
    </div>
    <div className="trans-content org-s-12of12">
      <div className="org-bar">
        <h2 className="org-text-l">Velkommen!</h2>
        <button className="org-btn">
          <svg width="15" height="15" aria-hidden="true">
            <use xlinkHref="#icon-garbage" />
          </svg>
          Slett jobb
        </button>
        <button className="org-btn org-btn--primary">
          <svg width="15" height="15" aria-hidden="true">
            <use xlinkHref="#icon-download" />
          </svg>
          Eksporter dokument
        </button>
      </div>
      <hr />
      <div className="trans-document">
        <table className="org-table">
          <thead />
          <tbody>
            <tr className="trans-timepoint">
              <td>00:00:00</td>
              <td>velkommen til transkriberingsverktøyet til nrk</td>
            </tr>
            <tr className="trans-timepoint">
              <td>00:00:00</td>
              <td>du ser nå et ferdig transkribert dokument</td>
            </tr>
            <tr className="trans-timepoint">
              <td>00:00:15</td>
              <td>for å spille av lydfilen den er basert på trykk på avspilleren under</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
)

export default Transcripts
