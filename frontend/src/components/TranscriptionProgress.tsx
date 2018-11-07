import * as React from "react"
import { Progress } from "react-sweet-progress"
import "react-sweet-progress/lib/style.css"
import { SweetProgressStatus } from "../enums"

interface IProps {
  message?: string
  percent?: number
  status?: SweetProgressStatus
  symbol?: string
}

interface IProgressProps {
  percent: number
  status: SweetProgressStatus | undefined
  type: string
  theme?: {
    active: {
      symbol: string
      color: string
    }
  }
}

const TranscriptionProgress = ({ message, percent = 100, status, symbol }: IProps) => {
  // Show animating dots if there is progress going on
  const className = status === SweetProgressStatus.Active ? "loading" : ""

  const props: IProgressProps = {
    percent,
    status,
    type: "circle",
  }

  if (symbol !== undefined) {
    props.theme = { active: { symbol, color: "#efefef" } }
  }

  return (
    <main id="progress">
      <div className="dropForm">
        <p className={className}>{message}</p>
        <Progress {...props} />
      </div>
    </main>
  )
}

export default TranscriptionProgress
