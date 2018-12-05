import React, { Component } from "react"
import { database } from "../firebaseApp"
import { ITranscript } from "../interfaces"

interface IProps {
  userId: string
}

interface IState {
  transcripts?: ITranscript[]
  transcriptIds?: string[]
}

class Transcripts2 extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  public componentDidMount() {
    // Check if have the user in props
    if (this.props.userId !== undefined) {
      this.fetchTranscripts(this.props.user.uid)
    }
  }

  public render() {
    return (
      <div className="trans-list org-color-shade org-shadow-l org-color-base">
        <div className="org-bar">
          <h2 className="org-text-l">Transkripsjoner</h2>
        </div>
        <hr />
        <table className="org-table">
          <thead>
            <tr>
              <th>Navn</th>
              <th>Dato</th>
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
    )
  }
  private fetchTranscripts(uid: string) {
    database
      .collection("/transcripts")
      .where("userId", "==", uid)
      .orderBy("createdAt", "desc")
      .onSnapshot(querySnapshot => {
        const transcripts = Array<ITranscript>()
        const transcriptIds = Array<string>()

        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          const transcript = doc.data() as ITranscript

          transcripts.push(transcript)

          // We only care about the ids of successful transcripts

          if (transcript.process && transcript.process.step === Step.Done) {
            transcriptIds.push(doc.id)
          }
        })

        this.setState({
          transcriptIds,
          transcripts,
        })
      })
  }
}

export default Transcripts2
